import styles from "./BlockSolution.module.scss";
import ReactMarkdown from "react-markdown";

export const BlockSolution = (props) => {
  const { task } = props;
  const { solution, tags } = task;
  const algebraTask = task?.collection === "algebra";

  return (
    <div className={styles.wrapper_card_solution}>
      {algebraTask ? (
        <div>
          <ReactMarkdown children={solution} />
        </div>
      ) : (
        <img className={styles.img_solution} src={solution} alt="решение" />
      )}

      <div className={styles.theory}>
        <div className={styles.theory_title}>Используемая теория:</div>
        {tags?.length &&
          tags.map((item) => {
            return <div className={styles.theory_tag}>{item}</div>;
          })}
      </div>
    </div>
  );
};
