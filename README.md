# 📱 Week 1: Attendance Kiosk Logic Simulation

> **Part of my "Weekly Tech Solutions" Journey** - *Week 01*

### 🚩 The Problem
Users at the academy need to scan a QR code to log in and log out. However, there is a strict rule: **You cannot log out if you haven't completed the minimum required hours.** I wanted to create a simulation to test this logic visually and ensure the user gets the correct feedback (Success vs. Error messages) based on the time elapsed.

### 💡 The Solution
I built a mobile-responsive web prototype that mimics the real Tuwaiq Academy portal.

**Key Features:**
- **Simulated Scanner:** A button to simulate the physical kiosk scan.
- **Time Logic:** The system tracks the exact timestamp of login.
- **Validation:** - If you try to logout *before* 2 minutes (test duration) → ❌ Error: "لم تكمل حد الساعات المطلوب."
  - If you logout *after* 2 minutes → ✅ Success: "Logout success."

### 🛠️ Technologies Used
- **HTML5:** Semantic structure.
- **CSS3:** Custom styling to match the official academy brand (Tajawal font, colors, responsive mobile frame).
- **JavaScript:** - `Date()` objects for timestamp calculation.
  - `setInterval` for the QR countdown timer.
  - DOM manipulation for modal management.

### 🚀 How to Run
You can view the live simulation here:  
👉 **[Live Demo: Attendance Kiosk Simulation](https://iid7oomii.github.io/weekly-tech-challenge-01/)**

> **Note:** This project is designed for **Mobile View**.
---
*Created by Abdulrahman Alghamdi*
