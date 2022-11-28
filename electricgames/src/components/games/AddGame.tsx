import { useState } from "react";
import axios from "axios";
import ImageUpload from "./UploadImage";
const url = "http://localhost:5126/api/game/post";

const AddGame = () => {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [image, setImage] = useState("");

  const handler = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, { title: title, platform: platform, releaseYear: releaseYear, image: image });
      console.log(resp.data);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return (
    <section>
      <form className="form" onSubmit={handler}>
        <div className="mb-3"></div>
        <input type="text" className="form-input " id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
        <input type="text" className="form-input" id="platform" placeholder="Platform" value={platform} onChange={(e) => setPlatform(e.target.value)} />
        <br />
        <input type="releaseYear" className="form-input" id="releaseYear" placeholder="Release year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
        <br />
        <input type="text" className="form-input" id="image" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
        <br />
        <ImageUpload />
        <button type="submit" className="btn btn-primary">
          register
        </button>
      </form>
    </section>
  );
};
export default AddGame;
