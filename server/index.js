const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample game data (can move to Mongo later)
const games = [
  {
    id: 1,
    category: "Strategy",
    name: "Clash of Taxis",
    image: "games/clash-of-taxis.jpg",
    description: "Indian online taxi market — price wars & demand-supply mismatch"
  },
  {
    id: 2,
    category: "Public Policy",
    name: "Network Policy Lab",
    image: "games/network-policy.jpg",
    description: "Structural social networks to implement public policies"
  },
  {
    id: 3,
    category: "OB/HR",
    name: "Influence & Welfare",
    image: "games/influence-welfare.jpg",
    description: "Influential tactics for welfare of low-income employees"
  },
  {
    id: 4,
    category: "Economics",
    name: "Bargaining Arena",
    image: "games/bargaining-arena.jpg",
    description: "Economic theories of bargaining in competitive rivalry"
  },
  {
    id: 5,
    category: "Operations",
    name: "Service Optimizer",
    image: "games/service-optimizer.jpg",
    description: "Balancing service quality and operational optimisation"
  },
  {
    id: 6,
    category: "Finance",
    name: "Financial Literacy",
    image: "games/financial-literacy.jpg",
    description: "Financial literacy training for geriatric citizens"
  },
  {
    id: 7,
    category: "Operations",
    name: "Baker’s Corner",
    image: "games/bakers-corner.jpg",
    description: "Inventory optimization"
  },
  {
    id: 8,
    category: "Finance",
    name: "Fake vs Fact: Buybacks",
    image: "games/buybacks.jpg",
    description: "Reality of buybacks — separating myth from mechanism"
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