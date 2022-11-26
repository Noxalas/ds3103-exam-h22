import axios from "axios";

const GameService = (() => {
  const endpoints = {
    games: "http://localhost:5126/api/game",
  };

  const getAllGames = async () => {
    const response = await axios.get(endpoints.games);
    return response.data;
  };

  const deleteGameById = async (id: number) => {
    const result = await axios.delete(`${endpoints.games}/${id}`);
    console.log(result);
    return result; // TODO: ordne slik at vi returnerer noe fornuftig til GUI, f.eks true/false
  };

  return {
    getAllGames,
    deleteGameById,
  };
})();

export default GameService;
