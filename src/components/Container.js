import React, { useState } from "react";
import Card from "./Card";
import cardData from "../Utils/victims.json";

const Container = () => {
  const [visibleCards, setVisibleCards] = useState(5);

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);
  };

  const showPreviousCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards - 5);
  };

  const isFirstSet = visibleCards <= 5;
  const isLastSet = visibleCards >= cardData.length;

  return (
    <div className="container">
      {!isFirstSet && (
        <button onClick={showPreviousCards}>Load Previous</button>
      )}
      {cardData.slice(visibleCards - 5, visibleCards).map((card, index) => (
        <Card
          key={index}
          name={card.name}
          date={card.date}
          content={card.content}
          videoUrl={card.videoUrl}
          whoIsJihadi={card.whoIsJihadi}
        />
      ))}
      {!isLastSet && <button onClick={loadMoreCards}>Load More</button>}
    </div>
  );
};

export default Container;
