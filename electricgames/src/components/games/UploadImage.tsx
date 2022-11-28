import { useState, ChangeEvent } from "react";
import ImageUploadService from "../../services/ImageUploadService";

<<<<<<< HEAD

function ImageUpload({ handleImage }: any)
{
    const [image, setImage] = useState<File | null>(null);

    const setImageHandler = (e: ChangeEvent<HTMLInputElement>) =>
    {
        const { files } = e.target;
        if (files != null) {
            const file = files[0];
            handleImage(file);
            setImage(file);
            console.log(file.name);
        }
    };

    const uploadImage = () =>
    {
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
=======
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
      <main>
        <label>Velg bilde</label>
        <input onChange={setImageHandler} type="file" />
        <button onClick={uploadImage}>Last opp</button>
      </main>
    </div>
  );
>>>>>>> 9f1c75552fb82b11aeff77d24752b403e943d739
}

export default ImageUpload;
