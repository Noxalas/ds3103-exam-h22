import axios from "axios";
import IGame from "../Interfaces/IGame";

const GameService = (() => {
  const endpoints = {
    games: "http://localhost:5126/api/game",
  };

  const getAllGames = async () => {
    const response = await axios.get(endpoints.games);
    return response.data;
  };

  const getGameByTitle = async (title: string) => {
    const result = await axios.get(`${endpoints.games}/${title}`);
    return result;
  };

  const postGame = async (game: IGame) => {
    const result = await axios.post(endpoints.games, game);
    console.log(result);
    return result.data;
  };

  const deleteGameById = async (id: number) => {
    const result = await axios.delete(`${endpoints.games}/${id}`);
    return result;
  };

  return {
    getAllGames,
    deleteGameById,
    getGameByTitle,
    postGame,
  };
})();

export default GameService;
