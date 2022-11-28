import { useState, ChangeEvent } from "react";
import ImageUploadService from "../../services/ImageUploadService";

function ImageUpload({ handleImage }: any) {
  const [image, setImage] = useState<File | null>(null);

  const setImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files != null) {
      const file = files[0];
      handleImage(file);
      setImage(file);
    }
  };

  const uploadImage = () => {
    if (image != null) {
      ImageUploadService.uploadImage(image);
    }
  };
  return (
    <div>
      <main>
        <label>Velg bilde</label>
        <input onChange={setImageHandler} type="file" />
        <button onClick={uploadImage}>Last opp</button>
      </main>
    </div>
  );
}

export default ImageUpload;
