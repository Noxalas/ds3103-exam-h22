import { useState } from "react";
import axios from "axios";
const url = "http://localhost:5126/api/game/post";

const AddGame = () => {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [image, setImage] = useState("");

  const handler = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, { title: title, platform: platform, releaseYear: releaseYear, image: image });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section>
      <h2>post request</h2>
      <form className="form" onSubmit={handler}>
        <label htmlFor="title" className="form-label">
          title
        </label>
        <input type="text" className="form-input" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="platform" className="form-label">
          platform
        </label>
        <input type="text" className="form-input" id="platform" value={platform} onChange={(e) => setPlatform(e.target.value)} />

        <input type="releaseYear" className="form-input" id="releaseYear" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />

        <input type="text" className="form-input" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit" className="btn btn-primary">
          register
        </button>
      </form>
    </section>
  );
};
export default AddGame;
