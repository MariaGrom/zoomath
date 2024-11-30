import React, { useState } from "react";
import "./CardAlgebra.css";
import NewCard from "../NewCard/NewCard";
import { GEOMETRY_TASKS } from "../../mock/geometry/geometry_tasks";
import MathJaxRenderer from "../MathJaxRenderer/MathJaxRenderer";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

function CardAlgebra() {
  // тестовый вариант зареганового пользователя
  const [loggedIn, setLoggedIn] = useState(true);

  // захардкоженные карточки, больше не нужны
  const [tasks, setTasks] = useState(GEOMETRY_TASKS);

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
          {/* <p>
          При \(a \ne 0\) получается два корня уравнения \(ax^2 + bx + c = 0\),
  для нахождения которых используют формулу
  $${x}_{1,2} = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
          </p> */}
          <div>
            {/* <h1>Математические формулы с LaTeX</h1>
            <p>
              Инлайн формула:{" "}
              <MathJaxRenderer formula="a^2 + b^2 = c^2" inline />
              <MathJaxRenderer
                formula={
                  "=\\frac{15^{2}-48\\sqrt[3]{36}}{\\frac{-b\\pm \\sqrt{b^{2}-4ac}}{2a}}"
                }
              />
            </p> */}
            {/* <p>Блочная формула:</p>
            <MathJaxRenderer formula="E = mc^2" />
            <MathJaxRenderer formula={"=\frac{15}{24}"} /> */}

            {/* <MathJaxRenderer formula={"\\text{Привет}\\ x=\\frac{15}{24}"} /> */}
          </div>

          {/* <ReactMarkdown
            children={markdownText[0].solution}
            // remarkPlugins={[remarkMath]}
            // rehypePlugins={[rehypeKatex]}
          /> */}

          {tasks.map((task) => (
            <NewCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardAlgebra;
