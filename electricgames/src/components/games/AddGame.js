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
      <form className="form" onSubmit={handler}>
        <div className="form-row mb-2">
          <input type="text" className="form-input" id="title" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-row mb-2">
          <input type="text" className="form-input" id="platform" placeholder="platform" value={platform} onChange={(e) => setPlatform(e.target.value)} />
        </div>
        <div className="form-row mb-2">
          <input type="releaseYear" className="form-input" id="releaseYear" placeholder="Release year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
        </div>
        <div className="form-row mb-2">
          <input type="text" className="form-input" id="image" value={image} placeholder="Image" onChange={(e) => setImage(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">
          register
        </button>
      </form>
    </section>
  );
};
export default AddGame;
