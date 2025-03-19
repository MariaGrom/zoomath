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

  const sendData = async (e) => {
    // e.prevetDefault();

    const input = document.getElementById("input__img");
    const file = input.files[0];

    if (!file) {
      console.log("Файл изображения не выбран");
      return;
    }

    const formData = new FormData();
    formData.append("title", text);
    formData.append("image", file);
    // formData.append("subject", subject);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch("http://localhost:3003/create/condition", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("server answer", data);
    } catch (error) {
      console.log("error fetching", error);
    }
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
