import { Row } from "react-bootstrap";
import AddCharacter from "../components/characters/AddCharacter";
import AddGame from "../components/games/AddGame";

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
};

export default CreateNewPage;
