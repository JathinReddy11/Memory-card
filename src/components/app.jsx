import { useState, useEffect } from "react";
import ImageGallery from "./images.jsx";
import Score from "./score.jsx";

function App() {
  const [pokemons, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [ids, setids] = useState({});
  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=40"
        );
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            return await res.json();
          })
        );
        setPokemon(pokemonDetails);
      } catch (error) {
        console.error("Failed to fetch pokemon: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemons();
  }, []);

  if (loading) {
    return <h1>Loading Pokemon...</h1>;
  }

  return (
    <>
      <header>
        <Score currentScore={currentScore} highScore={highScore} />
      </header>
      <ImageGallery
        pokemons={pokemons}
        setPokemon={setPokemon}
        currentScore={currentScore}
        highScore={highScore}
        setCurrentScore={setCurrentScore}
        setHighScore={setHighScore}
        ids={ids}
        setids={setids}
      />
    </>
  );
}
export default App;
