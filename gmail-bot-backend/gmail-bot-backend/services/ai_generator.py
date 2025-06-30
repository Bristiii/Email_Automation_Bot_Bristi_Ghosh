import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_email_prompt(prompt):
    try:
        response = openai.completions.create(
            model="text-davinci-003",
            prompt=f"Write a professional email based on this: {prompt}",
            max_tokens=100
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return str(e)
