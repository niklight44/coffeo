from fastapi import FastAPI
import random, time, threading
import requests

app = FastAPI()

WEBHOOK_URL = "http://backend:8000/api/payments/webhook/"

@app.post("/create-payment/")
def create_payment(amount: int):
    payment_id = random.randint(10000,99999)
    def send_webhook():
        time.sleep(random.uniform(1,4))
        status = random.choice(["success","fail"])
        try:
            requests.post(WEBHOOK_URL, json={"payment_id": payment_id, "status": status})
        except Exception:
            pass
    threading.Thread(target=send_webhook).start()
    return {"payment_id": payment_id, "status": "pending"}
