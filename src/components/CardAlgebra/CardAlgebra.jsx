import React, { useEffect, useState } from "react";
import "./CardAlgebra.css";
import { Card } from "../Card/Card";

function CardAlgebra() {
  // тестовый вариант зареганового пользователя

  const [loggedIn, setLoggedIn] = useState(false);

  // захардкоженные карточки, больше не нужны 
  //   const [tasks, setTasks] = useState([
  //     {
  //       id: 1,
  //       title: "easy карточка",
  //       skill: "easy",
  //     },
  //     {
  //       id: 2,
  //       title: "middle карточка",
  //       skill: "middle",
  //     },
  //     {
  //       id: 3,
  //       title: "hard карточка",
  //       skill: "hard",
  //     },
  //     {
  //       id: 4,
  //       title: "super-hard карточка",
  //       skill: "super-hard",
  //     },
  //     {
  //       id: 5,
  //       title: "middle 5 карточка",
  //       skill: "middle",
  //     },
  //     {
  //       id: 6,
  //       title: "middle 5 карточка",
  //       skill: "middle-log",
  //     },
  //   ]);


  const [tasks, setTasks] = useState([]);

  //   пробный запрос данных с локального сервера через fetch
  useEffect(() => {
    fetch("http://localhost:3003/algebra/base/card", {
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
        console.log("data", tasks);
        console.log('data.data', tasks.data)
        const serverTasks = tasks.data
        setTasks(serverTasks);
        setFilteredTasks(serverTasks)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("tasks", tasks);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  console.log("filteredTasks", filteredTasks);

  function taskFilter(skill) {
    if (skill === "all") {
      setFilteredTasks(tasks);
    } else {
      let newTasks = [...tasks].filter((item) => item.skill === skill);
      setFilteredTasks(newTasks);
    }
  }

  return (
    <div className="Card">
      <h3 className="Card-title">
        навигационная строка(если нужно) типа: Алгебра/база
        вопросов/9класс/задания по теме №1
      </h3>
      <div className="Card-content">
        <ul className="Card-selectorList">
          <li>
            <button
              id="all"
              type="button"
              className="Card-skill"
              onClick={() => taskFilter("all")}
            >
              все
            </button>
          </li>
          <li>
            <button
              id="easy"
              type="button"
              className="Card-skill"
              onClick={() => taskFilter("easy")}
            >
              легкий
            </button>
          </li>
          <li>
            <button
              id="middle"
              type="button"
              className="Card-skill"
              onClick={() => taskFilter("middle")}
            >
              средний
            </button>
          </li>
          <li>
            <button
              id="hard"
              type="button"
              className="Card-skill"
              onClick={() => taskFilter("hard")}
            >
              сложный
            </button>
          </li>
          <li>
            <button
              id="super-hard"
              type="button"
              className="Card-skill"
              onClick={() => taskFilter("super-hard")}
            >
              олимпиадный
            </button>
          </li>

          {loggedIn && (
            <li>
              <button
                type="button"
                className="Card-skill"
                onClick={() => taskFilter("middle-log")}
              >
                залоген
              </button>
            </li>
          )}
        </ul>
        <ul>
          {filteredTasks.map((task) => (
            <Card key={task._id} task={task} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardAlgebra;
