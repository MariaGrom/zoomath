import React, { useState } from "react";
import "./CardAlgebra.css";
import NewCard from "../NewCard/NewCard";
import { GEOMETRY_TASKS } from "../../mock/geometry/tasks";

function CardAlgebra() {
  // тестовый вариант зареганового пользователя

  const [loggedIn, setLoggedIn] = useState(true);

  // захардкоженные карточки, больше не нужны
  const [tasks, setTasks] = useState(
    GEOMETRY_TASKS
    // {
    //   _id: 1,
    //   title: "Ленту длиной в 60 метров разделили в отношении 2:3, а затем от меньшей части отрезали 0,4 её длины. Сколько процентов от всей длины ленты составляет длина меньшей из полученных частей?",
    //   skill: "easy",
    //   solution: `${solution}`,
    // },
    // {
    //   _id: 2,
    //   title: "middle карточка",
    //   skill: "middle",
    // },
    // {
    //   _id: 3,
    //   title: "hard карточка",
    //   skill: "hard",
    // },
    // {
    //   _id: 4,
    //   title: "super-hard карточка",
    //   skill: "super-hard",
    // },
    // {
    //   _id: 5,
    //   title: "middle 5 карточка",
    //   skill: "middle",
    // },
    // {
    //   _id: 6,
    //   title: "middle 5 карточка",
    //   skill: "middle-log",
    // },
  );

  // const [tasks, setTasks] = useState([]);

  // пробный запрос данных с локального сервера через fetch
  // useEffect(() => {
  //   fetch("http://localhost:3003/algebra/base/card", {
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         console.log("err");
  //       }
  //     })
  //     .then((tasks) => {
  //       console.log("data", tasks);
  //       console.log('data.data', tasks.data)
  //       const serverTasks = tasks.data
  //       setTasks(serverTasks);
  //       setFilteredTasks(serverTasks)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // console.log("tasks", tasks);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  // console.log("filteredTasks", filteredTasks);

  function taskFilter(skill) {
    if (skill === "all") {
      setFilteredTasks(tasks);
    } else {
      let newTasks = [...tasks].filter((item) => item.skill === skill);
      setFilteredTasks(newTasks);
    }
  }

  return (
    <div className="MainLayout">
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
        <div className="Card-list">
          {filteredTasks.map((task) => (
            // <Card key={task._id} task={task} />
            <NewCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardAlgebra;
