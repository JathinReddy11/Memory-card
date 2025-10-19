import "../Styles/images.css";

export default function ImageGallery({
  pokemons,
  setPokemon,
  currentScore,
  highScore,
  setCurrentScore,
  setHighScore,
  ids,
  setids,
}) {
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function handleClick(id) {
    setids((previds) => {
      if (previds[id]) {
        setCurrentScore(0);
        setHighScore(highScore);
        return {};
      }
      return { ...previds, [id]: true };
    });
    setCurrentScore((prev) => {
      const next = prev + 1;
      setHighScore((h) => Math.max(h, next));
      return next;
    });
    setPokemon(shuffleArray(pokemons));
  }
  return (
    <div className="pokemon-grid">
      {pokemons.map((p) => (
        <div key={p.id} className="pokemon-card">
          <img
            src={p.sprites.other["official-artwork"].front_default}
            alt={p.name}
            onClick={() => handleClick(p.id)}
          />
          <h3>{p.name}</h3>
        </div>
      ))}
    </div>
  );
}
