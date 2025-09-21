import sys
import uuid
import spacy
from flask import Flask, request, jsonify
from flask_cors import CORS


try:
    nlp = spacy.load("en_core_web_sm")
except OSError:
    print("SpaCy English model 'en_core_web_sm' not found. Please install it with:")
    print("python -m spacy download en_core_web_sm")
    sys.exit(1)

app = Flask(__name__)
CORS(app)

# --- Datasets ---
DEPRESSION_TASKS = {
    "Minimal": [
        "Take a moment to stretch your body. Reach for the sky, then touch your toes. Hold each for 15 seconds.",
        "Think of one small thing you are grateful for today. It could be anything from a sunny day to a cup of coffee.",
        "Step outside for 5 minutes, or look out a window. Just notice the world around you without judgment."
    ],
    "Mild": [
        "Let's try a simple breathing exercise. Breathe in for 4 seconds, hold for 4, and breathe out for 6. Repeat this 5 times.",
        "Put on a favorite upbeat song and just listen, or even dance if you feel up to it.",
        "Write down three things you accomplished today, no matter how small. (e.g., 'got out of bed', 'ate breakfast').",
        "Tidy up one small area around you for just 5 minutes. A clear space can sometimes help clear the mind."
    ],
    "Moderate": [
        "Let's start with a grounding technique. Name 5 things you can see, 4 things you can feel, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.",
        "Consider reaching out to one friend or family member with a simple 'hello'. You don't need a long conversation.",
        "Go for a short 10-minute walk, focusing on the rhythm of your steps.",
        "Do a 'brain dump'. Write down everything on your mind for 5 minutes, then you can throw the paper away. The goal is to get it out of your head."
    ],
    "Severe": [
        "First, let's focus on your breath. Place a hand on your stomach and feel it rise and fall as you breathe in and out slowly. Do this 10 times.",
        "Let's try a simple, comforting activity. Wrap yourself in a warm blanket or make a warm, non-caffeinated drink like herbal tea.",
        "It's really important to talk to someone. Please consider calling a friend, family member, or a support hotline. You are not alone in this.",
        "If you feel up to it, splash some cool water on your face. It can be a gentle way to reset your senses."
    ]
}

ANXIETY_TASKS = {
    "Minimal": [
        "Let's try a quick mindfulness exercise. Close your eyes and take three slow, deep breaths. Just focus on the air moving in and out.",
        "Look around you and find one object. Describe it to yourself in detail: its color, texture, shape, and weight. This helps ground you in the present.",
        "Gently clench and then release your fists. Do this five times, noticing the difference between tension and relaxation."
    ],
    "Mild": [
        "Let's try 'box breathing'. Breathe in for a count of 4, hold for 4, breathe out for 4, and hold for 4. Repeat this for one minute.",
        "Put on some calming instrumental music or nature sounds for a few minutes. Allow your mind to focus only on the sounds.",
        "Go for a quick 5-minute walk, either indoors or outdoors. Pay attention to the feeling of your feet on the ground with each step.",
        "Write down what's on your mind. Don't worry about grammar or structure, just get the thoughts out of your head and onto paper."
    ],
    "Moderate": [
        "Let's do the '5-4-3-2-1' grounding technique. Name 5 things you can see, 4 things you can feel, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.",
        "Try 'progressive muscle relaxation'. Tense your toes for 5 seconds, then release. Move up to your calves, thighs, and so on, tensing and releasing each muscle group.",
        "Anxious thoughts often focus on 'what if'. Gently challenge a worry by asking: 'What is a more realistic outcome?' or 'What can I do about this right now?'",
        "Engage your senses with something comforting, like smelling a pleasant scent (like a candle or essential oil), or sipping a warm, non-caffeinated drink."
    ],
    "Severe": [
        "Let's focus completely on your breath. Place your hand on your belly and feel it rise and fall. Count each exhale until you get to 10. If you lose track, just start again from 1.",
        "Hold a piece of ice in your hand or splash some cold water on your face. The strong sensation can help interrupt overwhelming feelings.",
        "It's very important to ground yourself right now. Press your feet firmly into the floor. Feel how solid it is. Remind yourself that you are right here, in this moment, and you are safe.",
        "When you feel ready, please consider reaching out to someone you trust or a support hotline. Talking about these feelings can make a significant difference."
    ]
}

