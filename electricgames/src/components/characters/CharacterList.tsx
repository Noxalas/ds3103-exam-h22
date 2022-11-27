import { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import CharacterService from "../../services/CharacterService";
import { Row } from "react-bootstrap";

const CharacterList = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    setcharactersFromService();
  }, []);

  const setcharactersFromService = async () => {
    const charactersFromService = await CharacterService.getAllCharacters();
    setCharacters(charactersFromService);
  };

  const getCharacterItems = () => {
    return characters.map((character, counter) => <CharacterItem key={`character-${counter}`} name={character.name} />);
  };

  return (
    <section>
      <h1 className="display-6">Characters</h1>
      <Row>{getCharacterItems()}</Row>
    </section>
  );
};
export default CharacterList;
