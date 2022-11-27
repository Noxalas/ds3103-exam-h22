import axios from "axios";

const CharacterService = (() => {
  const endpoints = {
    characters: "http://localhost:5126/api/character",
  };

  const getAllCharacters = async () => {
    const response = await axios.get(endpoints.characters);
    return response.data;
  };

  const getCharacterByName = async (name: string) => {
    const result = await axios.get(`${endpoints.characters}/${name}`);
    return result;
  };

  const deleteCharacterById = async (id: number) => {
    const result = await axios.delete(`${endpoints.characters}/${id}`);
    return result;
  };

  return {
    getAllCharacters,
    deleteCharacterById,
    getCharacterByName,
  };
})();

export default CharacterService;
