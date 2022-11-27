import { useState, useContext, ChangeEvent } from "react";
import ICharacterContext from "../../Interfaces/ICharacterContext";
import { CharacterContext } from "../../contexts/CharacterContext";

const DeleteCharacter = () => {
  const [id, setId] = useState<number>(0);
  const { characters, deleteCharacterById } = useContext(CharacterContext) as ICharacterContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(e.currentTarget.value));
  };

  const deleteCharacter = () => {
    deleteCharacterById(id);
  };

  return (
    <section className="mt-3">
      <p>Number of characters in our database: {characters.length}</p>
      <div>
        <label>Character id: </label>
        <input onChange={handleChange} type="number" value={id} />
        <button type="button" className="btn btn-danger" onClick={deleteCharacter}>
          Delete character
        </button>
      </div>
    </section>
  );
};

export default DeleteCharacter;
