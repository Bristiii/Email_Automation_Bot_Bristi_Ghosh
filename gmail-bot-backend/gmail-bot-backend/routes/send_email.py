from fastapi import APIRouter, Request
from services.automation import send_email_gmail

send_email_router = APIRouter()

@send_email_router.post("/send-email")
async def send_email(request: Request):
    body = await request.json()
    recipient = body.get("to")
    subject = body.get("subject")
    body_text = body.get("body")
    result = send_email_gmail(recipient, subject, body_text)
    return {"result": result}
