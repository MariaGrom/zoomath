import styles from "./BlockSolution.module.scss";
import ReactMarkdown from "react-markdown";

export const BlockSolution = (props) => {
  const { task } = props;
  const { solution, tags } = task;
  const algebraTask = task?.collection === "algebra";
  const geomaTask = task?.collection === "geoma";

  return (
    <div className={styles.wrapper_card_solution}>
      <div>
        <div className={styles.sourse}>
          <img
            src={solution?.sourse?.img}
            alt="исходный рисунок"
            style={{ maxWidth: "200px" }}
          />
          <div>
            <p>Дано</p>
            <div>{solution?.sourse?.data}</div>
            <p>Найти</p>
          </div>
        </div>
        <div className={styles.solution}>
          <div>
            <p>Решение</p>
            <img
              src={solution?.img}
              alt="рисунок решения"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div style={{ border: "1px solid blue", maxWidth: "738px" }}>
            {solution?.data.map((item) => {
              return (
                <div>
                  <div>{item?.text}</div>
                  <img src={item?.img} alt="" style={{ width: "200px" }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
