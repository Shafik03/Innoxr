# InnoXR Device Management Dashboard

A responsive multi-page web application developed as part of the Software Development Intern Assignment.

The application simulates a dashboard for managing and monitoring HoloInteract devices deployed across multiple locations.

---

## Features

### Screen 1 – Login Page
- Admin Login Interface
- Client-side Authentication
- Session Management using Local Storage

**Demo Credentials**

Email: admin@innoxr.com

Password: Admin123

---

### Screen 2 – Device Dashboard

- Device Monitoring Dashboard
- Search Devices
- Filter Devices by Status
- Device Status Tracking
- Device Activity Information

#### Device Information
- Device Name
- Location
- Online / Offline Status
- Last Active Time

---

### Bonus Feature 1 – Remote Content Update

Allows administrators to:

- Upload campaign content
- Simulate remote content deployment
- Manage content without physical access to devices

---

### Bonus Feature 2 – Device Health Monitoring

Tracks:

- CPU Usage
- Storage Usage
- Battery Health
- Network Connectivity

---

### Screen 3 – Analytics Dashboard

Displays:

- Total Devices
- Active Devices
- Total Interactions
- Campaign Performance

Includes:

- Interaction Analytics Chart
- Device Status Pie Chart

---

### Bonus Feature 3 – Real-Time Notifications

Notifications include:

- Device Offline Alerts
- Campaign Updates
- New Device Registration Alerts

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Chart.js

---

## Project Structure

```text
InnoXR-Dashboard/
│
├── index.html
├── dashboard.html
├── analytics.html
├── style.css
├── script.js
└── README.md
```

---

## Setup Instructions

### Method 1 – Run Locally

1. Download or clone the repository

```bash
git clone https://github.com/your-username/InnoXR-Dashboard.git
```

2. Open the project folder

```bash
cd InnoXR-Dashboard
```

3. Open:

```text
index.html
```

in any modern web browser.

---

### Method 2 – VS Code Live Server

1. Install Visual Studio Code

2. Install the Live Server Extension

3. Open project folder

4. Right click:

```text
index.html
```

5. Click:

```text
Open with Live Server
```

---

## Login Credentials

```text
Email: admin@innoxr.com
Password: Admin123
```

---

## Navigation Flow

```text
Login Page
     ↓
Dashboard Page
     ↓
Analytics Page
     ↓
Logout
```

---

## Authentication

The application uses:

```javascript
localStorage
```

to simulate authentication.

Users cannot directly access:

- dashboard.html
- analytics.html

without logging in.

---

## Responsive Design

The application is responsive and supports:

- Desktop
- Tablet
- Mobile Devices

---

## Future Improvements

- Backend Authentication
- Database Integration
- Real-time Device Monitoring API
- User Management
- Device Registration
- Campaign Scheduling
- Dark Mode
- Email Notifications

---

## Author

Mohamed Shafik N

Software Development Internship Assignment

2026
