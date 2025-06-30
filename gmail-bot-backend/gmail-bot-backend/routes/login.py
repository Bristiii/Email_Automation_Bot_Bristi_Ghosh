from fastapi import APIRouter, Request
from services.automation import login_gmail

login_router = APIRouter()

@login_router.post("/login")
async def login(request: Request):
    body = await request.json()
    email = body.get("email")
    password = body.get("password")
    result = login_gmail(email, password)
    return {"result": result}
