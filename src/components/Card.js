import React from "react";

const Card = ({ name, date, content, videoUrl, whoIsJihadi }) => {
  return (
    <div className="card">
      <div className="name">{name}</div>
      <div className="date">{date}</div>
      <div className="content">
        {content}
        <div className="video">
          <iframe frameborder="0" src={videoUrl}></iframe>
        </div>
        <h3>Who is Jihadi?</h3>
        {whoIsJihadi}
      </div>
    </div>
  );
};

export default Card;
