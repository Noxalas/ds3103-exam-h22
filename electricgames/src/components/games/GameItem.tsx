import IGame from "../../Interfaces/IGame";
import { Col } from "react-bootstrap";

const GameItem = ({ title, platform, releaseYear, image }: IGame) => {
  return (
    <Col xs={6}>
      <div className="gameBorder">
        <h3 className="">{title}</h3>
        <p className="card-title">Platform: {platform}</p>
        <p>Year of release: {releaseYear}</p>
        <img src={`http://localhost:5126/images/${image}`} alt="bilde" className="test" />
      </div>
    </Col>
  );
};
export default GameItem;
