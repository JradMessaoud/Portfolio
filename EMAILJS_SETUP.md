# EmailJS Setup Instructions

Your contact form is ready to send emails! Follow these steps to activate it:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a FREE account (200 emails/month free)
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, click "Add New Service"
2. Choose "Gmail" 
3. Click "Connect Account" and log in with jradmassoud@gmail.com
4. Copy your **Service ID** (looks like: service_xxxxxx)

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template:

**Template Name:** portfolio_contact

**Subject:** New Contact from {{from_name}}

**Content:**
```
You have a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

4. Save and copy your **Template ID** (looks like: template_xxxxxx)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (looks like: xxxxxxxxxxxxxx)

## Step 5: Update Contact.jsx
Open `src/components/Contact.jsx` and replace these lines (around line 55):

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Deploy
Run these commands:
```bash
git add .
git commit -m "Configure EmailJS for contact form"
git push
npm run deploy
```

## Test It!
Visit your live site and try sending a test message - you should receive it at jradmassoud@gmail.com!

## Troubleshooting
- Make sure Gmail service is connected in EmailJS
- Check template variable names match exactly: {{from_name}}, {{from_email}}, {{message}}
- Free tier allows 200 emails/month
- Check spam folder if emails don't arrive
