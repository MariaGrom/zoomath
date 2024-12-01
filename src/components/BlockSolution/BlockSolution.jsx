import styles from "./BlockSolution.module.scss";
import ReactMarkdown from "react-markdown";

export const BlockSolution = (props) => {
  const { task } = props;
  const { solution, tags } = task;
  const algebraTask = task?.collection === "algebra";
  const format_test = task?.collection === "geoma_test";
  const format_test_2 = task?.collection === "geoma_test_2";

  console.log(solution?.solution);

  return (
    <div className={styles.wrapper_card_solution}>
      {algebraTask ? (
        <div>
          <ReactMarkdown children={solution} />
        </div>
      ) : format_test ? (
        <div>
          <div className={styles.sourse}>
            <img
              src={solution?.sourse?.img}
              alt="исходный рисунок"
              style={{ maxWidth: "300px" }}
            />
            <div>
              <p>Дано</p>
              <div>{solution?.sourse?.data}</div>
              <p>Найти</p>
            </div>
          </div>
          <div>
            <p>Решение</p>
            <img
              src={solution?.solution?.img}
              alt="рисунок решения"
              style={{ maxWidth: "300px" }}
            />
            <div style={{ maxWidth: "738px" }}>{solution?.solution?.data}</div>
          </div>
        </div>
      ) : format_test_2 ? (
        <div>
          <div className={styles.sourse}>
            <img
              src={solution?.sourse?.img}
              alt="исходный рисунок"
              style={{ maxWidth: "300px" }}
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
                style={{ maxWidth: "400px" }}
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
