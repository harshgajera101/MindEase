# app.py
import os
import sys
import uuid
import datetime
import traceback

from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# DB / ORM
from flask_sqlalchemy import SQLAlchemy

# Optional libs for Clerk verification / JWT decode
import requests
import jwt  # PyJWT

# --- load env ---
load_dotenv()

# --- spaCy (your original logic) ---
try:
    import spacy
    nlp = spacy.load("en_core_web_sm")
except Exception:
    print("SpaCy model 'en_core_web_sm' not found. Please install it:")
    print("python -m spacy download en_core_web_sm")
    sys.exit(1)

# --- Flask + DB init ---
app = Flask(__name__)
CORS(app)

DATABASE_URL = os.environ.get("DATABASE_URL", "sqlite:///mindease.db")
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# -----------------------
# Database models
# -----------------------
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    clerk_user_id = db.Column(db.String(200), unique=True, index=True)
    email = db.Column(db.String(200))
    name = db.Column(db.String(200))
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    assessments = db.relationship("Assessment", backref="user", lazy=True)
    chat_sessions = db.relationship("ChatSession", backref="user", lazy=True)

class Assessment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=True)
    topic = db.Column(db.String(50))
    score = db.Column(db.Integer)
    level_key = db.Column(db.String(50))
    level_desc = db.Column(db.String(200))
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

class ChatSession(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    session_uuid = db.Column(db.String(100), unique=True, index=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=True)
    topic = db.Column(db.String(50))
    score = db.Column(db.Integer)
    level_key = db.Column(db.String(50))
    level_desc = db.Column(db.String(200))
    status = db.Column(db.String(20), default="active")  # active / closed
    started_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    ended_at = db.Column(db.DateTime, nullable=True)

    messages = db.relationship("ChatMessage", backref="session", lazy=True, cascade="all, delete-orphan")

class ChatMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.Integer, db.ForeignKey("chat_session.id"), nullable=False)
    sender = db.Column(db.String(10))  # 'user' or 'bot'
    message_text = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

# create tables on first run
with app.app_context():
    db.create_all()

# -----------------------
# Your task datasets (unchanged)
# -----------------------
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

# -----------------------
# Original logic helpers (kept / reused)
# -----------------------
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

# -----------------------
# Clerk helper: get / create local User from request
# -----------------------
CLERK_API_KEY = os.environ.get("CLERK_API_KEY")   # optional - recommended for production
CLERK_API_URL = os.environ.get("CLERK_API_URL", "https://api.clerk.dev")

def get_or_create_user_from_request():
    """
    Try in order:
      1) X-Clerk-User-Id header (useful for local-dev/testing if you set it from frontend)
      2) Authorization: Bearer <token> - attempt to resolve via Clerk API using CLERK_API_KEY (recommended for production)
      3) Authorization: Bearer <token> - decode token without verification (fallback for dev only)
    Returns User model instance or None.
    """
    try:
        clerk_id = request.headers.get("X-Clerk-User-Id")
        if clerk_id:
            user = User.query.filter_by(clerk_user_id=clerk_id).first()
            if not user:
                user = User(clerk_user_id=clerk_id)
                db.session.add(user)
                db.session.commit()
            return user

        auth = request.headers.get("Authorization", "")
        if auth.startswith("Bearer "):
            token = auth.split(" ", 1)[1]

            # 1) If you have CLERK_API_KEY, you can verify token via Clerk REST API (safer)
            if CLERK_API_KEY:
                # Clerk has endpoints to look up sessions by token — adapt if Clerk changes API.
                # Here we attempt a session lookup to get user_id:
                try:
                    resp = requests.get(
                        f"{CLERK_API_URL}/v1/sessions",
                        headers={"Authorization": f"Bearer {CLERK_API_KEY}"},
                        params={"token": token},
                        timeout=5
                    )
                    if resp.status_code == 200:
                        data = resp.json()
                        items = data.get("data", [])
                        if items:
                            user_id = items[0].get("user_id")
                            if user_id:
                                user = User.query.filter_by(clerk_user_id=user_id).first()
                                if not user:
                                    # fetch user metadata
                                    uresp = requests.get(
                                        f"{CLERK_API_URL}/v1/users/{user_id}",
                                        headers={"Authorization": f"Bearer {CLERK_API_KEY}"},
                                        timeout=5
                                    )
                                    if uresp.status_code == 200:
                                        udata = uresp.json()
                                        email = None
                                        if udata.get("primary_email_address"):
                                            email = udata.get("primary_email_address", {}).get("email_address")
                                        name = udata.get("first_name") or udata.get("first_name") + " " + (udata.get("last_name") or "")
                                        user = User(clerk_user_id=user_id, email=email, name=name)
                                    else:
                                        user = User(clerk_user_id=user_id)
                                    db.session.add(user); db.session.commit()
                                return user
                except Exception:
                    print("Clerk API lookup failed:", traceback.format_exc())

            # 2) fallback: decode token without verification to get sub / user id (DEV ONLY)
            try:
                decoded = jwt.decode(token, options={"verify_signature": False})
                candidate = decoded.get("sub") or decoded.get("user_id") or decoded.get("userId")
                if candidate:
                    user = User.query.filter_by(clerk_user_id=candidate).first()
                    if not user:
                        user = User(clerk_user_id=candidate)
                        db.session.add(user); db.session.commit()
                    return user
            except Exception:
                pass

    except Exception:
        print("get_or_create_user_from_request error:", traceback.format_exc())

    return None

