# 🎬 MovieMate

MovieMate is a full-stack MERN application that allows users to discover trending and popular movies, register and log in securely, manage a personalized movie watchlist, and get smart AI-powered movie recommendations.

Built using **MongoDB, Express, React, Node.js**, and styled with **Tailwind CSS**, it leverages the **TMDB API** for real-time movie data. JWT handles secure authentication. The recommendation system is powered by **TF-IDF vectorization + cosine similarity**, trained on over **1.2 million+ movie records** for better relevance.

---

## 📸 Demo

![image](https://github.com/user-attachments/assets/89aad31e-12b2-425b-ad71-ee393c5e7dca)
![image](https://github.com/user-attachments/assets/59f57081-c6f8-4895-9d0d-6a2ec84b5251)
![image](https://github.com/user-attachments/assets/fb5c1bfa-0bd5-4610-8f81-0db411e4df5b)
![image](https://github.com/user-attachments/assets/c68efa5b-8307-405a-a286-827cfefd6bf8)
![image](https://github.com/user-attachments/assets/87e34fe2-49b1-423b-a239-2ed7783b3894)

---

## 🚀 Features

### 🌐 Public

- Browse trending, top-rated, and popular movies via TMDB API
- Search movies by title
- View detailed movie info (poster, overview, rating)
- **NEW:** Get 6 smart, AI-powered similar movie recommendations
- Intelligent fallback poster image with MovieMate branding

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

## 🧠 Recommendation System (NEW!)

- Built with Python + Flask
- Uses **TF-IDF vectorization** and **cosine similarity**
- Trained on a dataset of over **1.2 million+ movies**
- Returns 6 most similar movies based on title & overview
- Integrated with frontend using **HuggingFace Spaces** (CORS enabled)
- Fallback logic: if poster path fails → try TMDB → fallback image

---

## 🧠 Project Architecture

```plaintext
Client (React + Tailwind)
│
├── Pages: Home, Login, Register, Watchlist, Detail
├── Components: Navbar, MovieCard, RecommenderCard, ProtectedRoute, etc.
└── API Calls: Axios for TMDB & backend APIs
        ↓
Backend (Node.js + Express)
│
├── Routes
│   ├── /api/auth        → Login & Register
│   └── /api/watchlist   → CRUD for watchlist (Protected)
│
├── Middleware
│   └── authMiddleware   → JWT token validation
│
└── MongoDB
    ├── Users
    └── Watchlist (linked to user by ID)
```
⚙️ Tech Stack
Frontend
React.js

Tailwind CSS

Axios

React Router

Backend
Node.js

Express.js

MongoDB (Mongoose)

JWT (Authentication)

Bcrypt (Password hashing)

Third-Party
TMDB API (The Movie Database)

HuggingFace Spaces (Flask Recommender API)
🔐 Authentication Flow
Register: User signs up → password is hashed → saved to MongoDB

Login: User enters credentials → server verifies & returns JWT token

Protected Routes: Frontend stores JWT in localStorage → attaches token to API headers

Watchlist Access: Backend verifies token using middleware before giving access

🛠️ Getting Started (Local Setup)
```
# Clone the repository
git clone https://github.com/dhruvin2968/moviemate.git
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
```

💡 Future Improvements
Add genre filtering and sorting

Add movie trailers (YouTube integration)

Pagination for all movie grids

Password reset functionality

🤝 Contributions
Open to suggestions and contributions. Raise an issue or fork and PR if you want to improve something.

📄 License
MIT © Dhruvin Mehta
