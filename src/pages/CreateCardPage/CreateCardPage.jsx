import { useState } from "react";
import "./CreateCardPage.scss";
import { DropdownCustom } from "../../components/Dropdown/DropdownCustom";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { CreateBlock } from "../../components/ CreateBlock/CreateBlock";
import {
  SELECTABLE_CLASSES,
  SELECTABLE_DIFFICULTY,
  SELECTABLE_SUBJECTS,
} from "../../vendor/constants";

export const CreateCardPage = (props) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);
  const [numberOfBlocks, setNumberOfBlocks] = useState(0);

  function handleChangeText(e) {
    setText(e.target.value);
  }

  function handleChangeTags(e) {
    setTags(e.target.value);
  }

  function handleAddBlockClick() {
    console.log("добавить блок");
    setNumberOfBlocks(numberOfBlocks + 1);
  }

  return (
    <div className="form">
      cтраница формы
      <fieldset className="form__fields">
        {/* <label className="form__field">
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
            value={password}
            onChange={handleChangePassword}
            required
          /> */}

        <CreateBlock />
        {numberOfBlocks > 0 && <CreateBlock />}
        {/* </label> */}
        {/* {children} */}
        <label className="form__field">
          <p className="form__text">выберите класс</p>
          <DropdownCustom options={SELECTABLE_CLASSES} />
        </label>
        <label className="form__field">
          <p className="form__text">выберите уровень сложности</p>
          <DropdownCustom options={SELECTABLE_DIFFICULTY} />
        </label>
        <label className="form__field">
          <p className="form__text">выберите предмет</p>
          <DropdownCustom options={SELECTABLE_SUBJECTS} />
        </label>

        <label className="form__field">
          <p className="form__text">задайте теги, применимые к задаче</p>
          <input
            id="input__text"
            className="form__input"
            type="text"
            name="text"
            required
            value={tags}
            onChange={handleChangeTags}
          />
          {/* <span className="input__error input__error-email">
                {emailError}
              </span> */}
        </label>
      </fieldset>
      <PrimaryButton
        onClick={console.log("отправляем собранные данные на сервер")}
      >
        Сохранить
      </PrimaryButton>
    </div>
  );
};
