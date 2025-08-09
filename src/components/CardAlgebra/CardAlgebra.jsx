import React, { useState, useEffect } from "react";
import styles from "./CardAlgebra.module.scss";
import NewCard from "../NewCard/NewCard";
import { GEOMETRY_TASKS } from "../../mock/geometry/geometry_tasks";
import { ALGEBRA_TASKS } from "../../mock/algebra/algebra_tasks";

function CardAlgebra() {
  // тестовый вариант зареганового пользователя
  const [loggedIn, setLoggedIn] = useState(true);

  // захардкоженные карточки, больше не нужны
  // const [tasks, setTasks] = useState(ALGEBRA_TASKS);

  const [tasks, setTasks] = useState([]);

  // пробный запрос данных с локального сервера через fetch
  useEffect(() => {
    fetch("https://zoomath-api.onrender.com/algebra/base/card", {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("err");
        }
      })
      .then((tasks) => {
        // console.log("data", tasks);
        // console.log("data.data", tasks.data);
        const serverTasks = tasks.data;
        setTasks(serverTasks);
        setFilteredTasks(serverTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  function taskFilter(skill) {
    if (skill === "all") {
      setFilteredTasks(tasks);
    } else {
      let newTasks = [...tasks].filter((item) => item?.skillInput === skill);
      setFilteredTasks(newTasks);
    }
  }

  return (
    <div className={styles.filter__mainLayout}>
      <h3 className={styles.filter__title}>
        навигационная строка(если нужно) типа: Алгебра/база
        вопросов/9класс/задания по теме №1
      </h3>
      <div className={styles.filter__content}>
        <ul className={styles.filter__selectorList}>
          <li>
            <button
              id="all"
              type="button"
              className={styles.filter__skill}
              onClick={() => taskFilter("all")}
            >
              все
            </button>
          </li>
          <li>
            <button
              id="easy"
              type="button"
              className={styles.filter__skill}
              onClick={() => taskFilter("easy")}
            >
              легкий
            </button>
          </li>
          <li>
            <button
              id="middle"
              type="button"
              className={styles.filter__skill}
              onClick={() => taskFilter("middle")}
            >
              средний
            </button>
          </li>
          <li>
            <button
              id="hard"
              type="button"
              className={styles.filter__skill}
              onClick={() => taskFilter("hard")}
            >
              сложный
            </button>
          </li>
          <li>
            <button
              id="super-hard"
              type="button"
              className={styles.filter__skill}
              onClick={() => taskFilter("super-hard")}
            >
              олимпиадный
            </button>
          </li>

          {loggedIn && (
            <li>
              <button
                type="button"
                className={styles.filter__skill}
                onClick={() => taskFilter("middle-log")}
              >
                залоген
              </button>
            </li>
          )}
        </ul>
        <div className={styles.filter__list}>
          {filteredTasks.map((task) => (
            <NewCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardAlgebra;
