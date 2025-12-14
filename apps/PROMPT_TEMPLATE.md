# Optimal Prompt Template for Mobile App Policies

**Copy and paste this prompt when you need privacy policies and terms for a new app.**

---

## 🎯 Quick Start Prompt

```
I need privacy policy and terms & conditions for my new mobile app.

Reference the instructions in:
/apps/MOBILE_APP_POLICY_GENERATOR_INSTRUCTIONS.md

Use the existing design system and templates from:
- /apps/ponle-ivu/ (template structure)
- /css/policy-styles.css (styling)
- /js/policy-scripts.js (functionality)

App Details:
- Name: [APP_NAME]
- Description: [2-3 sentence description of what the app does]
- Platform: [iOS / Android / Both]
- Icon/Emoji: [emoji or icon representation]

Features:
- [Feature 1]
- [Feature 2]
- [Feature 3]

Data Collection:
- [None / Describe what data is collected]
- [Local only / Cloud storage / Both]
- [User accounts: Required / Optional / None]

Monetization:
- [Free with ads / Paid / Freemium / Subscription]
- [In-app purchases: Yes/No - if yes, what type]
- [Ad network: None / Google AdMob / Other]

Permissions Required:
- [Camera / Photos / Location / Contacts / Microphone / None]

Third-Party Services:
- [List any SDKs, APIs, or services like Firebase, analytics, etc.]

Special Requirements:
- [Age restriction / COPPA compliance / Health data / Financial data / None]

Output:
- Create /apps/[app-folder-name]/privacy-policy.html
- Create /apps/[app-folder-name]/terms.html
- Update /apps/index.html with new app card
- Provide full URLs for app store submissions
```

---

## 📋 Minimal Prompt (For Simple Apps)

If you have a simple app like Ponle IVU, use this shorter version:

```
Create privacy policy and terms for: [APP_NAME]

Use /apps/MOBILE_APP_POLICY_GENERATOR_INSTRUCTIONS.md and ponle-ivu template.

Quick details:
- [Brief description]
- [Platform]
- Data: [Local only / None / Describe]
- Monetization: [Free with ads / Paid / IAP]
- Permissions: [List or None]

Make it self-contained (no cross-links) for in-app display.
Include theme URL parameter support (?theme=dark/light).
```

---

## 🎯 Example: Simple Calculator App

```
Create privacy policy and terms for: TipCalc Pro

Use /apps/MOBILE_APP_POLICY_GENERATOR_INSTRUCTIONS.md and ponle-ivu template.

Quick details:
- Simple tip calculator with bill splitting
- iOS and Android
- Data: 100% local, no data collection or transmission
- Monetization: Free with Google AdMob ads, $2.99 IAP to remove ads
- Permissions: None required

Make it self-contained for in-app display.
Include theme URL parameter support.
```

---

## 🎯 Example: Photo Editor App

```
I need privacy policy and terms for my new mobile app.

Reference: /apps/MOBILE_APP_POLICY_GENERATOR_INSTRUCTIONS.md
Template: /apps/ponle-ivu/

App Details:
- Name: PhotoMagic Pro
- Description: Advanced photo editor with AI filters, collage maker, and social sharing
- Platform: iOS and Android
- Icon: 📸

Features:
- AI-powered photo filters
- Collage and layout creation
- Direct social media sharing
- Cloud backup (premium only)
- Photo library organization

Data Collection:
- Photos (processed locally, optionally backed up to cloud)
- Email (optional, for cloud backup account)
- Usage analytics (Firebase Analytics)

Monetization:
- Free version: Basic filters + Google AdMob ads
- Pro subscription: $4.99/month - All filters, no ads, cloud backup

Permissions Required:
- Camera (for taking photos)
- Photo Library (read/write)
- Internet (for cloud backup and ads)

Third-Party Services:
- Google AdMob (ads)
- Firebase Analytics (usage tracking)
- AWS S3 (cloud storage for premium)

Special Requirements:
- Age rating 4+, no special restrictions

Output:
- /apps/photomagic-pro/privacy-policy.html
- /apps/photomagic-pro/terms.html
- Update apps index
- Self-contained for in-app display
- Theme URL parameter support
```

---

## 🎯 Example: Fitness Tracker App

```
Create privacy policy and terms for: FitTrack

Reference: /apps/MOBILE_APP_POLICY_GENERATOR_INSTRUCTIONS.md
Template: /apps/ponle-ivu/

App Details:
- Name: FitTrack
- Description: Workout and nutrition tracker with goal setting and progress analytics
- Platform: iOS and Android
- Icon: 💪

Features:
- Workout logging and tracking
- Nutrition/calorie tracking
- Progress photos
- Goal setting and reminders
- Export data to PDF

Data Collection:
- Workout data (local only)
- Nutrition logs (local only)
- Progress photos (local only, user's photo library)
- Weight/measurements (local only)
- Optional: Email for PDF export

Monetization:
- Completely free (no ads)
- One-time IAP: $9.99 for premium analytics dashboard

Permissions Required:
- Camera (for progress photos)
- Photo Library (for saving progress photos)
- Notifications (for workout reminders)

Third-Party Services:
- None (completely offline except PDF export)

Special Requirements:
- Health data - need HIPAA considerations in disclaimer
- Not for medical advice

Output:
- /apps/fittrack/privacy-policy.html
- /apps/fittrack/terms.html
- Emphasize health data privacy
- Include medical disclaimer
- Self-contained, theme parameter support
```

---

## 📝 Information Checklist

Before creating the prompt, gather:

**Required:**
- [ ] App name
- [ ] Brief description
- [ ] Platform (iOS/Android/Both)
- [ ] Does it collect data? (Yes/No)
- [ ] Monetization model

**Recommended:**
- [ ] List of features
- [ ] Permissions needed
- [ ] Third-party services used
- [ ] Special legal requirements

**Optional:**
- [ ] Target age group
- [ ] Available countries
- [ ] Specific compliance concerns
- [ ] Company information

---

## ⚡ Speed Tip

The more details you provide upfront, the faster and more accurate the result. But even minimal info works - I can ask follow-up questions if needed!

---

## 🎨 Design Note

All apps will automatically use:
- Same beautiful mobile-first design
- Dark mode support
- Theme URL parameters
- Performance optimization
- Accessibility features
- Self-contained pages

No need to specify these - they're built into the system!

---

## 📞 Support

If you need to modify the design system or add new features that affect all apps, let me know and I'll update the shared CSS/JS files.

---

**Save this file for future reference!**
Use it whenever you need policies for a new app - just copy, fill in your details, and paste.