# -----------------------
# In-memory session state (keeps your original state machine)
# -----------------------
# keys = session_uuid (string) -> { tasks, task_index, step }
chat_sessions = {}

# -----------------------
# endpoint: start_session (now persists Assessment + ChatSession + initial bot messages)
# -----------------------
@app.route("/start_session", methods=["POST"])
def start_session():
    data = request.get_json() or {}
    topic = (data.get("topic") or "").lower()
    score = data.get("score")

    if topic not in ("depression", "anxiety"):
        return jsonify({"error": "topic must be 'depression' or 'anxiety'"}), 400
    if score is None or not isinstance(score, (int, float)):
        return jsonify({"error": "score (number) is required"}), 400
    score = int(score)

    # compute level
    if topic == "depression":
        level_key, level_desc = get_depression_level(score)
        tasks_data = DEPRESSION_TASKS
    else:
        level_key, level_desc = get_anxiety_level(score)
        tasks_data = ANXIETY_TASKS

    if not level_key:
        return jsonify({"error": "Invalid score"}), 400

    # link to user if possible
    user = get_or_create_user_from_request()

    # store assessment (if we have a user)
    assessment = None
    if user:
        assessment = Assessment(
            user_id=user.id,
            topic=topic,
            score=score,
            level_key=level_key,
            level_desc=level_desc
        )
        db.session.add(assessment)
        db.session.commit()

    # create persistent chat session
    session_uuid = str(uuid.uuid4())
    chat_sess = ChatSession(
        session_uuid=session_uuid,
        user_id=user.id if user else None,
        topic=topic,
        score=score,
        level_key=level_key,
        level_desc=level_desc,
        status="active"
    )
    db.session.add(chat_sess)
    db.session.commit()

    # create initial bot messages and persist them
    initial_bot_msgs = [
        f"Based on your results, it seems you may be experiencing symptoms of {level_desc}.",
        "Is that correct? (yes/no)"
    ]
    for m in initial_bot_msgs:
        cm = ChatMessage(session_id=chat_sess.id, sender="bot", message_text=m)
        db.session.add(cm)
    db.session.commit()

    # set up in-memory flow state (your original logic depends on this)
    chat_sessions[session_uuid] = {
        "tasks": tasks_data.get(level_key, []),
        "task_index": 0,
        "step": "confirm_diagnosis"
    }

    return jsonify({
        "session_id": session_uuid,
        "bot_responses": initial_bot_msgs,
        "assessment_id": assessment.id if assessment else None,
    })

# -----------------------
# endpoint: chat (receives user message, stores user message + bot responses)
# -----------------------
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json() or {}
    session_id = data.get("session_id")  # this is the UUID returned from /start_session
    user_message = (data.get("message") or "").strip()

    if not session_id or not user_message:
        return jsonify({"error": "session_id and message are required"}), 400

    # canonicalize
    user_message_lc = user_message.lower().strip()
    exit_keywords = {"bye", "by", "goodbye", "see you soon", "gotta go"}

    # persist the user message (if chat session exists)
    chat_session = ChatSession.query.filter_by(session_uuid=session_id).first()
    if not chat_session:
        return jsonify({"error": "Invalid session ID or session ended"}), 400

    # store user message
    user_msg_record = ChatMessage(session_id=chat_session.id, sender="user", message_text=user_message)
    db.session.add(user_msg_record)
    db.session.commit()

    # Handle exit right away
    if user_message_lc in exit_keywords:
        chat_session.status = "closed"
        chat_session.ended_at = datetime.datetime.utcnow()
        db.session.commit()

        bot_text = "Goodbye!"
        bot_msg = ChatMessage(session_id=chat_session.id, sender="bot", message_text=bot_text)
        db.session.add(bot_msg); db.session.commit()
        # reflect in-memory state if present
        chat_sessions.pop(session_id, None)
        return jsonify({"bot_responses": [bot_text]})

    # fetch in-memory conversational state
    state = chat_sessions.get(session_id)
    if not state:
        # if in-memory state expired (e.g., after restart), re-create minimal state from DB
        # we put user at "confirm_diagnosis" by default
        state = {
            "tasks": DEPRESSION_TASKS.get(chat_session.level_key, []) if chat_session.topic == "depression" else ANXIETY_TASKS.get(chat_session.level_key, []),
            "task_index": 0,
            "step": "confirm_diagnosis"
        }
        chat_sessions[session_id] = state

    bot_responses = []
    user_intent = get_intent(user_message)

    # replicate the logic you already had, but whenever we produce bot responses, persist them
    if state["step"] == "confirm_diagnosis":
        if user_intent == "positive":
            state["step"] = "ask_to_try"
            bot_responses.append("I understand this can be difficult. I have a few small, gentle tasks that might help you feel a bit of relief. Shall we try?")
        elif user_intent == "negative":
            state["step"] = "end"
            bot_responses.append("I see. My apologies. In that case, let's end our session here. Take care!")
            chat_session.status = "closed"
            chat_session.ended_at = datetime.datetime.utcnow()
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
            chat_session.status = "closed"
            chat_session.ended_at = datetime.datetime.utcnow()
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
        if 'thank' in user_message_lc:
            bot_responses.append("You're most welcome! Feel free to say 'bye' when you're ready.")
        elif user_message_lc in exit_keywords:
            bot_responses.append("Goodbye!")
            state["step"] = "end"
            chat_session.status = "closed"
            chat_session.ended_at = datetime.datetime.utcnow()
        else:
            bot_responses.append("I appreciate our chat. Please take care of yourself.")
            state["step"] = "end"
            chat_session.status = "closed"
            chat_session.ended_at = datetime.datetime.utcnow()

    # persist bot responses as messages
    for br in bot_responses:
        bm = ChatMessage(session_id=chat_session.id, sender="bot", message_text=br)
        db.session.add(bm)
    db.session.commit()

    # update in-memory state and DB session record
    chat_sessions[session_id] = state
    db.session.add(chat_session)
    db.session.commit()

    return jsonify({"bot_responses": bot_responses})

