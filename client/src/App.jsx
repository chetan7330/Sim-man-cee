import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [games, setGames] = useState([]);

  // Fetch games from backend
  useEffect(() => {
    fetch("http://127.0.0.1:5500/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.log(err));
  }, []);

  const handlePlay = (name) => {
    alert("Starting " + name);
  };

  // Founder data (replace images with your own later)
  const founders = [
    {
      id: 1,
      name: "Raviteja",
      role: "Founder",
      image: "/founders/raviteja.jpg", // put in public/founders/
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
      image: "/founders/jose.jpg", // put in public/founders/
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

export default App;