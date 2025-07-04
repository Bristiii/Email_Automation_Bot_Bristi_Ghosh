from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.chat import chat_router
from routes.login import login_router
from routes.send_email import send_email_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router, prefix="/api")
app.include_router(login_router, prefix="/api")
app.include_router(send_email_router, prefix="/api")