# -----------------------
# History endpoints (protected - require Clerk token or X-Clerk-User-Id)
# -----------------------
@app.route("/api/assessments", methods=["GET"])
def list_assessments():
    user = get_or_create_user_from_request()
    if not user:
        return jsonify({"error": "Unauthorized - provide Clerk token or X-Clerk-User-Id header"}), 401
    rows = Assessment.query.filter_by(user_id=user.id).order_by(Assessment.created_at.desc()).all()
    out = []
    for r in rows:
        out.append({
            "id": r.id,
            "topic": r.topic,
            "score": r.score,
            "level_key": r.level_key,
            "level_desc": r.level_desc,
            "created_at": r.created_at.isoformat()
        })
    return jsonify(out)

@app.route("/api/sessions", methods=["GET"])
def list_sessions():
    user = get_or_create_user_from_request()
    if not user:
        return jsonify({"error": "Unauthorized - provide Clerk token or X-Clerk-User-Id header"}), 401
    rows = ChatSession.query.filter_by(user_id=user.id).order_by(ChatSession.started_at.desc()).all()
    out = []
    for s in rows:
        out.append({
            "session_uuid": s.session_uuid,
            "topic": s.topic,
            "score": s.score,
            "level_key": s.level_key,
            "level_desc": s.level_desc,
            "status": s.status,
            "started_at": s.started_at.isoformat(),
            "ended_at": s.ended_at.isoformat() if s.ended_at else None
        })
    return jsonify(out)

@app.route("/api/sessions/<session_uuid>/messages", methods=["GET"])
def get_session_messages(session_uuid):
    user = get_or_create_user_from_request()
    if not user:
        return jsonify({"error": "Unauthorized - provide Clerk token or X-Clerk-User-Id header"}), 401
    session = ChatSession.query.filter_by(session_uuid=session_uuid, user_id=user.id).first()
    if not session:
        return jsonify({"error": "Session not found"}), 404
    msgs = ChatMessage.query.filter_by(session_id=session.id).order_by(ChatMessage.created_at).all()
    out = []
    for m in msgs:
        out.append({
            "sender": m.sender,
            "message_text": m.message_text,
            "created_at": m.created_at.isoformat()
        })
    return jsonify(out)

# -----------------------
# Optional: fetch single session summary
# -----------------------
@app.route("/api/sessions/<session_uuid>/summary", methods=["GET"])
def get_session_summary(session_uuid):
    user = get_or_create_user_from_request()
    if not user:
        return jsonify({"error": "Unauthorized - provide Clerk token or X-Clerk-User-Id header"}), 401
    s = ChatSession.query.filter_by(session_uuid=session_uuid, user_id=user.id).first()
    if not s:
        return jsonify({"error": "Session not found"}), 404
    return jsonify({
        "session_uuid": s.session_uuid,
        "topic": s.topic,
        "score": s.score,
        "level_key": s.level_key,
        "level_desc": s.level_desc,
        "status": s.status,
        "started_at": s.started_at.isoformat(),
        "ended_at": s.ended_at.isoformat() if s.ended_at else None
    })

# -----------------------
# run server
# -----------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, port=port)
