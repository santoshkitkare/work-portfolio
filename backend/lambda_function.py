# import json, smtplib, os
# from email.message import EmailMessage

# def handler(event, context):
#     data = json.loads(event['body'])
#     name, email, message = data['name'], data['email'], data['message']

#     msg = EmailMessage()
#     msg.set_content(f"Message from {name} ({email}):\n\n{message}")
#     msg['Subject'] = 'New Portfolio Contact'
#     msg['From'] = os.environ['SMTP_USER']
#     msg['To'] = os.environ['TARGET_EMAIL']

#     with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
#         smtp.login(os.environ['SMTP_USER'], os.environ['SMTP_PASS'])
#         smtp.send_message(msg)

#     return {
#         'statusCode': 200,
#         'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
#         'body': json.dumps({'message': 'Email sent successfully'})
#     }


import json, os, smtplib
from email.message import EmailMessage

def lambda_handler(event, context):
    body = json.loads(event.get('body', '{}'))
    name, email, message = body.get('name'), body.get('email'), body.get('message')

    msg = EmailMessage()
    msg['Subject'] = f"Portfolio Contact from {name}"
    msg['From'] = os.environ['SMTP_USER']
    msg['To'] = os.environ['TO_EMAIL']
    msg.set_content(f"From: {name} <{email}>\n\n{message}")

    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.starttls()
        smtp.login(os.environ['SMTP_USER'], os.environ['SMTP_PASS'])
        smtp.send_message(msg)

    return { 'statusCode': 200, 'body': json.dumps({'message': 'Email sent successfully'}) }