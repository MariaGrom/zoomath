import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import styles from "./FilterPage.module.scss";
import { useNavigate } from "react-router-dom";

function FilterPage() {
  // const history = useHistory();
  const navigate = useNavigate();

  const navigateToTest = () => {
    // history.push("/testpage");
    navigate("/testpage");
  };

  return (
    <div>
      <div>Заголовок для фильтров</div>
      <div>Чего ты хочешь?</div>
      <div className={styles.flexbox}>
        <div className={styles.item}>Поступить в лицей</div>
        <div className={styles.item}>Узнать свой уровень</div>
        <div className={styles.item}>Проверить знания по теме</div>
      </div>

      {/* <embed src={test} type="application/pdf" width="100%" height="100%"/> */}
      <PrimaryButton onClick={navigateToTest}>Далее</PrimaryButton>
    </div>
  );
}
export default FilterPage;
