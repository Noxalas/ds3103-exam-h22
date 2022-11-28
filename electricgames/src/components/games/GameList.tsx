import { useState, useEffect } from "react";
import GameItem from "./GameItem";
import GameService from "../../services/GameService";
import { Row } from "react-bootstrap";

const GameList = () => {
  const [games, setGames] = useState<any[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setgamesFromService();
  }, []);

  const setgamesFromService = async () => {
    const gamesFromService = await GameService.getAllGames();
    setGames(gamesFromService);
  };

  const filteredGames = games.filter((key: any) => key.title.includes(filter));

  const getGameItems = () => {
    return filteredGames.map((game, counter) => <GameItem key={`game-${counter}`} title={game.title} platform={game.platform} releaseYear={game.releaseYear} image={game.image} />);
  };

  return (
    <section>
      <h1 className="display-6">Games</h1>
      Search: <input name="search" value={filter} placeholder="Title" onChange={(e) => setFilter(e.target.value)} />
      <Row>{getGameItems()}</Row>
    </section>
  );
};
export default GameList;
