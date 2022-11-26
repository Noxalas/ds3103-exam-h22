import { useState, useEffect } from "react";
import React from "react";
import GameItem from "./GameItem";
import GameService from "../../services/GameService";

const GameList = () => {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    setgamesFromService();
  }, []);

  const setgamesFromService = async () => {
    const gamesFromService = await GameService.getAllGames();
    setGames(gamesFromService);
  };

  const getGameItems = () => {
    return games.map((game, counter) => <GameItem key={`game-${counter}`} title={game.title} platform={game.platform} releaseYear={game.releaseYear} image={game.image} />);
  };

  return (
    <section>
      <h2>Games</h2>
      <section>{getGameItems()}</section>
    </section>
  );
};
export default GameList;
