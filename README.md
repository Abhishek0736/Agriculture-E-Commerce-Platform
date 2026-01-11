# 🌾 AgriTrade – Agricultural E-Commerce Platform

A full-stack web platform that enables **farmers, merchants, and administrators** to trade agricultural products in a secure and efficient way.

Built using **Java Spring Boot, React, and MySQL**.

---

## 🚀 Features

- 👨‍🌾 Multi-role system (Farmer, Merchant, Admin)
- 🔐 JWT based secure authentication
- 📦 Product listing & inventory management
- 🛒 Order & transaction management
- ⭐ Product reviews & user profiles
- 📊 Admin dashboard with analytics
- 📱 Fully responsive UI
- ⚡ Fast REST APIs with optimized database queries

---

## 🛠 Tech Stack

| Layer | Technologies |
|------|--------------|
| Frontend | React 19, Bootstrap 5, React Router, Framer Motion, React Icons |
| Backend | Java 21, Spring Boot, Spring Security, REST API |
| Database | MySQL |
| Tools | Git, Postman, VS Code, IntelliJ IDEA |
| Deployment | Vercel / Render (Planned) |

---

## 📂 Project Structure

AgriTrade/
├── backend/
│ ├── controllers
│ ├── services
│ ├── repositories
│ └── models
└── frontend/
├── components
├── pages
├── api
├── helpers
└── assets

yaml
Copy code

---

## ⚙️ Installation

### 1. Clone Repository
```bash
git clone https://github.com/KmSneha9696/AgriTrade.git
cd AgriTrade
2. Backend Setup
bash
Copy code
cd backend
mvn install
mvn spring-boot:run
Configure database in application.properties

ini
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/agritrade
spring.datasource.username=YOUR_DB_USER
spring.datasource.password=YOUR_DB_PASSWORD
3. Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
🔐 Security
JWT Authentication

Role-based access control

Secure environment variable usage

📌 Future Enhancements
AI based crop price prediction

In-app chat between farmers & merchants

Payment gateway integration

Mobile application

🧑‍💻 Author
Sneha Sonkar
GitHub: https://github.com/KmSneha9696

(Project developed for learning & academic purposes)

📜 License
This project is open-source and intended for educational use.