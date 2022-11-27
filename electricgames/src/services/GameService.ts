import axios from "axios";

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

  const deleteGameById = async (id: number) => {
    const result = await axios.delete(`${endpoints.games}/${id}`);
    return result;
  };

  return {
    getAllGames,
    deleteGameById,
    getGameByTitle,
  };
})();

export default GameService;
