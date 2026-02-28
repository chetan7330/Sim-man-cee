function GameCard({ game, onPlay }) {
  return (
    <div className="card">
      <img src={game.image} alt={game.name} />
      <h3>{game.name}</h3>
      <button onClick={() => onPlay(game.name)}>
        Play
      </button>
    </div>
  );
}

export default GameCard;