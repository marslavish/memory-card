import React, { useState } from "react";
import Card, { cardsData } from "./components/Card";
import Scoreboard from "./components/Scoreboard";
import "./styles/main.css";

function App() {
  const [cards, setCards] = useState(cardsData);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const replay = () => {
    setCurrentScore(0);
    setClickedCards([]);
  };

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (id) => {
    setCards(shuffleCards(cards));
    if (!clickedCards.includes(id)) {
      setCurrentScore(currentScore + 1);
      setClickedCards((prevId) => [...prevId, id]);
    } else if (currentScore > bestScore) {
      setBestScore(currentScore);
      replay();
    } else {
      replay();
    }
  };

  return (
    <div className="whole-page">
      <nav className="navbar sticky-top">
        <div className="container-fluid">
          <div className="col-sm-12 col-md-8">
            <p className="navbar-brand mb-0 h1 font-weight-bold">
              One Piece Memory Game
            </p>
            <span className="navbar-text">
              Get points by clicking on an image but don't click on any more
              than once!
            </span>
          </div>
          <div className="col-sm-12 col-md-4">
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
          </div>
        </div>
      </nav>
      <div className="row justify-content-center cards-container">
        {cards.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            img={card.img}
            handleClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
