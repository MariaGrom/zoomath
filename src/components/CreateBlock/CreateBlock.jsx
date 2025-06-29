import { useState } from "react";

export const CreateBlock = ({
  index,
  data,
  onChange,
  onImageChange,
  onTextChange,
}) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleChangeText = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    onImageChange(e.target.files[0]);
  };

  return (
    <form
      style={{ border: "1px solid red" }}
      encType="multipart/form-data"
      method="post"
    >
      <label className="form__field">
        <p className="form__text">текст задачи</p>
        <input
          id="input__text"
          className="form__input"
          type="text"
          required
          value={text}
          onChange={handleChangeText}
        />
      </label>
      <label className="form__field">
        <p className="form__text">
          Загрузите фото формулы или изображение для задачки 99
        </p>
        <input
          id="input__img"
          className="form__input"
          type="file"
          name="image"
          accept={".png, .jpg, .jpeg"}
          onChange={handleFileChange}
        />
      </label>
      {/* <button onClick={sendData}>Save</button> */}
    </form>
  );
};
