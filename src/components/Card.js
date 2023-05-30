import React from "react";

const Card = ({ name, date, content, videoUrl, whoIsJihadi }) => {
  return (
    <div className="card">
      <div className="name">{name}</div>
      <div className="date">{date}</div>
      <div className="content">
        {content}
        <div className="video">
          <video width="100%" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h3>Who is Jihadi?</h3>
        {whoIsJihadi}
      </div>
    </div>
  );
};

export default Card;
