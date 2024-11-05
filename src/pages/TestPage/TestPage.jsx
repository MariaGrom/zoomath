import styles from "./TestPage.module.scss";

const TestPage = () => {
  return (
    <di className={styles.mainLayout}>
      <div>Заголовок для тестов</div>
      <div className={styles.infoblock}>
        <div className={styles.grid}>
          <div className={styles.subtitle}>
            Тестирование на знания программы:{" "}
          </div>
          <div className={styles.label}>8 класс</div>
        </div>
        <div className={styles.grid}>
          <div className={styles.subtitle}>Уровень сложности: </div>
          <div className={styles.label}>easy</div>
        </div>
      </div>
      <div className={styles.text}>
        Цель данного теста: проверить уровень знаний по математике (алгебра и
        геометрия) за школьный курс 8 класса. Предназначен: для учеников
        непрофильных школ, нацеленных на базовое знание математики.
        Приблизительная оценка: 3.
      </div>
      <div className={styles.timer}>
        <span>Оставшееся время : </span>
        <div className={styles.timer__block}>
          <div className={styles.timer__icon}></div>
          <span>15 : 45</span>
        </div>
      </div>
    </di>
  );
};
export default TestPage;
