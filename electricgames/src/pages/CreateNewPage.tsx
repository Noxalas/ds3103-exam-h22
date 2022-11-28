import { Row } from "react-bootstrap";
import AddCharacter from "../components/characters/AddCharacter";
import AddGame from "../components/games/AddGame";

<<<<<<< HEAD
const CreateNewPage = () => {
  return (
    <section>
      <h1>Here you can add new games to our game database</h1>
      <Row>
        <AddGame />
      </Row>
    </section>
  );
=======
const CreateNewPage = () =>
{
    return (
        <section>
            <h1>Here you can add new games to our game library</h1>
            <Row>
                <AddGame />
                <AddCharacter />
            </Row>
        </section>
    );
>>>>>>> 27997d5232bfe2f96200329c31c01559bc39123a
};

export default CreateNewPage;
