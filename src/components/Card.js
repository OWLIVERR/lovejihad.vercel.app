import React from "react";

const Card = ({ name, date, content, videoUrl, whoIsJihadi }) => {
  return (
    <div className="card">
      <div className="name">{name}</div>
      <div className="date">{date}</div>
      <div className="content">
        {content}
        <div className="video">
        <iframe width="640" height="360" frameborder="0" src={videoUrl} allowfullscreen ></iframe>
        </div>
        <h3>Who is Jihadi?</h3>
        {whoIsJihadi}
      </div>
    </div>
  );
};

export default Card;
