import IGame from "../../Interfaces/IGame";
import { Col } from "react-bootstrap";

const GameItem = ({ title, platform, releaseYear, image }: IGame) => {
  return (
    <Col xs={6}>
      <div className="gameBorder">
        <h3>{title}</h3>
        <h4>{platform}</h4>
        <h4>{releaseYear}</h4>
        <img src={`http://localhost:5126/images/${image}`} alt="bilde" className="test" />
      </div>
    </Col>
  );
};
export default GameItem;
