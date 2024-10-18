import styles from "./FilterPage.module.scss";

function FilterPage() {
  return (
    <div>
      <div>Заголовок для фильтров</div>
      <div>Чего ты хочешь?</div>
      <div className={styles.flexbox}>
        <div className={styles.item}>Поступить в лицей</div>
        <div className={styles.item}>Узнать свой уровень</div>
        <div className={styles.item}>Проверить знания по теме</div>
      </div>
      <div className={styles.flexbox}>
        <div>дропдауны с фильтрами 1 </div>
        <div>дропдауны с фильтрами 2 </div>
        <div>дропдауны с фильтрами 3 </div>
      </div>
    </div>
  );
}
export default FilterPage;
