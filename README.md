# 🎬 MovieMate

MovieMate is a full-stack MERN application that allows users to discover trending and popular movies, register and log in securely, and manage a personalized movie watchlist.

Built using **MongoDB, Express, React, Node.js**, and styled with **Tailwind CSS**, it leverages the **TMDB API** for real-time movie data. JWT handles secure authentication, and the overall architecture follows clean, scalable practices.

---

## 📸 Demo
![image](https://github.com/user-attachments/assets/89aad31e-12b2-425b-ad71-ee393c5e7dca)
![image](https://github.com/user-attachments/assets/59f57081-c6f8-4895-9d0d-6a2ec84b5251)
![image](https://github.com/user-attachments/assets/fb5c1bfa-0bd5-4610-8f81-0db411e4df5b)
![image](https://github.com/user-attachments/assets/c68efa5b-8307-405a-a286-827cfefd6bf8)


---

## 🚀 Features

### 🌐 Public
- Browse trending and popular movies via TMDB API
- Search movies by title
- View detailed movie info (poster, overview, rating)

### 🔐 Authentication
- Secure user registration with bcrypt password hashing
- JWT-based login authentication
- Protected routes for authenticated users

### 📋 Watchlist
- Add movies to personal watchlist
- View all saved movies
- Remove movies from watchlist
- Persistent data using MongoDB

---

## 🧠 Project Architecture

Client (React + Tailwind)
│
├── Pages: Home, Login, Register, Watchlist
├── Components: Navbar, MovieCard, ProtectedRoute, etc.
└── API Calls: Axios for TMDB & backend APIs
        ↓
Backend (Node.js + Express)
│
├── Routes
│   ├── /api/auth    → Login & Register
│   └── /api/watchlist → CRUD for watchlist (Protected)
│
├── Middleware
│   └── authMiddleware → JWT token validation
│
└── MongoDB
    ├── Users
    └── Watchlist (linked to user by ID)
⚙️ Tech Stack
Frontend:

React.js

Tailwind CSS

Axios

Backend:

Node.js

Express.js

MongoDB (Mongoose)

JWT (Authentication)

Bcrypt (Password hashing)

Third-Party API:

TMDB API (The Movie Database)

📁 Folder Structure (Simplified)
bash
Copy
Edit
/client
  └── src/
      ├── components/
      ├── pages/
      ├── utils/api.js
      └── App.jsx

/server
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  └── server.js
🔐 Authentication Flow
Register: User signs up → password is hashed → saved to MongoDB

Login: User enters credentials → server verifies & returns JWT token

Protected Routes: Frontend stores JWT in localStorage → attaches token to API headers

Watchlist Access: Backend verifies token using middleware before giving access

🛠️ Getting Started (Local Setup)
bash
Copy
Edit
# Clone the repository
git clone https://github.com/yourusername/moviemate.git
cd moviemate

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Set up .env file in /server with:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key

# Start both servers
cd ../server
npm run dev

cd ../client
npm run dev
💡 Future Improvements
Add genres and filter movies

Add movie trailers

Pagination for movie lists

Password reset functionality

Responsive mobile enhancements

🤝 Contributions
Open to suggestions and contributions. Raise an issue or fork and PR if you want to improve something.

📄 License
MIT © Dhruvin Mehta



Let me know if you want me to generate a fancy GitHub markdown version with badges, deploy buttons, 
