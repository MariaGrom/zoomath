import { useState } from "react";

export const CreateBlock = (props) => {
  const [text, setText] = useState("");
  const [numberOfBlocks, setNumberOfBlocks] = useState(0);

  function handleChangeText(e) {
    setText(e.target.value);
  }

  function handleAddBlockClick() {
    console.log("добавить блок");
    setNumberOfBlocks(numberOfBlocks + 1);
  }

  return (
    <div>
      <label className="form__field">
        <p className="form__text">текст задачи</p>
        <input
          id="input__text"
          className="form__input"
          type="text"
          name="text"
          required
          value={text}
          onChange={handleChangeText}
        />
        {/* <span className="input__error input__error-email">
                {emailError}
              </span> */}
      </label>
      <label className="form__field">
        <p className="form__text">
          Загрузите фото формулы или изображение для задачки
        </p>
        <input
          id="input__img"
          className="form__input"
          type="file"
          name="image"
          accept={".png, .jpg, .jpeg"}
          // value={password}
          // onChange={handleChangePassword}
          // required
        />
        {/* <span className="input__error input__error-password">
            {passwordError}
          </span> */}
      </label>
      <button onClick={handleAddBlockClick}>Add New Block</button>
    </div>
  );
};
