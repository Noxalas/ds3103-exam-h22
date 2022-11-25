const GameItem = ({ title, platform, releaseYear, image }) => {
  return (
    <article>
      <h2>{title}</h2>
      <h3>{platform}</h3>
      <h3>{releaseYear}</h3>
      <img src={image} alt="bilde" />
    </article>
  );
};
export default GameItem;
