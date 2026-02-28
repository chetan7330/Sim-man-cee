const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample game data (can move to Mongo later)
const games = [
  { id: 1, name: "Game-1", image: "https://via.placeholder.com/300x160?text=Game-1" },
  { id: 2, name: "Game-2", image: "https://via.placeholder.com/300x160?text=Game-2" },
  { id: 3, name: "Game-3", image: "https://via.placeholder.com/300x160?text=Game-3" },
  { id: 4, name: "Game-4", image: "https://via.placeholder.com/300x160?text=Game-4" },
  { id: 5, name: "Game-5", image: "https://via.placeholder.com/300x160?text=Game-5" },
  { id: 6, name: "Game-6", image: "https://via.placeholder.com/300x160?text=Game-6" },
  { id: 7, name: "Game-7", image: "https://via.placeholder.com/300x160?text=Game-7" },
  { id: 8, name: "Game-8", image: "https://via.placeholder.com/300x160?text=Game-8" }
];
// Founders data
const founders = [
  {
    id: 1,
    name: "Raviteja",
    role: "Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    details: [
      "NALSAR University",
      "PhD — IIM Raipur / IIM Bangalore",
      "Simulation design & pedagogy"
    ]
  },
  {
    id: 2,
    name: "Jose Manu",
    role: "Co-Founder",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    details: [
      "Mahindra University",
      "PhD — IIM Bangalore",
      "M.Tech — BITS Pilani",
      "Technology & quantitative modelling"
    ]
  }
];
// GET all games
app.get("/api/games", (req, res) => {
  res.json(games);
});

// Add new game (future use)
app.post("/api/games", (req, res) => {
  const newGame = {
    id: games.length + 1,
    ...req.body
  };
  games.push(newGame);
  res.json(newGame);
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});