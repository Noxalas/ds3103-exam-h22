import React from "react";
import { useState, useContext, ChangeEvent } from "react";
import IGameContext from "../../Interfaces/IGameContext";
import { GameContext } from "../../contexts/GameContext";

const DeleteGame = () => {
  const [id, setId] = useState<number>(0);
  const { games, deleteGameById } = useContext(GameContext) as IGameContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(e.currentTarget.value));
  };

  const deleteGame = () => {
    deleteGameById(id);
  };

  return (
    <section>
      <p>Number of games in our database: {games.length}</p>
      <div>
        <label>Game id: </label>
        <input onChange={handleChange} type="number" value={id} />
        <button onClick={deleteGame}>Delete game</button>
      </div>
    </section>
  );
};

export default DeleteGame;