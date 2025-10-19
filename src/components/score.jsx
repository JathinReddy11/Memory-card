import "../Styles/score.css";

export default function Score({ currentScore, highScore }) {
  return (
    <>
      <div className="titles">
        <h1>Pokemon Memory Game</h1>
        <h2>
          Get points by clicking on an image but don't click on any more than
          once!
        </h2>
      </div>

      <div className="score">
        <p className="currentScore">Current Score: {currentScore}</p>
        <p className="HighScroe">High Score: {highScore}</p>
      </div>
    </>
  );
}