# --- In-memory storage for chat sessions ---
chat_sessions = {}

def get_depression_level(score):
    if 0 <= score <= 4: return "Minimal", "Minimal Depression"
    elif 5 <= score <= 9: return "Mild", "Mild Depression"
    elif 10 <= score <= 14: return "Moderate", "Moderate Depression"
    elif 15 <= score <= 30: return "Severe", "Severe Depression"
    else: return None, None

def get_anxiety_level(score):
    if 0 <= score <= 4: return "Minimal", "Minimal Anxiety"
    elif 5 <= score <= 9: return "Mild", "Mild Anxiety"
    elif 10 <= score <= 14: return "Moderate", "Moderate Anxiety"
    elif 15 <= score <= 21: return "Severe", "Severe Anxiety"
    else: return None, None

def get_intent(user_message):
    """
    Analyzes a user's message using spaCy to determine the intent.
    Returns one of 'positive', 'negative', 'later', or 'unknown'.
    """
    doc = nlp(user_message.lower())

    positive_keywords = {"yes", "yeah", "yep", "sure", "ok", "okay", "correct", "true", "done", "finished", "completed", "thank", "thanks"}
    negative_keywords = {"no", "nope", "not", "don't", "can't", "never", "apologies"}
    later_keywords = {"later", "afterwards", "maybe", "not now"}

    if any(token.lemma_ in positive_keywords for token in doc):
        return "positive"
    elif any(token.lemma_ in negative_keywords for token in doc):
        return "negative"
    elif any(token.lemma_ in later_keywords for token in doc):
        return "later"
    
    if any(token.text in positive_keywords for token in doc):
        return "positive"
    elif any(token.text in negative_keywords for token in doc):
        return "negative"
    elif any(token.text in later_keywords for token in doc):
        return "later"

    return "unknown"

def get_sentiment(user_message):
    """
    Analyzes user message for sentiment based on a simple keyword list.
    Returns a positive or negative score.
    """
    positive_words = {"good", "great", "better", "well", "happy", "ok", "calm", "relieved"}
    negative_words = {"bad", "sad", "worse", "not good", "down", "stressed", "anxious", "tired", "difficult"}
    
    score = 0
    doc = nlp(user_message.lower())
    for token in doc:
        if token.lemma_ in positive_words:
            score += 1
        elif token.lemma_ in negative_words:
            score -= 1
    return score

