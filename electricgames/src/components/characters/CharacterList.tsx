import { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import CharacterService from "../../services/CharacterService";
import { Row } from "react-bootstrap";

const CharacterList = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setcharactersFromService();
  }, []);

  const setcharactersFromService = async () => {
    const charactersFromService = await CharacterService.getAllCharacters();
    setCharacters(charactersFromService);
  };

  const filteredCharacters = characters.filter((key: any) => key.name.includes(filter));

  const getCharacterItems = () => {
    return filteredCharacters.map((character, counter) => <CharacterItem key={`character-${counter}`} name={character.name} />);
  };

  return (
    <section>
      <h1 className="display-6">Characters</h1>
      <input type="text" placeholder="Name" onChange={(e) => setFilter(e.target.value)} />
      <Row>{getCharacterItems()}</Row>
    </section>
  );
};
export default CharacterList;
