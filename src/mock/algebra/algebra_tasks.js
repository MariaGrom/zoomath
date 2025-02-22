import condition from "./solutions/task_1/condition.png";
import f_1_1 from "./solutions/task_1/f_1_1.png";
import f_1_2 from "./solutions/task_1/f_1_2.png";
import f_1_3 from "./solutions/task_1/f_1_3.png";
import f_1_4 from "./solutions/task_1/f_1_4.png";
import answer from "./solutions/task_1/answer.png";

export const ALGEBRA_TASKS = [
  {
    _id: 1,
    collection: "algebra",
    theme: "трапеция",
    title: "Разложи на множители выражение:",
    condition_img: condition,
    skill: "easy",
    solution: {
      // sourse: {
      //   data: "sourse_data",
      //   img: condition,
      // },
      data: [
        {
          text: "1) Разложить на множители это выражение достаточно просто, если знать, как работает метод группировки. На самом деле он уже наполовину за нас выполнен. Для начала сгруппируем одночлены 2a и 2c и вынесем общий множитель за скобки:",
          img: f_1_3,
        },
        // {
        //   text: "и 2c",
        //   img: f_1_2,
        // },
        // {
        //   text: "и вынесем общий множитель за скобки:",
        //   img: f_1_3,
        // },
        {
          text: "2) У нас получились одинаковые многочлены в скобках. Вынесем их за большие общие скобки:",
          img: f_1_4,
        },
      ],
      answer_img: answer,
      // img: condition,
    },
    tags: ["метод группировки"],
  },
];
