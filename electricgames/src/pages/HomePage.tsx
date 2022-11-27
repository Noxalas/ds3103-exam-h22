import GameList from "../components/games/GameList";
import { Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <section>
      <h1>Welcome to our page</h1>
      <Row>
        <GameList />
      </Row>
    </section>
  );
};

export default HomePage;
