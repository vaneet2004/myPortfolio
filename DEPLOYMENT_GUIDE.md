# Deployment Guide for Vaneet's Portfolio

## Local Development

### Prerequisites
- Node.js v16+ installed
- npm or yarn package manager

### Steps to Run Locally

1. **Extract the project ZIP** to your desired location
2. **Navigate to the project directory**
   \`\`\`bash
   cd PORTFOLIO
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

4. **Set up environment variables** (create a `.env.local` file in the root)
   \`\`\`
   RESEND_API_KEY=your_resend_api_key_here
   RECIPIENT_EMAIL=your-email@example.com
   \`\`\`

5. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open in browser**
   - Navigate to: http://localhost:3000

## Deploy to Vercel (Recommended)

### Option 1: Direct Upload in v0
1. Click the **Publish** button in the top right of v0
2. Connect your GitHub account
3. Follow the prompts to deploy

### Option 2: Manual Deployment
1. Download the ZIP from v0
2. Push to GitHub
3. Go to https://vercel.com/new
4. Import your GitHub repository
5. Add environment variables:
   - `RESEND_API_KEY`
   - `RECIPIENT_EMAIL`
6. Click Deploy

### Option 3: Deploy from v0 with GitHub
1. In v0, click the three dots menu
2. Select "Push to GitHub"
3. Create a new repository or select existing one
4. Once pushed, go to Vercel and import the GitHub repo

## Setting Up Resend Email Service

1. Go to https://resend.com
2. Sign up for a free account
3. Verify your email
4. Get your API key from the dashboard
5. Add to environment variables:
   - `RESEND_API_KEY` = Your Resend API key
   - `RECIPIENT_EMAIL` = Your email address

## Features

- **CV Download**: Users can download your resume as PDF
- **Contact Form**: Sends emails to your inbox via Resend
- **LinkedIn Integration**: Direct link to your LinkedIn profile
- **Hacker Theme**: Cyberpunk aesthetic with neon colors and animations
- **Dark Mode**: Professional dark theme

## Troubleshooting

### Contact form not sending emails?
- Check that `RESEND_API_KEY` is set in environment variables
- Verify your Resend API key is valid at resend.com
- Check the browser console for error messages

### CV not downloading?
- Ensure `resume.pdf` exists in the `/public` folder
- Check browser download settings

### LinkedIn link not working?
- Update the LinkedIn URL in `components/contact.tsx` with your actual profile URL

## Next Steps

- Customize the portfolio with your actual information
- Update LinkedIn, GitHub, and Twitter links
- Add your actual email address for contact form
- Replace placeholder images with your own
- Deploy to Vercel for live website
