import React from "react";
import Card from "./Card";
import cardData from "../Utils/victims.json";
const Container = () => {
  return (
    <div className="container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          date={card.date}
          content={card.content}
          videoUrl={card.videoUrl}
          whoIsJihadi={card.whoIsJihadi}
        />
      ))}
    </div>
  );
};

export default Container;
