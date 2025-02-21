import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import styles from "./FilterPage.module.scss";
import { useNavigate } from "react-router-dom";
import { DropdownCustom } from "../../components/Dropdown/DropdownCustom";
import {
  SELECTABLE_CLASSES,
  SELECTABLE_LYCEUMS,
  SELECTABLE_DIFFICULTY,
  SELECTABLE_SUBJECTS,
  SELECTABLE_TOPIC_ALGEBRA,
  SELECTABLE_TOPIC_GEOMA,
} from "../../vendor/constants";

function FilterPage() {
  // const history = useHistory();
  const navigate = useNavigate();

  const navigateToTest = () => {
    // history.push("/testpage");
    navigate("/testpage");
  };

  // console.log("ELECTABLE_SUBJECTS", SELECTABLE_SUBJECTS);

  // TODO : исправить дропдаун выбора темы в зависимости от выбранного предмета - пока не работает

  return (
    <div className={styles.filter}>
      <div>Заголовок для фильтров</div>
      <div>Чего ты хочешь?</div>
      <div className={styles.flexbox}>
        <div>
          <div className={styles.item}>Поступить в лицей</div>
          <label className="form__field">
            <p className="form__text">выбери лицей</p>
            <DropdownCustom options={SELECTABLE_LYCEUMS} />
          </label>
          <label className="form__field">
            <p className="form__text">выбери класс</p>
            <DropdownCustom options={SELECTABLE_CLASSES} />
          </label>
        </div>
        <div>
          <div className={styles.item}>Узнать свой уровень</div>
          <label className="form__field">
            <p className="form__text">выбери класс</p>
            <DropdownCustom options={SELECTABLE_CLASSES} />
          </label>
          <label className="form__field">
            <p className="form__text">выбери уровень сложности</p>
            <DropdownCustom options={SELECTABLE_DIFFICULTY} />
          </label>
        </div>
        <div>
          <div className={styles.item}>Проверить знания по теме</div>
          <label className="form__field">
            <p className="form__text">выбери предмет</p>
            <DropdownCustom options={SELECTABLE_SUBJECTS} />
          </label>
          <label className="form__field">
            <p className="form__text">выбери тему</p>
            <DropdownCustom
              options={
                SELECTABLE_SUBJECTS === "алгерба"
                  ? SELECTABLE_TOPIC_ALGEBRA
                  : SELECTABLE_TOPIC_GEOMA
              }
            />
          </label>
          <label className="form__field">
            <p className="form__text">выбери уровень сложности</p>
            <DropdownCustom options={SELECTABLE_DIFFICULTY} />
          </label>
        </div>
      </div>

      {/* <embed src={test} type="application/pdf" width="100%" height="100%"/> */}
      <PrimaryButton onClick={navigateToTest}>Далее</PrimaryButton>
    </div>
  );
}
export default FilterPage;
