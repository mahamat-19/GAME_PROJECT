# 🎮 Game Explorer Full Stack Application

## 📌 Description

Full-stack web application that lets users browse video games and genres using a React frontend and a Node.js/Express proxy server connected to the RAWG API.

## 🛠️ Tech Stack

- Frontend: React + TypeScript + Vite + Chakra UI
- Backend: Node.js + Express + TypeScript
- API Source: RAWG Video Games Database API
- Data Fetching: Fetch API + Axios (server-side)
- Styling/UI: Chakra UI components

## 🚀 Features

- Browse game cards with title, image, rating, and platform icons
- View and select genres from a sidebar list
- Filter displayed games by selected genre
- Loading skeletons and basic error handling for API calls
- Local proxy server endpoints for `/games` and `/genres`

## 📷 Screenshots

(Add images here)

## ⚙️ Installation

```bash
# 1) Clone project
git clone https://github.com/mahamat-19/GAME_PROJECT.git
cd Game_project/GameApp

# 2) Install frontend dependencies
npm install

# 3) Install backend dependencies
cd server
npm install

# 4) Run backend (Terminal 1)
npm run dev

# 5) Run frontend (Terminal 2)
cd ..
npm run dev
```

Frontend runs on the Vite dev URL (usually `http://localhost:5173`) and backend runs on `http://localhost:3000`.

## 📚 What I Learned

- Building a React + TypeScript UI with reusable components
- Creating custom hooks for async data fetching and loading states
- Using Express as a proxy layer for third-party APIs
- Managing frontend/backend development workflow in one project
