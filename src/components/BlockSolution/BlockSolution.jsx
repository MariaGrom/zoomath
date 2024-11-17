import styles from "./BlockSolution.module.scss";

export const BlockSolution = (props) => {
  const { task } = props;
  const { solution, tags } = task;

  console.log(tags);

  return (
    <div className={styles.wrapper_card_solution}>
      <img className={styles.img_solution} src={solution} alt="решение" />

      <div className={styles.theory}>
        <div className={styles.theory_title}>Используемая теория:</div>
        {tags.length &&
          tags.map((item) => {
            return <div className={styles.theory_tag}>{item}</div>;
          })}
      </div>
    </div>
  );
};
