import { Row } from "react-bootstrap";
import AddGame from "../components/games/AddGame";

const CreateNewPage = () => {
  return (
    <section>
      <h1>Here you can add new games to our game database</h1>
      <Row>
        <AddGame />
      </Row>
    </section>
  );
};

export default CreateNewPage;
