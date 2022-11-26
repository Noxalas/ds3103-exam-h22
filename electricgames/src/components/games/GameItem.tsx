import IGame from "../../interfaces/IGame";
import React from "react";

const GameItem = ({ title, platform, releaseYear, image }: IGame) => {
  return (
    <article>
      <h2>{title}</h2>
      <h3>{platform}</h3>
      <h3>{releaseYear}</h3>
      <img src={`http://localhost:5126/images/${image}`} alt="bilde" />
    </article>
  );
};
export default GameItem;
