import { useState } from "react";
import "./CreateCardPage.scss";
import { DropdownCustom } from "../../components/Dropdown/DropdownCustom";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";

const SELECTABLE_CLASSES = [
  "5 класс",
  "6 класс",
  "7 класс",
  "8 класс",
  "9 класс",
  "10 класс",
  "11 класс",
];

const SELECTABLE_DIFFICULTY = ["easy", "middle", "hard", "super-hard"];

const SELECTABLE_SUBJECTS = ["алгерба", "геометрия"];

export const CreateCardPage = (props) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);

  function handleChangeText(e) {
    setText(e.target.value);
  }

  function handleChangeTags(e) {
    setTags(e.target.value);
  }

  return (
    <div className="form">
      cтраница формы
      <fieldset className="form__fields">
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

          <div onClick={console.log("добавить")}>Добавить еще одну секцию</div>
        </label>
        {/* {children} */}
        <label className="form__field">
          <p className="form__text">выберите класс</p>
          <DropdownCustom options={SELECTABLE_CLASSES} />
        </label>
        <label className="form__field">
          <p className="form__text">выберите уровень предмет</p>
          <DropdownCustom options={SELECTABLE_DIFFICULTY} />
        </label>
        <label className="form__field">
          <p className="form__text">выберите уровень сложности</p>
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
