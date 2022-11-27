import { Row } from "react-bootstrap";
import DeleteCharacter from "../components/characters/DeleteCharacter";
import DeleteGame from "../components/games/DeleteGame";

const EditPage = () => {
  return (
    <section>
      <h1>Here you can edit our game library</h1>
      <Row>
        <DeleteGame />
        <DeleteCharacter />
      </Row>
    </section>
  );
};

export default EditPage;
