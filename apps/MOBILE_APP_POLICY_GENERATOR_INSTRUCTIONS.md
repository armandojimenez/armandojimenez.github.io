# Mobile App Privacy Policy & Terms Generator
## Agent Instructions for Creating App Store Compliance Documents

**Last Updated:** December 14, 2025  
**Version:** 1.0  
**Purpose:** Complete guide for generating privacy policies and terms & conditions for mobile apps

---

## Table of Contents

1. [Overview](#overview)
2. [App Store Requirements Research](#app-store-requirements-research)
3. [Information Gathering](#information-gathering)
4. [Privacy Policy Structure](#privacy-policy-structure)
5. [Terms & Conditions Structure](#terms-conditions-structure)
6. [Design Guidelines](#design-guidelines)
7. [Technical Implementation](#technical-implementation)
8. [Legal Compliance Checklist](#legal-compliance-checklist)
9. [Testing & Validation](#testing-validation)
10. [Template Variables](#template-variables)

---

## 1. Overview

### Purpose
This document provides step-by-step instructions for creating comprehensive, compliant privacy policies and terms & conditions for mobile applications distributed through Apple App Store and Google Play Store.

### Key Principles
- **Clarity:** Use plain language, avoid legalese when possible
- **Completeness:** Address all required disclosures
- **Honesty:** Accurately describe data practices
- **User-Friendly:** Mobile-first design, easy navigation
- **Compliance:** Meet GDPR, CCPA, COPPA, and app store requirements

### Deliverables for Each App
1. Privacy Policy (HTML page)
2. Terms & Conditions (HTML page)
3. Mobile-responsive CSS styling
4. JavaScript for interactivity
5. File structure: `/apps/{app-name}/privacy-policy.html` and `/apps/{app-name}/terms.html`

---

## 2. App Store Requirements Research

### Apple App Store Requirements

#### Privacy Policy Must Include:
- **Data Collection:** What data is collected (even if none)
- **Data Usage:** How data is used
- **Third-Party Sharing:** Who receives data
- **User Rights:** How users can access, delete, or export data
- **Contact Information:** Developer contact details
- **Updates:** How policy changes are communicated

#### Key Sections Required:
1. Introduction
2. Information Collection
3. Data Use & Sharing
4. Third-Party Services (SDKs, APIs)
5. User Rights (GDPR, CCPA)
6. Children's Privacy (if app < 13 years)
7. Contact Information

#### Apple-Specific Considerations:
- **App Tracking Transparency (ATT):** If using IDFA
- **Privacy Nutrition Labels:** Data must match App Store Connect declarations
- **Sign in with Apple:** If required by app
- **HealthKit/HomeKit:** Special privacy requirements

### Google Play Store Requirements

#### Privacy Policy Must Include:
- **User Access:** How users access the policy
- **Data Types:** Specific data collected
- **Purpose:** Why data is collected
- **Security:** How data is protected
- **Data Retention:** How long data is kept
- **User Choices:** Opt-out options

#### Key Sections Required:
1. Data Collection & Usage
2. Security Measures
3. Third-Party Services
4. Advertising (if applicable)
5. User Rights & Choices
6. Contact Information

#### Google-Specific Considerations:
- **Advertising ID:** GAID usage and opt-out
- **Google Play Services:** Data sharing disclosures
- **Permissions:** Explain dangerous permissions
- **Data Safety Section:** Must match Play Console declarations

### GDPR Compliance (European Union)

#### Required Disclosures:
- **Legal Basis:** Why you can process data
- **Data Controller:** Who is responsible
- **Data Processor:** Third parties processing data
- **Data Transfer:** International data transfers
- **User Rights:** Access, rectification, erasure, portability
- **Consent:** How consent is obtained and withdrawn
- **Data Protection Officer:** Contact (if applicable)

#### User Rights to Address:
1. Right to Access
2. Right to Rectification
3. Right to Erasure ("Right to be Forgotten")
4. Right to Data Portability
5. Right to Object
6. Right to Withdraw Consent

### CCPA Compliance (California)

#### Required Disclosures:
- **Categories of Data:** Personal information collected
- **Sources:** Where data comes from
- **Business Purpose:** Why data is collected
- **Third Parties:** Who receives data
- **Sale of Data:** Whether data is sold (rare for apps)

#### User Rights to Address:
1. Right to Know
2. Right to Delete
3. Right to Opt-Out (of sale)
4. Right to Non-Discrimination

### COPPA Compliance (Children < 13)

#### If App Targets Children:
- **Parental Consent:** How obtained
- **Data Minimization:** Collect only necessary data
- **No Ads:** Or use COPPA-compliant ad networks
- **Verifiable Parental Consent:** Methods used
- **Parent Rights:** How parents can review/delete data

---

## 3. Information Gathering

### Questionnaire for App Developers

Before creating policies, gather the following information:

#### App Basics
- **App Name:**
- **Developer/Company Name:**
- **Contact Email:**
- **Website URL:**
- **Support URL:**
- **App Description:** (Brief, 2-3 sentences)

#### Data Collection
- **Does app collect any user data?** (Yes/No)
- **Personal Information:** Name, email, phone, address?
- **Financial Information:** Credit cards, bank accounts?
- **Location Data:** GPS, approximate location?
- **Device Information:** Device ID, OS version, IP address?
- **Usage Data:** App interactions, crashes, analytics?
- **User-Generated Content:** Photos, videos, text?

#### Data Storage
- **Where is data stored?**
  - Locally on device only
  - Cloud servers (specify provider)
  - Third-party databases
- **Is data encrypted?** (Yes/No/Partially)
- **Data retention period:** How long is data kept?

#### Third-Party Services
- **Analytics:** (e.g., Google Analytics, Firebase)
- **Advertising:** (e.g., Google AdMob, Facebook Ads)
- **Crash Reporting:** (e.g., Crashlytics, Sentry)
- **Authentication:** (e.g., Google Sign-In, Facebook Login)
- **Cloud Services:** (e.g., AWS, Google Cloud, Azure)
- **Payment Processing:** (e.g., Stripe, PayPal)

#### Features
- **User Accounts:** Required, optional, or not supported?
- **Social Sharing:** Can users share to social media?
- **In-App Purchases:** Type (consumable, non-consumable, subscriptions)
- **Push Notifications:** Supported?
- **Camera/Photo Access:** Required or optional?
- **Microphone Access:** Required or optional?
- **Contacts Access:** Required or optional?

#### Monetization
- **Free or Paid:** Initial cost?
- **Ads:** Free version with ads?
- **In-App Purchases:** What's available for purchase?
- **Subscriptions:** Pricing, billing cycle, auto-renewal?
- **Trial Period:** Free trial available?

#### Age Rating
- **Target Audience:** Age range
- **Age Restrictions:** Minimum age requirement
- **Kids Category:** Is this a kids app?

#### Jurisdictions
- **Available Countries:** Where is app distributed?
- **Specific Compliance:** GDPR (EU), CCPA (CA), other laws?

---

## 4. Privacy Policy Structure

### Comprehensive Privacy Policy Outline

Use this structure for every app:

#### 1. Introduction
- App name and developer
- Commitment to privacy
- Scope of policy
- Last updated date

#### 2. Information We Collect

**2.1 Information You Provide**
- Account information (if applicable)
- User-generated content
- Payment information
- Communication data

**2.2 Automatically Collected Information**
- Device information
- Usage data
- Log data
- Location data (if applicable)

**2.3 Information from Third Parties**
- Social media data (if using social login)
- Third-party services data

#### 3. How We Use Your Information
- Core app functionality
- Personalization
- Analytics and improvements
- Marketing and communications
- Legal obligations

#### 4. Data Storage & Security
- Where data is stored
- Security measures
- Data retention periods
- Backups

#### 5. Data Sharing & Disclosure

**5.1 Third-Party Services**
- List each service
- Purpose of sharing
- Link to their privacy policy

**5.2 Legal Requirements**
- Compliance with laws
- Protecting rights
- Business transfers

#### 6. Advertising (if applicable)
- Ad networks used
- Personalized vs. non-personalized ads
- Advertising ID usage
- Opt-out instructions

#### 7. Your Privacy Rights

**7.1 GDPR Rights (EU Users)**
- Access, rectification, erasure
- Data portability
- Object to processing
- Withdraw consent

**7.2 CCPA Rights (California Users)**
- Right to know
- Right to delete
- Right to opt-out

**7.3 How to Exercise Rights**
- Contact methods
- Response timeframes

#### 8. Children's Privacy
- Age requirements
- COPPA compliance (if < 13)
- Parental controls

#### 9. International Users
- Data transfers
- Regional compliance
- EU-US Privacy Shield (if applicable)

#### 10. Cookies & Tracking (if applicable)
- Types of cookies
- Purpose
- Control options

#### 11. Changes to Privacy Policy
- How updates are communicated
- Effective date of changes

#### 12. Contact Us
- Developer name
- Email address
- Mailing address (if applicable)
- Response time commitment

---

## 5. Terms & Conditions Structure

### Comprehensive Terms Outline

Use this structure for every app:

#### 1. Acceptance of Terms
- Agreement to be bound
- Age requirements
- Jurisdiction

#### 2. App Description
- Purpose and features
- Availability
- Platform compatibility

#### 3. License to Use
- Grant of license
- License restrictions
- Ownership

#### 4. User Obligations
- Responsible use
- Account security (if applicable)
- Prohibited conduct

#### 5. In-App Purchases & Subscriptions

**5.1 Purchase Types**
- Consumable, non-consumable, subscriptions
- Pricing and payment

**5.2 Refund Policy**
- Non-refundable policy
- Exceptions
- How to request refunds

**5.3 Subscription Terms (if applicable)**
- Auto-renewal
- Cancellation
- Price changes

#### 6. Content & Intellectual Property
- User-generated content ownership
- App content ownership
- Trademarks and copyrights

#### 7. Disclaimers

**7.1 "As Is" Disclaimer**
- No warranties
- No guarantee of accuracy

**7.2 No Professional Advice**
- Not legal, financial, medical advice
- User responsibility

#### 8. Limitation of Liability
- Cap on liability
- Exclusion of damages
- Jurisdictional exceptions

#### 9. Indemnification
- User indemnifies developer
- Defense of claims

#### 10. Termination
- Termination by user
- Termination by developer
- Effect of termination

#### 11. Governing Law
- Applicable law
- Jurisdiction
- Dispute resolution

#### 12. Miscellaneous
- Entire agreement
- Severability
- Waiver
- Assignment

#### 13. Changes to Terms
- Right to modify
- Notice of changes

#### 14. Contact Information
- Developer contact details

---

## 6. Design Guidelines

### Visual Design Principles

#### Color Scheme
- **Light Mode:**
  - Background: Warm off-white (#f8f7f4)
  - Text: Dark brown/black (#1a1613)
  - Accent: Vibrant orange (#d97706)
  - Secondary: Sky blue (#0ea5e9)

- **Dark Mode:**
  - Background: Deep charcoal (#0f0e0d)
  - Text: Warm white (#f8f7f4)
  - Accent: Bright orange (#fb923c)
  - Secondary: Light blue (#38bdf8)

#### Typography
- **Primary Font:** Space Grotesk (modern, friendly sans-serif)
- **Monospace Font:** JetBrains Mono (for technical details)
- **Hierarchy:**
  - H1: 2-3.5rem (page title)
  - H2: 1.5-2rem (major sections)
  - H3: 1.15-1.4rem (subsections)
  - Body: 1rem (16px base)

#### Layout
- **Mobile-First:** Design for smallest screens first
- **Container:** Max-width 1400px
- **Sidebar:** Sticky table of contents (desktop only)
- **Content:** Max-width 800px for readability
- **Spacing:** Generous whitespace, 1.5-2rem between sections

#### Components

**App Badge:**
- Icon + App Name + Tagline
- Rounded corners, subtle shadow
- Positioned at top of page

**Table of Contents:**
- Sticky sidebar (desktop)
- Collapsible on mobile
- Active section highlighted
- Smooth scroll to sections

**Highlight Boxes:**
- Important information
- Warning notices
- Quick summaries
- Color-coded by importance

**Contact Card:**
- Prominent placement
- Easy-to-read formatting
- Clickable email/links

**Theme Toggle:**
- Fixed position (top-right)
- Sun/moon icon
- Smooth transition
- Persists user preference

### Mobile Optimization

#### Performance
- **Critical CSS:** Inline above-the-fold styles
- **Font Loading:** Use font-display: swap
- **Images:** Lazy load, optimize sizes
- **JavaScript:** Defer non-critical scripts

#### Touch Targets
- Minimum 44x44px
- Adequate spacing between links
- Large, easy-to-tap buttons

#### Scrolling
- Smooth scroll behavior
- Back-to-top button appears after scrolling
- Sections scroll into view with offset for fixed headers

#### Readability
- Font size: Minimum 16px for body text
- Line height: 1.6-1.8 for paragraphs
- Line length: 60-80 characters max
- Contrast: WCAG AA compliant (4.5:1 minimum)

---

## 7. Technical Implementation

### File Structure

```
/apps/
  /{app-name}/
    privacy-policy.html
    terms.html
/css/
  policy-styles.css
/js/
  policy-scripts.js
```

### HTML Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{POLICY_TYPE} - {APP_NAME}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../css/policy-styles.css">
</head>
<body>
    <div class="theme-toggle" id="themeToggle">
        <!-- SVG icons -->
    </div>
    
    <div class="container">
        <header class="policy-header">
            <div class="app-badge">
                <!-- App icon and name -->
            </div>
            <h1 class="policy-title">{POLICY_TYPE}</h1>
            <div class="policy-meta">
                <!-- Last updated date -->
            </div>
            <nav class="policy-nav">
                <!-- Navigation links -->
            </nav>
        </header>
        
        <div class="content-wrapper">
            <aside class="table-of-contents">
                <!-- TOC links -->
            </aside>
            
            <main class="policy-content">
                <!-- Policy sections -->
            </main>
        </div>
    </div>
    
    <footer class="policy-footer">
        <!-- Footer links and copyright -->
    </footer>
    
    <script src="../../js/policy-scripts.js"></script>
</body>
</html>
```

### CSS Organization

```css
/* Variables & Theme System */
:root { /* Light theme vars */ }
[data-theme="dark"] { /* Dark theme vars */ }

/* Global Reset & Base */
/* Theme Toggle */
/* Container & Layout */
/* Policy Header */
/* Content Wrapper */
/* Table of Contents */
/* Main Content */
/* Highlight Boxes */
/* Contact Card */
/* Footer */
/* Animations */
/* Print Styles */
/* Accessibility */
/* Mobile Optimizations */
```

### JavaScript Features

```javascript
// Theme Management
- Detect system preference
- Save user preference to localStorage
- Toggle between light/dark mode

// Smooth Scrolling
- TOC links scroll to sections
- Offset for fixed headers

// Active Section Highlighting
- Intersection Observer
- Update TOC link styles

// Back to Top Button
- Show/hide based on scroll
- Smooth scroll to top

// External Links
- Add rel="noopener noreferrer"

// Keyboard Navigation
- Escape key functionality
```

### SEO Optimization

```html
<!-- Meta Tags -->
<meta name="description" content="Privacy Policy for {APP_NAME}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://armandojimenez.dev/apps/{app-name}/privacy-policy.html">

<!-- Open Graph -->
<meta property="og:title" content="{POLICY_TYPE} - {APP_NAME}">
<meta property="og:description" content="Read our privacy policy">
<meta property="og:url" content="https://armandojimenez.dev/apps/{app-name}/privacy-policy.html">
```

---

## 8. Legal Compliance Checklist

### Pre-Submission Checklist

#### Apple App Store
- [ ] Privacy policy URL provided in App Store Connect
- [ ] Privacy Nutrition Labels completed accurately
- [ ] All data collection disclosed
- [ ] Third-party SDKs listed
- [ ] User rights explained (GDPR/CCPA)
- [ ] Children's privacy addressed (if < 13)
- [ ] Contact information provided
- [ ] Policy accessible within app (link or embedded)

#### Google Play Store
- [ ] Privacy policy URL provided in Play Console
- [ ] Data Safety section completed accurately
- [ ] Dangerous permissions explained
- [ ] Advertising ID usage disclosed
- [ ] User data deletion explained
- [ ] Third-party data sharing disclosed
- [ ] Contact information provided

#### GDPR (EU)
- [ ] Legal basis for processing disclosed
- [ ] Data controller identified
- [ ] User rights explained
- [ ] Consent mechanism implemented
- [ ] Data transfer safeguards explained
- [ ] DPO contact provided (if required)
- [ ] Withdrawal of consent explained

#### CCPA (California)
- [ ] Categories of personal info listed
- [ ] Business purpose disclosed
- [ ] Third-party sharing disclosed
- [ ] Sale of data disclosed (or confirmed none)
- [ ] User rights explained
- [ ] "Do Not Sell" mechanism (if applicable)

#### COPPA (Children)
- [ ] Parental consent mechanism
- [ ] Data minimization practiced
- [ ] No behavioral advertising to children
- [ ] Parental review/deletion rights
- [ ] COPPA-compliant ad networks (if ads)

---

## 9. Testing & Validation

### Functionality Testing

#### Desktop
- [ ] Theme toggle works
- [ ] Smooth scrolling functions
- [ ] TOC links navigate correctly
- [ ] Active section highlighting works
- [ ] Back to top button appears
- [ ] External links open in new tab
- [ ] Print styles display correctly

#### Mobile
- [ ] Responsive layout adapts
- [ ] Touch targets are adequate size
- [ ] Text is readable (no pinch-zoom needed)
- [ ] TOC is accessible
- [ ] Theme toggle is reachable
- [ ] No horizontal scrolling

#### Browsers
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader compatible (test with NVDA/JAWS)
- [ ] Sufficient color contrast (WCAG AA)
- [ ] Heading hierarchy logical
- [ ] Alt text for images (if any)
- [ ] ARIA labels where needed

### Performance Testing

- [ ] PageSpeed Insights score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Total page size < 500KB
- [ ] Font loading optimized

### Legal Review

- [ ] All app features disclosed
- [ ] Accurate data collection description
- [ ] Third-party services listed
- [ ] Jurisdiction-specific requirements met
- [ ] Contact information correct
- [ ] Dates accurate
- [ ] No contradictions between privacy & terms

---

## 10. Template Variables

### Required Variables for Each App

Replace these placeholders when creating new policies:

```javascript
{APP_NAME} // "Ponle IVU"
{APP_TAGLINE} // "Tax Calculator"
{APP_ICON} // Emoji or path to icon
{APP_DESCRIPTION} // 2-3 sentence description

{DEVELOPER_NAME} // "Armando Jimenez"
{COMPANY_NAME} // "Believe PR"
{CONTACT_EMAIL} // "armando.jimenez.dev@gmail.com"
{WEBSITE_URL} // "https://armandojimenez.dev"

{LAST_UPDATED_DATE} // "December 14, 2025"
{EFFECTIVE_DATE} // "December 14, 2025"
{VERSION} // "1.0"

{DATA_COLLECTION} // True/False + specifics
{LOCAL_STORAGE_ONLY} // True/False
{THIRD_PARTY_SERVICES} // List of services
{AD_NETWORK} // Name of ad provider (if any)
{ANALYTICS_SERVICE} // Name of analytics (if any)

{HAS_ADS} // True/False
{HAS_SUBSCRIPTIONS} // True/False
{HAS_IAP} // True/False
{HAS_USER_ACCOUNTS} // True/False

{MIN_AGE} // Minimum age requirement
{TARGET_AGE_RANGE} // Age range
{KIDS_CATEGORY} // True/False

{PLATFORMS} // iOS, Android, both
{AVAILABLE_COUNTRIES} // List of countries
```

### Conditional Sections

Include/exclude based on app features:

```
IF {HAS_ADS}:
  - Include Advertising section
  - Describe ad network
  - Explain opt-out

IF {HAS_SUBSCRIPTIONS}:
  - Include Subscription Terms
  - Describe auto-renewal
  - Explain cancellation

IF {HAS_USER_ACCOUNTS}:
  - Include Account Creation section
  - Describe authentication
  - Explain account deletion

IF {LOCAL_STORAGE_ONLY}:
  - Emphasize no data transmission
  - Highlight offline functionality

IF {KIDS_CATEGORY}:
  - Add COPPA section
  - Remove ad personalization
  - Add parental consent

IF {INTERNATIONAL_USERS}:
  - Add GDPR section
  - Add data transfer disclosures
```

---

## Process Workflow

### Step-by-Step Process for New App

1. **Gather Information**
   - Complete questionnaire
   - Identify all third-party services
   - Determine monetization model

2. **Research Specific Requirements**
   - Check for industry-specific laws (health, finance, kids)
   - Verify regional compliance needs
   - Review app store guidelines changes

3. **Draft Privacy Policy**
   - Use template structure
   - Replace all variables
   - Include/exclude conditional sections
   - Ensure all data practices disclosed

4. **Draft Terms & Conditions**
   - Use template structure
   - Replace all variables
   - Match monetization model
   - Include appropriate disclaimers

5. **Design & Build Pages**
   - Create HTML files
   - Apply mobile-first CSS
   - Implement JavaScript interactivity
   - Test theme toggle

6. **Review & Validate**
   - Legal accuracy check
   - Completeness verification
   - Cross-reference with app features
   - Run through compliance checklist

7. **Test Thoroughly**
   - Functionality testing (all devices)
   - Accessibility testing
   - Performance testing
   - Link verification

8. **Deploy**
   - Upload to production
   - Verify live URLs
   - Update app store listings
   - Link from app (if applicable)

9. **Maintain**
   - Review annually
   - Update when app changes
   - Monitor legal requirement changes
   - Version control documents

---

## Tips & Best Practices

### Writing Tips
- **Use Plain Language:** Avoid legal jargon
- **Be Specific:** Don't use vague terms like "we may collect"
- **Be Honest:** Disclose everything, even if uncomfortable
- **Use Examples:** Help users understand abstract concepts
- **Format Well:** Use headings, bullets, and white space

### Legal Tips
- **Consult a Lawyer:** For complex apps or regulated industries
- **Be Conservative:** Disclose more rather than less
- **Match Reality:** Ensure policy reflects actual practices
- **Update Promptly:** When app changes, update policies
- **Keep Records:** Save old versions for reference

### Design Tips
- **Mobile-First:** Design for smallest screens
- **Accessibility:** Follow WCAG guidelines
- **Performance:** Optimize for fast loading
- **Dark Mode:** Provide comfortable reading in all conditions
- **Navigation:** Make it easy to find specific info

### Common Mistakes to Avoid
- ❌ Copying another app's policy without customization
- ❌ Not updating policy when adding features
- ❌ Omitting third-party services
- ❌ Using inconsistent terminology
- ❌ Not providing contact information
- ❌ Forgetting to date the policy
- ❌ Not making policy easily accessible
- ❌ Contradicting app store declarations

---

## Resources

### Official Guidelines
- **Apple:** https://developer.apple.com/app-store/review/guidelines/
- **Google:** https://play.google.com/about/developer-content-policy/
- **GDPR:** https://gdpr.eu/
- **CCPA:** https://oag.ca.gov/privacy/ccpa
- **COPPA:** https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule

### Tools
- **Privacy Policy Generators:** (Verify accuracy after generation)
- **WCAG Checker:** https://wave.webaim.org/
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Color Contrast Checker:** https://webaim.org/resources/contrastchecker/

### Fonts Used
- **Space Grotesk:** https://fonts.google.com/specimen/Space+Grotesk
- **JetBrains Mono:** https://fonts.google.com/specimen/JetBrains+Mono

---

## Version History

- **v1.0** (Dec 14, 2025): Initial document created for Ponle IVU app

---

## Contact for Questions

For questions about these instructions or assistance with app policies:

**Email:** armando.jimenez.dev@gmail.com  
**Website:** https://armandojimenez.dev

---

*This document should be updated as laws, app store requirements, and best practices evolve.*
