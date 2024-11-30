import styles from "./Example.module.scss";
import IconSliderLeft from "../../../img/slider_left.svg";
import IconSliderRight from "../../../img/slider_right.svg";
import IconStat from "../../../img/stat.svg";
import NewCard from "../../NewCard/NewCard";
import { GEOMETRY_TASKS } from "../../../mock/geometry/geometry_tasks";

function Example() {
  return (
    <section className={styles.example}>
      <div className={styles.container}>
        <div className={styles.example__discription}>
          <h2>Практика отдельных тем и контрольные работы</h2>
          <p>
            {" "}
            Тысячи вопросов в стиле отдельных заданий, отфильтрованных по теме,
            подтеме и сложности. Вступительные контрольные работы прошлых лет.
            Практикуйтесь и готовьтесь к поступлению в лучшие лицеи Москвы в
            удобном для вас графике!
          </p>
        </div>

        <div className={styles.example__slider}>
          <button className={styles.example__sliderLeft}>
            <img src={IconSliderLeft} alt="sliderLeft" />
          </button>
          <NewCard key={0} task={GEOMETRY_TASKS[0]} isExampleCard />
          <button className={styles.example__sliderRight}>
            <img src={IconSliderRight} alt="sliderRigth" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Example;
