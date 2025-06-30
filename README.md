# Bristi Ghosh – Gmail Automation Agent for Insurebuzz AI

This is my submission for the AI Internship assignment at Insurebuzz AI. It demonstrates a complete chat-based Gmail automation agent with AI-powered email generation, browser automation logic, and step-by-step visual feedback.

---

##  Project Overview

This project is an intelligent assistant that accepts a user’s natural language command (e.g., “Send an internship email to Insurebuzz”) and:

- Interprets the command using AI
- Interactively collects required information (like Gmail credentials and email content)
- Automates the Gmail login and email sending process via simulated browser steps
- Shows real-time visual feedback (screenshots) to the user

---

##  Technologies Used

| Layer       | Tech Stack                  |
|-------------|-----------------------------|
| Frontend    | React, Vite, TypeScript, Tailwind CSS, Lucide Icons |
| Backend     | Python, FastAPI, OpenAI API (simulated), Uvicorn |
| Automation  | Simulated (Selenium-ready) |
| Design/UX   | Chat UI, Status Screenshots |

---

##  Architecture & Flow
User Prompt → ChatBot (Frontend) → Backend API
↳ AI interprets intent
↳ Prompts for Email, Password, Content
↳ Triggers automation steps:
- Login to Gmail (simulated)
- Compose + Send Email
- Capture Screenshots
↳ Screenshots shown live on UI


---

##  Key Features

- ✅ Natural language interface
- ✅ Dynamic chat with AI-generated responses
- ✅ Secure (mock) Gmail login
- ✅ Automatic subject & body generation (via AI logic)
- ✅ Visual feedback using mock screenshots
- ✅ Real-time status updates of automation

---

##  Gmail Authentication Handling

- Login flow is simulated using API placeholders.
- You may create a dummy Gmail account for testing (recommended).
- CAPTCHA and 2FA are documented as limitations due to Google automation restrictions.
- In real deployment, `selenium-wire` + Puppeteer/Playwright can be used with proxy settings.

---

##  How to Run the Project Locally

###  Prerequisites

- Node.js & npm
- Python 3.9+
- OpenAI API key (optional for full AI integration)

---

###  Install Frontend

```bash
cd frontend
npm install
npm run dev
```


Frontend runs at: http://localhost:5173


## Install Backend
bash
Copy code
cd gmail-bot-backend
pip install -r requirements.txt
uvicorn main:app --reload

Backend runs at: http://localhost:8000

Docs: http://localhost:8000/docs




## About Me
Name: Bristi Ghosh
Email: gbristi95@gmail.com
GitHub Repo: 
Submission Date: 01-07-2025




