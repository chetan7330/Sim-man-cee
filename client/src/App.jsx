import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [games, setGames] = useState([]);

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://api.sim-man-cee.com:5500/api/games";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.log("Backend not connected:", err));
  }, []);

  const founders = [
    {
      id: 1,
      name: "Raviteja",
      role: "Founder",
      image: "founders/raviteja.jpg",
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
      image: "founders/jose.jpg",
      details: [
        "Mahindra University",
        "PhD — IIM Bangalore",
        "M.Tech — BITS Pilani",
        "Technology & quantitative modelling"
      ]
    }
  ];

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <img
            src={import.meta.env.BASE_URL + "logo.png"}
            alt="logo"
            className="logo"
          />
          <span className="brand">SimManCee</span>
        </div>

        <div className="nav-links">
          <a href="#games">Simulations</a>
          <a href="#team">Team</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Business Simulation Platform</h1>
        <h2 className="tagline">PLACE TO PLAY MONKEY BUSINESS</h2>
        <p>
          Interactive simulations designed for experiential learning in strategy,
          finance, operations, and public policy.
        </p>
      </section>

      {/* GAMES */}
      {/* GAMES */}
<section className="section" id="games">
  <h2 className="section-title">Simulations</h2>

  <div className="grid">
    {games.map(game => (
      <div className="card" key={game.id}>
        <div className="category-tag">{game.category}</div>

        <img
          src={import.meta.env.BASE_URL + game.image}
          alt={game.name}
        />

        <h3>{game.name}</h3>
        <p className="desc">{game.description}</p>

        <button
          className="play-btn"
          onClick={() => alert(`Launching ${game.name}`)}
        >
          Play
        </button>
      </div>
    ))}
  </div>
</section>

      {/* FOUNDERS */}
      <section className="section" id="team">
        <h2 className="section-title">Founding Team</h2>

        <div className="grid founders-grid">
          {founders.map(f => (
            <div className="card founder-card" key={f.id}>
              <div className="founder-img">
                <img
                  src={import.meta.env.BASE_URL + f.image}
                  alt={f.name}
                />
              </div>

              <h3>{f.name}</h3>
              <p className="founder-role">{f.role}</p>

              <ul className="founder-details">
                {f.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2 className="section-title">About Us</h2>
        <p className="about-text">
          SimManCee develops interactive business simulations 
          that help institutions recruit Agile cheetahs during 
          placement drives. Games that bring competitive spirit, 
          killer instinct and we activate  your beta mind.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} SimManCee
      </footer>
    </div>
  );
}

export default App;