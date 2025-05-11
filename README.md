# Loan Manager (Community)

This project is part of the Loan Manager assignment, where the goal is to connect a loan application form to a backend and dynamically update a statistics dashboard. The application is built using **React**, **TypeScript**, **Tailwind CSS**, and integrates with a Node.js backend and MongoDB for data persistence.

---

## 🚀 Live Demo

- 🔗 [Live Project](https://loan-manager-community.vercel.app/)
- 📦 [GitHub Repository](https://github.com/metharishirisha/Assignment-loan-manager-community)
- 📹 [Video Demonstration](https://drive.google.com/file/d/1YXh7sH38PZN3o3ctTqVXORE-Z431HIbH/view?usp=drive_link)

---

## 📦 Tech Stack

**Frontend:**
- React.js (with Vite)
- TypeScript
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- TypeScript
- MongoDB (with Mongoose)

---

## 🧩 Features

- Loan Application Form:
  - Collects data such as name, contact, loan amount, status, etc.
- Dashboard:
  - Displays total applications
  - Calculates average loan amount
  - Shows application success rate
- Real-time data updates after submission
- Responsive design
- Proper API integration

---

## 🗂️ Folder Structure

├── public/ # Static files
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Form and dashboard pages
│ ├── App.tsx # Root component
│ └── main.tsx # App entry point
├── index.html
├── tailwind.config.ts
├── tsconfig.json
└── package.json



## ⚙️ Getting Started

* Install Dependencies
npm install

* Start the Development Server
npm run dev
Visit: http://localhost:8080

🔌 API Integration
Make sure your backend server is up and running. The frontend integrates with these API endpoints:

POST /api/applications — Submit application form

GET /api/statistics — Fetch dashboard statistics

🧪 Testing
Submit a form to see if data is stored correctly

Check if statistics update on the dashboard

Ensure responsive layout on desktop and mobile views

🚀 Deployment
Frontend is deployed on Vercel

Backend should be deployed on platforms like Render, Cyclic, or Railway (if applicable)

📄 License
This project is built for educational purposes as part of a technical assignment.

🙋‍♀️ Author
Methari Shirisha
📧 metharishirisha7@gmail.com

yaml

---

Let me know if you want a separate `README.md` for the **backend** part of your project as well.






