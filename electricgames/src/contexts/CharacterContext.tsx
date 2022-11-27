import { useEffect, useState, createContext, ReactNode } from "react";
import ICharacterContext from "../Interfaces/ICharacterContext";
import ICharacter from "../Interfaces/ICharacter";
import CharacterService from "../services/CharacterService";

export const CharacterContext = createContext<ICharacterContext | null>(null);

type Props = {
  children: ReactNode;
};

export const CharacterProvider = ({ children }: Props) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    getCharactersFromService();
  }, []);

  const getCharactersFromService = async () => {
    const charactersFromService = await CharacterService.getAllCharacters();
    setCharacters(charactersFromService);
  };

  const deleteCharacterById = async (id: number) => {
    await CharacterService.deleteCharacterById(id);
    const newArray = characters.filter((Character) => Character.id !== id);
    setCharacters(newArray);
  };

  return <CharacterContext.Provider value={{ characters, deleteCharacterById }}>{children}</CharacterContext.Provider>;
};
export default CharacterProvider;
