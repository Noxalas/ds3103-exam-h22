import { useState, ChangeEvent } from "react";
import ImageUploadService from "../../services/ImageUploadService";

/*
  Henter inn ImageUploadService i App.tsx i dette kodeeksempelet, men man skal ha denne koden i egen komponent. 
  App skal ideelt sett bare være en hub for andre komponenter.
*/

function ImageUpload() {
  const [image, setImage] = useState<File | null>(null);

  const setImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files != null) {
      const file = files[0];
      setImage(file);
      console.log(file.name);
    }
  };

  const uploadImage = () => {
    if (image != null) {
      ImageUploadService.uploadImage(image);
    }
  };
  return (
    <div>
      <header>
        <h1>Bildeopplast</h1>
      </header>
      <main>
        <label>Velg bilde</label>
        <input onChange={setImageHandler} type="file" />
        <button onClick={uploadImage}>Last opp</button>
      </main>
    </div>
  );
}

export default ImageUpload;
