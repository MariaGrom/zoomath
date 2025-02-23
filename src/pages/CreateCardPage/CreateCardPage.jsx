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
  const [tags, setTags] = useState([]);
  const [numberOfBlocks, setNumberOfBlocks] = useState([]);

  function handleChangeTags(e) {
    setTags(e.target.value);
  }

  function handleAddBlockClick() {
    setNumberOfBlocks([
      ...numberOfBlocks,
      <CreateBlock key={numberOfBlocks.length} />,
    ]);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      cтраница формы
      <div className="form__fields">
        {numberOfBlocks.map((item) => item)}
        <button onClick={handleAddBlockClick}>Создать блок</button>
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
      </div>
      <PrimaryButton
        onClick={console.log("отправляем собранные данные на сервер")}
      >
        Сохранить
      </PrimaryButton>
    </div>
  );
};
