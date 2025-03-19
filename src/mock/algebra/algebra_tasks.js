import condition from "./solutions/task_1/condition.png";
import f_1_1 from "./solutions/task_1/f_1_1.png";
import f_1_2 from "./solutions/task_1/f_1_2.png";
import f_1_3 from "./solutions/task_1/f_1_3.png";
import f_1_4 from "./solutions/task_1/f_1_4.png";
import answer from "./solutions/task_1/answer.png";
import condition_2 from "./solutions/task_2/condition_2.png";

export const ALGEBRA_TASKS = [
  {
    _id: 1,
    collection: "algebra",
    theme: "трапеция",
    blocks: [
      {
        text: "Разложи на множители выражение:",
        image: condition,
      },
    ],
    skill: "easy",
    solution: {
      // sourse: {
      //   data: "sourse_data",
      //   img: condition,
      // },
      data: [
        {
          text: "1) Разложить на множители это выражение достаточно просто, если знать, как работает метод группировки. На самом деле он уже наполовину за нас выполнен. Для начала сгруппируем одночлены 2a и 2c и вынесем общий множитель за скобки:",
          img: f_1_1,
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
  {
    _id: 2,
    collection: "algebra",
    theme: "метод группировки",
    blocks: [
      {
        text: "Найди значение выражения при заданных значениях переменных:",
        image: condition_2,
      },
      {
        text: "при x=11,5 и y=6,5",
        // image:condition_2,
      },
    ],
    skill: "easy",
    solution: {
      // sourse: {
      //   data: "sourse_data",
      //   img: condition,
      // },
      data: [
        {
          text: "1) Разложить на множители это выражение достаточно просто, если знать, как работает метод группировки. На самом деле он уже наполовину за нас выполнен. Для начала сгруппируем одночлены 2a и 2c и вынесем общий множитель за скобки:",
          img: f_1_1,
        },
        {
          text: "и 2c",
          img: f_1_2,
        },
        {
          text: "и вынесем общий множитель за скобки:",
          img: f_1_3,
        },
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
