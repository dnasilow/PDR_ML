from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Email configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "noreply.dent.master@gmail.com"  # This would be your sending email
SENDER_PASSWORD = os.environ.get('EMAIL_PASSWORD', '')  # Set via environment variable
RECIPIENT_EMAIL = "dent.master.aberdeenshire@gmail.com"

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "PDR Email Service API",
        "status": "running",
        "endpoints": ["/send-quote"]
    })

@app.route('/send-quote', methods=['POST'])
def send_quote():
    try:
        # Get form data
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'carDetails', 'damageDescription']
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        # Create email content
        subject = f"New PDR Quote Request from {data['name']}"
        
        email_body = f"""
New PDR Quote Request:

Customer Information:
- Name: {data['name']}
- Email: {data['email']}
- Phone: {data.get('phone', 'Not provided')}
- Location: {data.get('city', 'Not provided')}

Vehicle Details:
- Car Details: {data['carDetails']}

Damage Description:
{data['damageDescription']}

Repair Urgency: {data.get('urgency', 'normal')}
Privacy Consent: {'Yes' if data.get('privacyConsent') else 'No'}

Submitted on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

---
This email was sent from the Dent Master Aberdeenshire website quote form.
        """
        
        # For now, we'll use a simple approach that doesn't require SMTP credentials
        # In production, you would configure proper SMTP settings
        
        # Log the quote request (in production, this would send the actual email)
        print("=" * 50)
        print("NEW QUOTE REQUEST RECEIVED")
        print("=" * 50)
        print(f"To: {RECIPIENT_EMAIL}")
        print(f"Subject: {subject}")
        print(f"Body:\n{email_body}")
        print("=" * 50)
        
        # For demonstration, we'll return success
        # In production, replace this with actual email sending logic
        return jsonify({
            "success": True,
            "message": "Quote request received successfully! We will contact you within 24 hours.",
            "recipient": RECIPIENT_EMAIL
        })
        
    except Exception as e:
        print(f"Error processing quote request: {str(e)}")
        return jsonify({"error": "Failed to process quote request"}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "timestamp": datetime.now().isoformat()})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
