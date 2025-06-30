from fastapi import APIRouter, Request
from services.ai_generator import generate_email_prompt

chat_router = APIRouter()

@chat_router.post("/chat")
async def chat(request: Request):
    body = await request.json()
    message = body.get("message", "")
    reply = generate_email_prompt(message)
    return {"response": reply}