@app.route('/start_session', methods=['POST'])
def start_session():
    data = request.get_json()
    topic = data.get('topic')
    score = data.get('score')

    level_key, level_description = (None, None)
    tasks_data = None
    if topic.lower() == 'depression':
        level_key, level_description = get_depression_level(score)
        tasks_data = DEPRESSION_TASKS
    elif topic.lower() == 'anxiety':
        level_key, level_description = get_anxiety_level(score)
        tasks_data = ANXIETY_TASKS

    if not level_key:
        return jsonify({"error": "Invalid score"}), 400

    session_id = str(uuid.uuid4())
    chat_sessions[session_id] = {
        "tasks": tasks_data.get(level_key, []),
        "task_index": 0,
        "step": "confirm_diagnosis"
    }

    response_data = {
        "session_id": session_id,
        "bot_responses": [
            f"Based on your results, it seems you may be experiencing symptoms of {level_description}.",
            "Is that correct? (yes/no)"
        ]
    }
    return jsonify(response_data)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    session_id = data.get('session_id')
    user_message = data.get('message', '').lower().strip()
    
    exit_keywords = {"bye", "by", "goodbye", "see you soon", "gotta go"}
    if user_message in exit_keywords:
        chat_sessions.pop(session_id, None)
        return jsonify({"bot_responses": ["Goodbye!"]})

    state = chat_sessions.get(session_id)
    if not state:
        return jsonify({"error": "Invalid session ID or session ended"}), 400

    bot_responses = []
    user_intent = get_intent(user_message)

    if state["step"] == "confirm_diagnosis":
        if user_intent == "positive":
            state["step"] = "ask_to_try"
            bot_responses.append("I understand this can be difficult. I have a few small, gentle tasks that might help you feel a bit of relief. Shall we try?")
        elif user_intent == "negative":
            state["step"] = "end"
            bot_responses.append("I see. My apologies. In that case, let's end our session here. Take care!")
        else:
            bot_responses.append("I'm sorry, I didn't quite understand. Please confirm if that is correct. (yes/no)")

    elif state["step"] == "ask_to_try":
        if user_intent == "positive":
            state["step"] = "in_task"
            bot_responses.append("Great. Let's start. Just take them one at a time.")
            if state["tasks"]:
                bot_responses.append(f'Task {state["task_index"] + 1}: {state["tasks"][state["task_index"]]}')
            else:
                state["step"] = "feeling_check"
                bot_responses.append("It seems there are no specific tasks for this level, but it's great you're engaging with your well-being. How are you feeling now?")
        elif user_intent == "negative":
            state["step"] = "end"
            bot_responses.append("That's completely okay. Thank you for your time. Please take care!")
        else:
            bot_responses.append("I'm sorry, I didn't quite understand. Please let me know if you would like to proceed.")

    elif state["step"] == "in_task":
        if user_intent == "positive" and len(user_message.split()) > 1:
            state["step"] = "feeling_check"
            sentiment_score = get_sentiment(user_message)
            
            if sentiment_score > 0:
                bot_responses.append("That's really good to hear. I'm glad you're feeling a bit better.")
            elif sentiment_score < 0:
                bot_responses.append("I'm sorry to hear that. Remember to be kind to yourself.")
            else:
                bot_responses.append("Thank you for sharing.")
            
            bot_responses.append("We've reached the end of the tasks for now.")
            state["step"] = "closing_session"
            bot_responses.append("Take care!")
            bot_responses.append("Feel free to say 'bye' or close this window when you're ready.")

        elif user_intent == "positive":
            bot_responses.append("Well done.")
            state["task_index"] += 1
            if state["task_index"] < len(state["tasks"]):
                bot_responses.append(f'Task {state["task_index"] + 1}: {state["tasks"][state["task_index"]]}')
            else:
                state["step"] = "feeling_check"
                bot_responses.append("We've reached the end of the tasks for now. How are you feeling?")
        elif user_intent == "negative":
            bot_responses.append("No problem at all. We can skip that one.")
            state["task_index"] += 1
            if state["task_index"] < len(state["tasks"]):
                bot_responses.append(f'Task {state["task_index"] + 1}: {state["tasks"][state["task_index"]]}')
            else:
                state["step"] = "feeling_check"
                bot_responses.append("We've reached the end of the tasks for now. How are you feeling?")
        elif user_intent == "later":
            bot_responses.append("Okay, maybe another time.")
            state["task_index"] += 1
            if state["task_index"] < len(state["tasks"]):
                bot_responses.append(f'Task {state["task_index"] + 1}: {state["tasks"][state["task_index"]]}')
            else:
                state["step"] = "feeling_check"
                bot_responses.append("We've reached the end of the tasks for now. How are you feeling?")
        else:
            bot_responses.append("I'm sorry, I didn't quite understand. Please let me know if you are 'done', 'no', or 'later'.")
            return jsonify({"bot_responses": bot_responses})
        
    elif state["step"] == "feeling_check":
        sentiment_score = get_sentiment(user_message)
        
        if sentiment_score > 0:
            bot_responses.append("That's great to hear! It's a positive step forward.")
        elif sentiment_score < 0:
            bot_responses.append("I'm sorry to hear that. Remember, it's okay to feel this way. These tasks are just small steps.")
        else:
            bot_responses.append("Thank you for sharing.")
        
        state["step"] = "closing_session"
        bot_responses.append("Take care!")
        bot_responses.append("Thanks for your time!")
        bot_responses.append("Feel free to say 'bye' or close this window when you're ready.")
    
    elif state["step"] == "closing_session":
        if 'thank' in user_message:
            bot_responses.append("You're most welcome! Feel free to say 'bye' when you're ready.")
        elif user_message in exit_keywords:
            bot_responses.append("Goodbye!")
            state["step"] = "end"
        else:
            bot_responses.append("I appreciate our chat. Please take care of yourself.")
            state["step"] = "end"

    chat_sessions[session_id] = state
    return jsonify({"bot_responses": bot_responses})

if __name__ == "__main__":
    app.run(debug=True, port=5000)