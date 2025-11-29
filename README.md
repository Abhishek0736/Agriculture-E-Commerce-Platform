# 🌾 AgriTrade – Agricultural E-Commerce Platform

A full-stack solution empowering **farmers, merchants, and admins** to trade agricultural products seamlessly.  
Built with **Java Spring Boot + React + MySQL** ensuring secure and scalable operations.

---

## 🚀 Features

- 👨‍🌾 **Role-based System** – Farmer, Merchant & Admin access
- 🔐 Secure Authentication (JWT)
- 📦 Product Listing & Inventory Management
- 💰 Order & Transaction Management
- 📊 Dashboard with Analytics
- 📝 Profile & Product Review System
- 🌍 Fully Responsive & User-friendly UI
- ⚡ Fast API communication with optimized DB queries

---

## 🛠️ Tech Stack

| Layer | Technologies |
|------|--------------|
| **Frontend** | React 19, Bootstrap 5, React Router DOM, Framer Motion, React Icons |
| **Backend** | Java 21, Spring Boot, Spring Security, REST APIs |
| **Database** | MySQL |
| **Tools** | Git, Postman, VS Code, IntelliJ IDEA |
| **Deployment** | Vercel / Render (Coming Soon) |

---

## 📂 Project Structure

AgriTrade/
└── src/
├── main/java/ # Backend - Spring Boot
│ ├── controllers/
│ ├── services/
│ ├── repositories/
│ └── models/
└── frontend/src/ # Frontend - React
├── components/
├── pages/
├── api/
├── helpers/
└── assets/

yaml
Copy code

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Abhishek0736/AgriTrade.git
cd AgriTrade
2️⃣ Setup Backend (Spring Boot)
bash
Copy code
cd backend
mvn install
Configure DB in application.properties before running:

env
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/agritrade
spring.datasource.username=YOUR_DB_USER
spring.datasource.password=YOUR_DB_PASSWORD
Now run the Spring Boot server:

bash
Copy code
mvn spring-boot:run
3️⃣ Setup Frontend (React)
bash
Copy code
cd frontend
npm install
npm start
🔐 Security Notes
JWT-based secure authentication

Environment variables stored safely

No sensitive info committed to repository

📌 Future Enhancements
AI-based Crop Price Forecasting

Chat & Query Support between Farmers & Merchants

Payment Gateway Integration

Mobile App Version

🧑‍💻 Author
Abhishek Kumar
Full-Stack Developer (Java + React)

📌 GitHub: https://github.com/Abhishek0736
🔗 LinkedIn: https://www.linkedin.com/in/abhishek-ku0736

🤝 Contributing
Fork the repository

Create a new feature branch

Commit your changes

Push to branch

Open a Pull Request 🚀

📝 License
This project is created for learning & educational purposes.