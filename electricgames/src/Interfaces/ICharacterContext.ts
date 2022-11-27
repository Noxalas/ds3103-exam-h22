import ICharacter from "./ICharacter";

interface ICharacterContext {
  characters: ICharacter[];
  deleteCharacterById: (id: number) => void;
}

export default ICharacterContext;
