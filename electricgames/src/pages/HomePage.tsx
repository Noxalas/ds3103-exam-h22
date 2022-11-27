import GameList from "../components/games/GameList";
import { Row } from "react-bootstrap";
import CharacterList from "../components/characters/CharacterList";

const HomePage = () => {
  return (
    <section>
      <h1>All stored data in our database</h1>
      <Row>
        <GameList />
        <CharacterList />
      </Row>
    </section>
  );
};

export default HomePage;
