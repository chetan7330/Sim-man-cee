import { useEffect, useState } from "react";
import "./index.css";

function Home() {
  const [games, setGames] = useState([]);

  // Fetch games from backend
  useEffect(() => {
    fetch("http://127.0.0.1:5500/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => {
        console.log(err);

        // Fallback data
        setGames([
          { id: 1, name: "Game-1", image: "https://via.placeholder.com/300x160?text=Game-1" },
          { id: 2, name: "Game-2", image: "https://via.placeholder.com/300x160?text=Game-2" },
          { id: 3, name: "Game-3", image: "https://via.placeholder.com/300x160?text=Game-3" },
          { id: 4, name: "Game-4", image: "https://via.placeholder.com/300x160?text=Game-4" },
          { id: 5, name: "Game-5", image: "https://via.placeholder.com/300x160?text=Game-5" },
          { id: 6, name: "Game-6", image: "https://via.placeholder.com/300x160?text=Game-6" },
          { id: 7, name: "Game-7", image: "https://via.placeholder.com/300x160?text=Game-7" },
          { id: 8, name: "Game-8", image: "https://via.placeholder.com/300x160?text=Game-8" }
        ]);
      });
  }, []);

  const handlePlay = (name) => {
    alert("Starting " + name);
  };

  // Founders Data
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

  return (
    <div className="container">
      <h1 className="title">MERN Game Hub</h1>

      {/* Games Section */}
      <div className="grid">
        {games.map((game) => (
          <div className="card" key={game.id}>
            <img src={game.image} alt={game.name} />
            <h3>{game.name}</h3>
            <button onClick={() => handlePlay(game.name)}>
              Play
            </button>
          </div>
        ))}
      </div>

      {/* Founding Team Section */}
      <h2 className="team-title">Founding Team</h2>

      <div className="team-container">
        {founders.map((founder) => (
          <div className="team-card" key={founder.id}>
            <div className="team-header"></div>

            <div className="team-photo">
              <img src={founder.image} alt={founder.name} />
            </div>

            <h3 className="team-name">{founder.name}</h3>
            <p className="team-role">{founder.role}</p>

            <ul className="team-details">
              {founder.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;