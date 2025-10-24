# 🌿 MindEase – AI-Powered Mental Wellness Companion

<img width="1470" height="832" alt="Screenshot 2025-10-24 at 6 57 23 PM" src="https://github.com/user-attachments/assets/e352e154-8810-4132-88d2-043533953520" />

> *"Your safe space for mental wellness, powered by AI and compassion."*

MindEase is an **AI-powered mental health awareness platform** designed to help individuals understand, manage, and overcome **depression and anxiety**. Through interactive assessments, intelligent chatbot support powered by **Mistral-7B-v0.1 LLM**, and evidence-based relaxation techniques, MindEase provides a comprehensive digital sanctuary for mental wellness.

[![TypeScript](https://img.shields.io/badge/TypeScript-90%25-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-9.7%25-3776ab?logo=python)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📌 Problem Statement

Mental health challenges, particularly depression and anxiety, affect millions of people worldwide, yet many face significant barriers to seeking help:

- **Lack of Awareness**: Many individuals struggle to recognize early signs of depression and anxiety
- **Limited Access**: Professional mental health support is often expensive, time-consuming, or geographically inaccessible
- **Stigma**: Fear of judgment prevents people from discussing their mental health concerns
- **Delayed Intervention**: Without proper assessment tools, mental health issues may worsen before being addressed
- **Insufficient Resources**: Limited availability of 24/7 support during crisis moments
- **Knowledge Gap**: Lack of accessible, reliable information about mental health conditions and coping strategies

---

## 💡 Solution

MindEase addresses these challenges through a comprehensive, AI-powered digital platform:

### **🎯 Core Solutions**

1. **Interactive Assessment Quizzes**
   - Evidence-based questionnaires to help users understand their depression and anxiety levels
   - Personalized results with actionable insights and recommendations
   - Track mental health patterns over time

2. **AI-Powered Chatbot Support**
   - 24/7 conversational support using **Mistral-7B-v0.1 LLM** for context-aware, empathetic responses
   - Personalized mental wellness guidance based on user conversations
   - Safe, judgment-free space for expressing feelings and concerns

3. **Educational Resources**
   - Comprehensive information about depression and anxiety symptoms, causes, and treatments
   - Expert-backed articles and blog posts on mental health topics
   - Evidence-based coping strategies and self-help techniques

4. **Relaxation & Mindfulness Tools**
   - Guided breathing exercises with visual animations
   - Healing sound library (ocean waves, forest rain, 432 Hz healing frequencies, Tibetan bowls)
   - Meditation and mindfulness practices for stress reduction

5. **Crisis Support Resources**
   - Immediate access to emergency hotlines and professional help
   - Clear guidance on when and how to seek professional intervention
   - Community support information and mental health services directory

---

## ✨ Key Features

### 🤖 **AI-Powered Chatbot (Mistral-7B-v0.1)**
- Real-time conversations with empathetic, context-aware AI responses
- Natural language understanding for personalized mental wellness support
- Typing indicators and smooth message animations for natural interaction
- Privacy-focused conversations with no judgment

### 📊 **Mental Health Assessment**
- Comprehensive depression and anxiety screening questionnaires
- Science-backed evaluation criteria (PHQ-9, GAD-7 inspired)
- Instant results with severity level classification (Minimal, Mild, Moderate, Severe)
- Personalized recommendations based on assessment scores

### 🧘 **Relaxation Suite**
- **Guided Breathing Exercises**: Visual breathing circle with customizable durations (1, 3, 5 minutes)
- **Healing Audio Library**: Curated soundscapes for meditation and stress relief
- **Progress Tracking**: Monitor relaxation session completion and consistency

### 📚 **Mental Health Education**
- **Depression Resources**: Symptoms, types, causes, and treatment options
- **Anxiety Resources**: Understanding anxiety disorders and management techniques
- **Blog Articles**: Expert-curated content on mental wellness topics
- **Self-Help Strategies**: Practical tips for daily mental health maintenance

### 🔐 **User Authentication**
- Secure sign-in/sign-up with Clerk authentication
- Protected user data and personalized experiences
- Session management for continuous support

### 📱 **Responsive Design**
- Mobile-first approach for accessibility on all devices
- Smooth animations powered by Framer Motion
- Intuitive navigation with modern UI/UX principles
- Accessibility features for inclusive design

---

## 🏗️ Project Structure

```
MindEase/
│
├── frontend/                          # React + TypeScript Frontend
│   ├── src/
│   │   ├── components/               # Reusable UI Components
│   │   │   ├── BackToTop.tsx        # Scroll-to-top button utility
│   │   │   ├── BreathingExercise.tsx # Visual breathing guide component
│   │   │   ├── Footer.tsx           # Footer with links & resources
│   │   │   └── Navbar.tsx           # Navigation bar with auth integration
│   │   │
│   │   ├── pages/                    # Main Application Pages
│   │   │   ├── Home.tsx             # Landing page with hero section
│   │   │   ├── About.tsx            # Mission, vision, team info
│   │   │   ├── Depression.tsx       # Depression awareness & resources
│   │   │   ├── Anxiety.tsx          # Anxiety awareness & resources
│   │   │   ├── QuizPage.tsx         # Mental health assessment quiz
│   │   │   ├── Chat.tsx             # AI chatbot interface (Mistral-7B)
│   │   │   ├── Relaxation.tsx       # Breathing exercises & healing sounds
│   │   │   ├── Blog.tsx             # Mental health articles & resources
│   │   │   ├── Support.tsx          # Crisis resources & help center
│   │   │   └── LoginSignup.tsx      # Authentication page
│   │   │
│   │   ├── App.tsx                   # Main app component with routing
│   │   ├── App.css                   # Global styles
│   │   ├── index.css                 # Base CSS styles
│   │   └── main.tsx                  # Application entry point
│   │
│   ├── public/                       # Static assets & audio files
│   ├── package.json                  # Frontend dependencies
│   ├── vite.config.ts               # Vite configuration
│   ├── tsconfig.json                # TypeScript configuration
│   └── tailwind.config.js           # Tailwind CSS configuration
│
├── backend/                          # Python Backend (API & LLM)
│   ├── app.py                       # Flask/FastAPI server (LLM integration)
│   ├── models/                      # Mistral-7B-v0.1 model files
│   ├── requirements.txt             # Python dependencies
│   └── utils/                       # Helper functions & utilities
│
├── .gitignore
├── LICENSE
└── README.md                         # Project documentation
```

---

## 🛠️ Tech Stack

### **Frontend Technologies**
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI framework for building interactive components |
| **TypeScript** | 5.8.3 | Type-safe development and enhanced code quality |
| **Vite** | 7.1.2 | Fast build tooling and development server |
| **Tailwind CSS** | 4.1.13 | Utility-first CSS framework for responsive design |
| **React Router DOM** | 7.8.2 | Client-side routing and navigation |
| **Framer Motion** | 12.23.12 | Smooth animations and transitions |
| **Clerk** | 5.47.0 | User authentication and session management |
| **Lucide React** | 0.542.0 | Beautiful, consistent icon library |
| **Axios** | 1.11.0 | HTTP client for API requests |

### **Backend Technologies**
| Technology | Purpose |
|------------|---------|
| **Python** | Backend server and API development |
| **Mistral-7B-v0.1** | Large Language Model for AI chatbot responses |
| **Flask/FastAPI** | RESTful API framework |
| **Transformers** | Hugging Face library for LLM integration |
| **PyTorch** | Deep learning framework for model inference |

### **Development Tools**
- **ESLint** - Code quality and consistency enforcement
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Git** - Version control system
- **npm** - Package management
- **Vite Plugin React** - Hot Module Replacement (HMR) for React

---

## 🚀 Getting Started

### **Prerequisites**
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Python** 3.9+ (for backend)
- **Git** for version control
- Modern web browser (Chrome, Firefox, Safari, Edge)

### **Installation & Setup**

#### **1. Clone the Repository**
```bash
git clone https://github.com/harshgajera101/MindEase.git
cd MindEase
```

#### **2. Frontend Setup**
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The frontend will be available at `http://localhost:5173`

#### **3. Backend Setup (AI Chatbot)**
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the backend server
python app.py
```

The backend API will be available at `http://localhost:5000`

#### **4. Environment Variables**
Create a `.env` file in the frontend directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_BASE_URL=http://localhost:5000
```

Create a `.env` file in the backend directory:
```env
MODEL_PATH=./models/mistral-7b-v0.1
HUGGINGFACE_TOKEN=your_hf_token
```

#### **5. Build for Production**
```bash
# Frontend build
cd frontend
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

---

## 🎨 Core Features Deep Dive

### **1. AI Chatbot (Mistral-7B-v0.1)**
The heart of MindEase is its intelligent, empathetic AI companion:

```typescript
// Key Features:
- Context-aware responses based on conversation history
- Emotional intelligence and empathetic language
- Crisis detection and appropriate resource recommendations
- Natural conversation flow with typing indicators
- Secure, private conversations
```

**LLM Model**: Mistral-7B-v0.1
- 7 billion parameters for nuanced understanding
- Fine-tuned for mental health support conversations
- Generates personalized, supportive, context-aware responses
- Trained to recognize crisis situations and provide appropriate resources

### **2. Mental Health Assessment Quiz**
Evidence-based screening tools:

```typescript
// Assessment Categories:
- Depression Screening (PHQ-9 inspired)
- Anxiety Screening (GAD-7 inspired)
- Severity Classification: Minimal | Mild | Moderate | Severe
- Personalized recommendations based on results
- Track progress over multiple assessments
```

### **3. Guided Breathing Exercises**
Visual, interactive breathing guidance:

```typescript
// Breathing Cycle:
- Inhale: 4 seconds (circle expands)
- Hold: 2 seconds (circle stable)
- Exhale: 6 seconds (circle contracts)
- Rest: 1 second (pause)
- Customizable durations: 1, 3, or 5 minutes
- Progress tracking with completion percentage
```

### **4. Healing Audio Library**
Curated soundscapes for relaxation:

```typescript
const soundLibrary = [
  "Ocean Waves - Calming coastal sounds",
  "Forest Rain - Gentle rainfall in nature",
  "432 Hz Healing - Therapeutic frequency music",
  "Tibetan Singing Bowls - Sacred meditation sounds",
  "Night Ambience - Peaceful evening sounds",
  "Morning Birds - Uplifting nature sounds"
];
```

### **5. Educational Resources**
Comprehensive mental health information:

- **Depression Page**: Types, symptoms, causes, treatment options, self-care strategies
- **Anxiety Page**: Anxiety disorders, panic attacks, coping mechanisms, professional help
- **Blog Section**: Expert articles, personal stories, recovery journeys, wellness tips
- **Support Resources**: Crisis hotlines, therapy directories, emergency contacts

---

## 📱 Responsive Design

MindEase is built with a **mobile-first approach**:

### **Breakpoints**
```css
sm: 640px   /* Small devices (phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (laptops) */
xl: 1280px  /* Extra large devices (desktops) */
2xl: 1536px /* Ultra-wide displays */
```

### **Design Principles**
- ✅ Touch-friendly interface with adequate tap targets
- ✅ Optimized images and lazy loading for performance
- ✅ Flexible layouts using CSS Grid and Flexbox
- ✅ Consistent color scheme promoting calmness (emerald, sky blue, warm tones)
- ✅ Accessible design with WCAG 2.1 compliance
- ✅ Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

---

## 🎯 Roadmap & Future Enhancements

### **✅ Current Features**
- AI-Powered Chatbot (Mistral-7B-v0.1) for mental wellness support
- Depression & Anxiety Assessment Quizzes with severity scoring
- Guided Breathing Exercises with visual animations
- Healing Audio Library (Ocean waves, Forest rain, 432 Hz healing, etc.)
- User Authentication with Clerk
- Educational Resources (Depression & Anxiety information)

### **🚀 Phase 1: Coming Soon (Q2-Q3 2026)**
- [ ] **Community Blog Platform** - Share mental health journeys, recovery stories, and wellness tips
- [ ] **Conversation History** - Save and review past chatbot conversations
- [ ] **Enhanced Chatbot** - Improved context retention and personalized responses
- [ ] **Dark Mode** - Eye-friendly interface for evening usage

### **🔮 Phase 2: Future Plans (Q4 2025 & Beyond)**
- [ ] **Multi-Language Support** - Platform available in Spanish, Hindi, French, and more
- [ ] **Therapist Matching** - Connect with licensed mental health professionals
- [ ] **Mobile Apps** - Native iOS and Android applications
- [ ] **Wearable Integration** - Sync with smartwatches for wellness tracking
- [ ] **Offline Mode** - Core features available without internet

---

## 🤝 Contributing

We welcome contributions from developers, mental health professionals, designers, and advocates! Here's how you can help:

### **Ways to Contribute**

1. **🐛 Bug Reports**
   - Found a bug? [Open an issue](https://github.com/harshgajera101/MindEase/issues)
   - Include steps to reproduce, expected vs actual behavior
   - Screenshots or screen recordings are helpful

2. **💡 Feature Requests**
   - Have ideas for new features? We'd love to hear them!
   - Open an issue with the "enhancement" label
   - Describe the feature and its potential impact

3. **🔧 Code Contributions**
   - Fork the repository
   - Create a feature branch: `git checkout -b feature/amazing-feature`
   - Commit your changes: `git commit -m 'Add amazing feature'`
   - Push to the branch: `git push origin feature/amazing-feature`
   - Open a Pull Request

4. **📖 Documentation**
   - Improve README, API docs, or code comments
   - Translate documentation into other languages
   - Create tutorials or video guides

5. **🎨 Design Contributions**
   - UI/UX improvements and mockups
   - Accessibility enhancements
   - Icon design and branding assets

### **Development Guidelines**

```typescript
// Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Write descriptive variable and function names
- Add JSDoc comments for complex functions
- Maintain responsive design principles

// Testing
- Test across different browsers and devices
- Ensure accessibility compliance
- Verify mobile responsiveness

// Commit Messages
- Use conventional commits format
- Examples: "feat:", "fix:", "docs:", "style:", "refactor:"
```

### **Code of Conduct**
- Be respectful and inclusive
- Provide constructive feedback
- Focus on collaboration and learning
- Prioritize user well-being and privacy
- Respect mental health sensitivities

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Harsh Gajera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

✅ Commercial use allowed
✅ Modification allowed
✅ Distribution allowed
✅ Private use allowed
```

---

## ⚠️ Important Medical Disclaimer

**MindEase is a supportive mental wellness tool and educational platform. It is NOT a substitute for professional medical advice, diagnosis, or treatment.**

### **When to Seek Immediate Professional Help:**
- 🚨 Thoughts of suicide or self-harm
- 🚨 Plans or intent to harm yourself or others
- 🚨 Severe panic attacks or anxiety that interferes with daily life
- 🚨 Hallucinations or delusions
- 🚨 Sudden, drastic changes in mood or behavior
- 🚨 Substance abuse or addiction
- 🚨 Inability to care for yourself or perform daily activities

### **Emergency Resources:**

**United States:**
- **988 Suicide & Crisis Lifeline**: Call/Text 988
- **Crisis Text Line**: Text HOME to 741741
- **Emergency**: 911

**International:**
- **International Association for Suicide Prevention**: https://www.iasp.info/resources/Crisis_Centres/

**Mental Health Resources:**
- **NAMI (National Alliance on Mental Illness)**: 1-800-950-NAMI (6264)
- **SAMHSA National Helpline**: 1-800-662-HELP (4357)
- **Psychology Today Therapist Finder**: https://www.psychologytoday.com/

### **Professional Support:**
If you're experiencing persistent mental health symptoms, please consult:
- Licensed therapist or counselor
- Psychiatrist or psychologist
- Primary care physician
- Mental health crisis center
- Hospital emergency department

---

## 👥 Team & Acknowledgments

### **Author**
**Harsh Gajera** - [GitHub](https://github.com/harshgajera101)
- Full-Stack Developer
- AI/ML Enthusiast

### **Special Thanks**
- 🙏 Open-source community for incredible libraries and tools
- 🙏 Beta testers who provided invaluable feedback
- 🙏 Mental health organizations promoting awareness globally
- 🙏 Everyone working to destigmatize mental health conversations

### **Built With**
- ❤️ **Compassion** - Empathy-driven design and development
- 🧠 **Research** - Evidence-based mental health practices
- 🤖 **Innovation** - Cutting-edge AI technology (Mistral-7B-v0.1)
- 🌍 **Community** - Collaboration and shared learning
- 🎯 **Purpose** - Making mental wellness accessible to everyone

---

## 💬 Get in Touch

We'd love to hear from you!

- 🐦 **Twitter**: [@HarshGajera5349](https://www.linkedin.com/in/gajera-harsh/)
- 💼 **LinkedIn**: [Harsh Gajera](https://www.linkedin.com/in/gajera-harsh/)
- 💻 **GitHub**: [@harshgajera91](https://github.com/harshgajera101)

---

## 📊 Project Statistics

![GitHub repo size](https://img.shields.io/github/repo-size/harshgajera101/MindEase)
![GitHub stars](https://img.shields.io/github/stars/harshgajera101/MindEase?style=social)
![GitHub forks](https://img.shields.io/github/forks/harshgajera101/MindEase?style=social)
![GitHub issues](https://img.shields.io/github/issues/harshgajera101/MindEase)
![GitHub pull requests](https://img.shields.io/github/issues-pr/harshgajera101/MindEase)

---

## 🔗 Links & Resources

- **Live Demo**: [https://coruscating-mochi-9eb4d7.netlify.app/](https://coruscating-mochi-9eb4d7.netlify.app/)
- **GitHub Repository**: [https://github.com/harshgajera101/MindEase](https://github.com/harshgajera101/MindEase)
- **Issue Tracker**: [https://github.com/harshgajera101/MindEase/issues](https://github.com/harshgajera101/MindEase/issues)

---


<div align="center">

### **Made with ❤️ for mental wellness**

*"Healing is not linear. It's okay to take your time, seek help, and prioritize your mental health. You are not alone."*

**🌿 MindEase - Because your mental health matters 🌿**

</div>
