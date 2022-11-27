import ICharacter from "../../Interfaces/ICharacter";
import { Col } from "react-bootstrap";

const CharacterItem = ({ name }: ICharacter) => {
  return (
    <Col xs={6}>
      <div className="gameBorder">
        <h3>{name}</h3>
      </div>
    </Col>
  );
};
export default CharacterItem;
