import class_8_G2_1 from "./solutions/8-G2_1.jpg";
import sourse_img from "./solutions/task_1/sourse_img.png";
import solution_img from "./solutions/task_1/solution_image.png";
// import f_1 from "./solutions/task_1/f_1.svg";
import f_1 from "./solutions/task_1/f_1.png";
import f_2 from "./solutions/task_1/f_2.png";
import f_3 from "./solutions/task_1/f_3.png";
import f_4 from "./solutions/task_1/f_4.png";
import f_5 from "./solutions/task_1/f_5.png";
import f_6 from "./solutions/task_1/f_6.png";
import f_1_1 from "./solutions/task_2/f_1_1.png";
import f_2_1 from "./solutions/task_2/f_2_1.png";
import f_3_1 from "./solutions/task_2/f_3_1.png";
import f_4_1 from "./solutions/task_2/f_4_1.png";

export const GEOMETRY_TASKS = [
  {
    _id: 1,
    collection: "geometry",
    theme: "трапеция",
    title:
      "Наибольший угол прямоугольной трапеции равен 120 градусов, большая сторона равна 10. Найдите разность оснований.",
    skill: "easy",
    solution: `${class_8_G2_1}`,
    tags: [
      "параллелограмм",
      "трапеция",
      "прямоугольный треугольник",
      "параллельные прямые",
      "перпендикулярные прямые",
    ],
  },
  {
    _id: 2,
    collection: "algebra",
    theme: "квадратные уравнения",
    title:
      "Подставим все известные значения в формулу:$$f=f_0\\cdot \\frac{c+u}{c-v}\\\\ 180=170\\cdot \\frac{c+12}{c-6}\\\\ c=312$$",
    skill: "super-hard",
    solution:
      "Дано квадратное уравнение: $$ax^2 + bx + c = 0$$ Для решения уравнения используется дискриминант:$$D = b^2 - 4ac$$ Подставим значения коэффициентов $a = 1$, $b = -3$, $c = 2$:$$D = (-3)^2 - 4 \\cdot 1 \\cdot 2 = 1$$ Так как $D > 0$, уравнение имеет два корня, которые находятся по формуле: $$x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$$ Найдём корни уравнения: $$x_1 = \\frac{-(-3) + \\sqrt{1}}{2 \\cdot 1} = 2$$ $$x_2 = \\frac{-(-3) - \\sqrt{1}}{2 \\cdot 1} = 1$$ **Ответ**: $x_1 = 2$, $x_2 = 1$.",
    tags: ["квадратные уравнения"],
  },
  {
    _id: 3,
    collection: "geoma_test",
    theme: "трапеция",
    title:
      "Наибольший угол прямоугольной трапеции равен 120 градусов, большая сторона равна 10. Найдите разность оснований.",
    skill: "super-hard",
    solution: {
      sourse: {
        data: "ABCD – прямоугольная трапеция. ∠BCD = 120 градусов. CD = 10",
        img: sourse_img,
      },
      solution: {
        data: [
          "Для начала найдём",
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mi mathcolor="#000000">∠ADC=</mi>
            <msup>
              <mrow>
                <mn mathcolor="#000000">180</mn>
              </mrow>
              <mrow>
                <mn mathcolor="#000000">0</mn>
              </mrow>
            </msup>
            <mo mathcolor="#000000">-∠BCD=</mo>
            <msup>
              <mrow>
                <mn mathcolor="#000000">180</mn>
              </mrow>
              <mrow>
                <mn mathcolor="#000000">0</mn>
              </mrow>
            </msup>
            {/* <mo mathcolor="#000000">-</mo> */}
            <msup>
              <mrow>
                <mn mathcolor="#000000">-120</mn>
              </mrow>
              <mrow>
                <mn mathcolor="#000000">0</mn>
              </mrow>
            </msup>
            <mo mathcolor="#000000">=</mo>
            <msup>
              <mrow>
                <mn mathcolor="#000000">60</mn>
              </mrow>
              <mrow>
                <mn mathcolor="#000000">0</mn>
              </mrow>
            </msup>
          </math>,
          "(как односторонние углы при BC||AD и секущей CD),",
          // f_2,
          "(Примечание - это один и тот же угол, просто обозначения разные); 1)Далее проведём высоту CH и рассмотрим прямоугольный ∆CHD. В нем",
          // f_3,
          "(по свойству суммы острых углов прямоугольного ∆); 2) Далее найдём катет",
          // f_4,
          "(по свойству прямоугольного ∆ с острым углом в300); 3)Дальше докажем, что ||",
          // f_5,
          "(по определению трапеции - основания параллельны) и AB||CH (так как две прямые, перпендикулярные к третьей, между собой параллельны):AB⊥AD (ABCD – прямоугольная трапеция) и CH⊥AD(по построению)) ⇒ ABCH - параллелограмм (по признаку параллелограмма) ⇒ BC = AH (по свойству параллелограмма); Тогда:",
          // f_6,
        ],
        img: solution_img,
        // formulas: f_1,
        // f_2,
        // f_3,
        // f_4,
        // f_5,
        // f_6,
      },
    },
    tags: [
      "параллелограмм",
      "трапеция",
      "прямоугольный треугольник",
      "параллельные прямые",
      "перпендикулярные прямые",
    ],
  },
  {
    _id: 3,
    collection: "geoma_test_2",
    theme: "трапеция",
    title:
      "Наибольший угол прямоугольной трапеции равен 120 градусов, большая сторона равна 10. Найдите разность оснований.",
    skill: "super-hard",
    solution: {
      sourse: {
        data: "ABCD – прямоугольная трапеция. ∠BCD = 120 градусов. CD = 10",
        img: sourse_img,
      },
      data: [
        {
          text: "Для начала найдём",
          img: f_1,
        },
        {
          text: "(как односторонние углы при BC||AD и секущей CD),",
          img: f_2,
        },
        {
          text: "(Примечание - это один и тот же угол, просто обозначения разные); 1)Далее проведём высоту CH и рассмотрим прямоугольный ∆CHD. В нем",
          img: f_3,
        },
        {
          text: "(по свойству суммы острых углов прямоугольного ∆); 2) Далее найдём катет",
          img: f_4,
        },
        {
          text: "(по свойству прямоугольного ∆ с острым углом в300); 3)Дальше докажем, что ||",
          img: f_5,
        },
        {
          text: "(по определению трапеции - основания параллельны) и AB||CH (так как две прямые, перпендикулярные к третьей, между собой параллельны):AB⊥AD (ABCD – прямоугольная трапеция) и CH⊥AD(по построению)) ⇒ ABCH - параллелограмм (по признаку параллелограмма) ⇒ BC = AH (по свойству параллелограмма); Тогда:",
          img: f_6,
        },
      ],
      img: solution_img,
    },
    tags: [
      "параллелограмм",
      "трапеция",
      "прямоугольный треугольник",
      "параллельные прямые",
      "перпендикулярные прямые",
    ],
  },
  {
    _id: 4,
    collection: "geoma_test_2",
    theme: "уравнение",
    title: "Найти значение выражения:",
    skill: "super-hard",
    solution: {
      sourse: {
        data: "Найти значение выражения:",
        img: f_1_1,
      },
      data: [
        {
          text: "Для того, чтобы найти значение данного выражения, необходимо для начала преобразовать подкоренное выражение в знаменателе дроби по формуле разности квадратов (формулы сокращенного умножения - смотри в теории):",
          img: f_2_1,
        },
        {
          text: "Далее считаем значение каждой скобки в знаменателе:",
          img: f_3_1,
        },
        {
          text: "Теперь, пользуясь свойствами корня (квадратный корень - смотри в теории), объединяем два корня под один, вычисляем значение подкоренного выражения путём сокращения дроби и вычисляем значение полученного корня:",
          img: f_4_1,
        },
      ],
      img: f_1_1,
    },
    tags: [
      "параллелограмм",
      "трапеция",
      "прямоугольный треугольник",
      "параллельные прямые",
      "перпендикулярные прямые",
    ],
  },
  // {
  //   _id: 4,
  //   title: (
  //     <math xmlns="http://www.w3.org/1998/Math/MathML">
  //       <mi mathcolor="#000000">Д</mi>
  //       <mi mathcolor="#000000">л</mi>
  //       <mi mathcolor="#000000">я</mi>
  //       <mi mathcolor="#000000"> </mi>
  //       <mi mathcolor="#000000">н</mi>
  //       <mi mathcolor="#000000">а</mi>
  //       <mi mathcolor="#000000">ч</mi>
  //       <mi mathcolor="#000000">а</mi>
  //       <mi mathcolor="#000000">л</mi>
  //       <mi mathcolor="#000000">а</mi>
  //       <mi mathcolor="#000000"> </mi>
  //       <mi mathcolor="#000000">н</mi>
  //       <mi mathcolor="#000000">а</mi>
  //       <mi mathcolor="#000000">й</mi>
  //       <mi mathcolor="#000000">д</mi>
  //       <mi mathcolor="#000000">е</mi>
  //       <mi mathcolor="#000000">м</mi>
  //       <mi mathcolor="#000000"> </mi>
  //       <mi mathcolor="#000000">∠</mi>
  //       <mi mathcolor="#000000">A</mi>
  //       <mi mathcolor="#000000">D</mi>
  //       <mi mathcolor="#000000">C</mi>
  //       <mo mathcolor="#000000">=</mo>
  //       <msup>
  //         <mrow>
  //           <mn mathcolor="#000000">180</mn>
  //         </mrow>
  //         <mrow>
  //           <mn mathcolor="#000000">0</mn>
  //         </mrow>
  //       </msup>
  //       <mo mathcolor="#000000">-</mo>
  //       <mi mathcolor="#000000">∠</mi>
  //       <mi mathcolor="#000000">B</mi>
  //       <mi mathcolor="#000000">C</mi>
  //       <mi mathcolor="#000000">D</mi>
  //       <mo mathcolor="#000000">=</mo>
  //       <msup>
  //         <mrow>
  //           <mn mathcolor="#000000">180</mn>
  //         </mrow>
  //         <mrow>
  //           <mn mathcolor="#000000">0</mn>
  //         </mrow>
  //       </msup>
  //       <mo mathcolor="#000000">-</mo>
  //       <msup>
  //         <mrow>
  //           <mn mathcolor="#000000">120</mn>
  //         </mrow>
  //         <mrow>
  //           <mn mathcolor="#000000">0</mn>
  //         </mrow>
  //       </msup>
  //       <mo mathcolor="#000000">=</mo>
  //       <msup>
  //         <mrow>
  //           <mn mathcolor="#000000">60</mn>
  //         </mrow>
  //         <mrow>
  //           <mn mathcolor="#000000">0</mn>
  //         </mrow>
  //       </msup>
  //       <mi mathcolor="#000000"> </mi>
  //       <mfenced mathcolor="#000000" separators="|">
  //         <mrow>
  //           <mi mathcolor="#000000">к</mi>
  //           <mi mathcolor="#000000">а</mi>
  //           <mi mathcolor="#000000">к</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000">д</mi>
  //           <mi mathcolor="#000000">н</mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000">с</mi>
  //           <mi mathcolor="#000000">т</mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000">р</mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000">н</mi>
  //           <mi mathcolor="#000000">н</mi>
  //           <mi mathcolor="#000000">и</mi>
  //           <mi mathcolor="#000000">е</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">у</mi>
  //           <mi mathcolor="#000000">г</mi>
  //           <mi mathcolor="#000000">л</mi>
  //           <mi mathcolor="#000000">ы</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">п</mi>
  //           <mi mathcolor="#000000">р</mi>
  //           <mi mathcolor="#000000">и</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">B</mi>
  //           <msub>
  //             <mrow>
  //               <mi mathcolor="#000000">C</mi>
  //             </mrow>
  //             <mrow>
  //               <mo mathcolor="#000000">∥</mo>
  //             </mrow>
  //           </msub>
  //           <mi mathcolor="#000000">A</mi>
  //           <mi mathcolor="#000000">D</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">и</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">с</mi>
  //           <mi mathcolor="#000000">е</mi>
  //           <mi mathcolor="#000000">к</mi>
  //           <mi mathcolor="#000000">у</mi>
  //           <mi mathcolor="#000000">щ</mi>
  //           <mi mathcolor="#000000">е</mi>
  //           <mi mathcolor="#000000">й</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">C</mi>
  //           <mi mathcolor="#000000">D</mi>
  //         </mrow>
  //       </mfenced>
  //       <mo mathcolor="#000000">,</mo>
  //       <mi mathcolor="#000000"> </mi>
  //       <mi mathcolor="#000000">∠</mi>
  //       <mi mathcolor="#000000">A</mi>
  //       <mi mathcolor="#000000">D</mi>
  //       <mi mathcolor="#000000">C</mi>
  //       <mo mathcolor="#000000">=</mo>
  //       <mi mathcolor="#000000">∠</mi>
  //       <mi mathcolor="#000000">H</mi>
  //       <mi mathcolor="#000000">D</mi>
  //       <mi mathcolor="#000000">C</mi>
  //       <mo mathcolor="#000000">=</mo>
  //       <msup>
  //         <mrow>
  //           <mo mathcolor="#000000">=</mo>
  //           <mn mathcolor="#000000">60</mn>
  //         </mrow>
  //         <mrow>
  //           <mn mathcolor="#000000">0</mn>
  //         </mrow>
  //       </msup>
  //       <mi mathcolor="#000000"> </mi>
  //       <mfenced mathcolor="#000000" separators="|">
  //         <mrow>
  //           <mi mathcolor="#000000">П</mi>
  //           <mi mathcolor="#000000">р</mi>
  //           <mi mathcolor="#000000">и</mi>
  //           <mi mathcolor="#000000">м</mi>
  //           <mi mathcolor="#000000">е</mi>
  //           <mi mathcolor="#000000">ч</mi>
  //           <mi mathcolor="#000000">а</mi>
  //           <mi mathcolor="#000000">н</mi>
  //           <mi mathcolor="#000000">и</mi>
  //           <mi mathcolor="#000000">е</mi>
  //           <mo mathcolor="#000000">-</mo>
  //           <mi mathcolor="#000000">э</mi>
  //           <mi mathcolor="#000000">т</mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000">д</mi>
  //           <mi mathcolor="#000000">и</mi>
  //           <mi mathcolor="#000000">н</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">и</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">т</mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000">т</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">ж</mi>
  //           <mi mathcolor="#000000">е</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">у</mi>
  //           <mi mathcolor="#000000">г</mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000">л</mi>
  //           <mo mathcolor="#000000">,</mo>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">п</mi>
  //           <mi mathcolor="#000000">р</mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000">с</mi>
  //           <mi mathcolor="#000000">т</mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000">б</mi>
  //           <mi mathcolor="#000000">о</mi>
  //           <mi mathcolor="#000000">з</mi>
  //           <mi mathcolor="#000000">н</mi>
  //           <mi mathcolor="#000000">а</mi>
  //           <mi mathcolor="#000000">ч</mi>
  //           <mi mathcolor="#000000">е</mi>
  //           <mi mathcolor="#000000">н</mi>
  //           <mi mathcolor="#000000">и</mi>
  //           <mi mathcolor="#000000">я</mi>
  //           <mi mathcolor="#000000"> </mi>
  //           <mi mathcolor="#000000">р</mi>
  //           <mi mathcolor="#000000">а</mi>
  //           <mi mathcolor="#000000">з</mi>
  //           <mi mathcolor="#000000">н</mi>
  //           <mi mathcolor="#000000">ы</mi>
  //           <mi mathcolor="#000000">е</mi>
  //         </mrow>
  //       </mfenced>
  //       <mo mathcolor="#000000">;</mo>
  //     </math>
  //   ),
  //   skill: "middle",
  // },
  {
    _id: 5,
    title: `$$\text {текст для примера}:\sin{\alpha}^2+\cos{\alpha}^2=1.$$`,
    skill: "hard",
  },
  // {
  //   _id: 6,
  //   title: "middle 5 карточка",
  //   skill: "middle",
  // },
  // {
  //   _id: 7,
  //   title: "middle 5 карточка",
  //   skill: "middle-log",
  // },
];
