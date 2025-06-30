from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# This is a simplified implementation using a global driver.
# It is not suitable for concurrent users. A more robust solution
# would involve session management to handle multiple driver instances.
driver = None

def login_gmail(email, password):
    global driver
    try:
        if driver is None:
            options = Options()
            # For debugging, you might want to see the browser
            options.headless = False
            # The following option is needed to keep the browser open after the script finishes
            options.add_experimental_option("detach", True)
            driver = webdriver.Chrome(options=options)
        
        driver.get("https://mail.google.com/")
        
        # Wait for email field and enter email
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "identifierId"))
        ).send_keys(email)
        
        # Click "Next"
        driver.find_element(By.ID, "identifierNext").click()
        
        # Wait for password field and enter password
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "Passwd"))
        ).send_keys(password)
        
        # Click "Next"
        driver.find_element(By.ID, "passwordNext").click()
        
        # Wait for login to complete by checking for the compose button
        WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.XPATH, "//div[text()='Compose']"))
        )
        
        return "Login successful"
    except Exception as e:
        # Clean up driver if login fails
        if driver:
            driver.quit()
            driver = None
        return f"Login failed: {str(e)}"

def send_email_gmail(to, subject, body):
    global driver
    if driver is None:
        return "Not logged in. Please login first."
        
    try:
        # Click compose button
        compose_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//div[text()='Compose']"))
        )
        compose_button.click()
        
        # Fill out the email fields
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "to"))
        ).send_keys(to)
        
        driver.find_element(By.NAME, "subjectbox").send_keys(subject)
        
        driver.find_element(By.XPATH, "//div[@aria-label='Message Body']").send_keys(body)
        
        # Click send
        driver.find_element(By.XPATH, "//div[text()='Send']").click()
        
        # Give it a moment to send
        time.sleep(2)
        
        return f"Email sent to {to} with subject '{subject}'."
    except Exception as e:
        return f"Failed to send email: {str(e)}"

# Optional: Add a function to close the driver
def close_browser():
    global driver
    if driver:
        driver.quit()
        driver = None
    return "Browser closed."
