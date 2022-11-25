import axios from "axios";

const GameService = (() => {
  const endpoints = {
    games: "http://localhost:5126/api/game",
  };

  const getAllGames = async () => {
    const response = await axios.get(endpoints.games);
    return response.data;
  };

  return {
    getAllGames,
  };
})();

export default GameService;
