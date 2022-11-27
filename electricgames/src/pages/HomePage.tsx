import GameList from "../components/games/GameList";
import { Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <section>
      <h1>All games stored in our database</h1>
      <Row>
        <GameList />
      </Row>
    </section>
  );
};

export default HomePage;
