import { Row } from "react-bootstrap";
import DeleteGame from "../components/games/DeleteGame";

const EditPage = () => {
  return (
    <section>
      <h1>Here you can edit our game library</h1>
      <Row>
        <DeleteGame />
      </Row>
    </section>
  );
};

export default EditPage;
