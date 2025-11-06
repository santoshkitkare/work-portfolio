import json
import os
import smtplib
from email.message import EmailMessage


def _cors_headers():
    return {
        'Access-Control-Allow-Origin': os.environ.get('CORS_ALLOW_ORIGIN', '*'),
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    }


def lambda_handler(event, context):
    # Handle OPTIONS preflight (API Gateway may handle this, but keep here to be safe)
    if event.get('httpMethod', '').upper() == 'OPTIONS':
        return {'statusCode': 204, 'headers': _cors_headers(), 'body': ''}

    try:
        body = json.loads(event.get('body', '{}'))
        name, email, message = body.get('name'), body.get('email'), body.get('message')

        msg = EmailMessage()
        msg['Subject'] = f"Portfolio Contact from {name}"
        msg['From'] = os.environ['SMTP_USER']
        msg['To'] = os.environ['TO_EMAIL']
        msg['Cc'] = email
        msg.set_content(f"From: {name} <{email}>\n\n{message}")

        with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
            smtp.starttls()
            smtp.login(os.environ['SMTP_USER'], os.environ['SMTP_PASS'])
            smtp.send_message(msg)

        return {
            'statusCode': 200,
            'headers': _cors_headers(),
            'body': json.dumps({'message': 'Email sent successfully'})
        }
    except Exception as e:
        # Log the exception in CloudWatch (print goes to logs)
        print('Error in lambda_handler:', str(e))
        return {
            'statusCode': 500,
            'headers': _cors_headers(),
            'body': json.dumps({'message': 'Internal server error', 'error': str(e)})
        }
        
        
# import json, os, smtplib
# from email.message import EmailMessage

# def lambda_handler(event, context):
#     body = json.loads(event.get('body', '{}'))
#     name, email, message = body.get('name'), body.get('email'), body.get('message')
#     # print(event)

#     # print(f"name: {name} email: {email} message: {message}")
#     msg = EmailMessage()
#     msg['Subject'] = f"Portfolio Contact from {name}"
#     msg['From'] = os.environ['SMTP_USER']
#     msg['To'] = os.environ['TO_EMAIL']
#     msg['Cc'] = email
#     msg.set_content(f"From: {name} <{email}>\n\n{message}")

#     # print(f"name: {name} email: {email} message: {message}")

#     with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
#         smtp.starttls()
#         smtp.login(os.environ['SMTP_USER'], os.environ['SMTP_PASS'])
#         smtp.send_message(msg)

#     print("Email Send successfully")
#     return { 'statusCode': 200, 'body': json.dumps({'message': 'Email sent successfully'}) }