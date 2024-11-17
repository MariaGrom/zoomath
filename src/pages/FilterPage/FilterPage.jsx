import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import styles from "./FilterPage.module.scss";
import { useNavigate } from "react-router-dom";

function FilterPage() {
  // const history = useHistory();
  const navigate = useNavigate();

  const navigateToTest = () => {
    // history.push("/testpage");
    navigate("/testpage");
  };

  return (
    <div>
      <div>Заголовок для фильтров</div>
      <div>Чего ты хочешь?</div>
      <div className={styles.flexbox}>
        <div className={styles.item}>Поступить в лицей</div>
        <div className={styles.item}>Узнать свой уровень</div>
        <div className={styles.item}>Проверить знания по теме</div>
      </div>
      {/* <div>
        <p>Для начала найдём</p>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <mi mathcolor="#000000">∠</mi>
          <mi mathcolor="#000000">A</mi>
          <mi mathcolor="#000000">D</mi>
          <mi mathcolor="#000000">C</mi>
          <mo mathcolor="#000000">=</mo>
          <msup>
            <mrow>
              <mn mathcolor="#000000">180</mn>
            </mrow>
            <mrow>
              <mn mathcolor="#000000">0</mn>
            </mrow>
          </msup>
          <mo mathcolor="#000000">-</mo>
          <mi mathcolor="#000000">∠</mi>
          <mi mathcolor="#000000">B</mi>
          <mi mathcolor="#000000">C</mi>
          <mi mathcolor="#000000">D</mi>
          <mo mathcolor="#000000">=</mo>
          <msup>
            <mrow>
              <mn mathcolor="#000000">180</mn>
            </mrow>
            <mrow>
              <mn mathcolor="#000000">0</mn>
            </mrow>
          </msup>
          <mo mathcolor="#000000">-</mo>
          <msup>
            <mrow>
              <mn mathcolor="#000000">120</mn>
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
        </math>
        <p>как односторонние углы при </p>
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mi mathcolor="#000000">B</mi>
          <msub>
            <mrow>
              <mi mathcolor="#000000">C</mi>
            </mrow>
            <mrow>
              <mo mathcolor="#000000">∥</mo>
            </mrow>
          </msub>
          <mi mathcolor="#000000">A</mi>
          <mi mathcolor="#000000">D</mi>
        </math>
        <div>и секущей CD</div> */}
      {/* <mi mathcolor="#000000"> </mi>
          <mfenced mathcolor="#000000" separators="|">
            <mrow>
              <mi mathcolor="#000000">к</mi>
              <mi mathcolor="#000000">а</mi>
              <mi mathcolor="#000000">к</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">о</mi>
              <mi mathcolor="#000000">д</mi>
              <mi mathcolor="#000000">н</mi>
              <mi mathcolor="#000000">о</mi>
              <mi mathcolor="#000000">с</mi>
              <mi mathcolor="#000000">т</mi>
              <mi mathcolor="#000000">о</mi>
              <mi mathcolor="#000000">р</mi>
              <mi mathcolor="#000000">о</mi>
              <mi mathcolor="#000000">н</mi>
              <mi mathcolor="#000000">н</mi>
              <mi mathcolor="#000000">и</mi>
              <mi mathcolor="#000000">е</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">у</mi>
              <mi mathcolor="#000000">г</mi>
              <mi mathcolor="#000000">л</mi>
              <mi mathcolor="#000000">ы</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">п</mi>
              <mi mathcolor="#000000">р</mi>
              <mi mathcolor="#000000">и</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">B</mi>
              <msub>
                <mrow>
                  <mi mathcolor="#000000">C</mi>
                </mrow>
                <mrow>
                  <mo mathcolor="#000000">∥</mo>
                </mrow>
              </msub>
              <mi mathcolor="#000000">A</mi>
              <mi mathcolor="#000000">D</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">и</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">с</mi>
              <mi mathcolor="#000000">е</mi>
              <mi mathcolor="#000000">к</mi>
              <mi mathcolor="#000000">у</mi>
              <mi mathcolor="#000000">щ</mi>
              <mi mathcolor="#000000">е</mi>
              <mi mathcolor="#000000">й</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">C</mi>
              <mi mathcolor="#000000">D</mi>
            </mrow>
          </mfenced>
          <mo mathcolor="#000000">,</mo> */}
      {/* <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <mi mathcolor="#000000">∠</mi>
          <mi mathcolor="#000000">A</mi>
          <mi mathcolor="#000000">D</mi>
          <mi mathcolor="#000000">C</mi>
          <mo mathcolor="#000000">=</mo>
          <mi mathcolor="#000000">∠</mi>
          <mi mathcolor="#000000">H</mi>
          <mi mathcolor="#000000">D</mi>
          <mi mathcolor="#000000">C</mi>
          <mo mathcolor="#000000">=</mo>
          <msup>
            <mrow>
              <mn mathcolor="#000000">60</mn>
            </mrow>
            <mrow>
              <mn mathcolor="#000000">0</mn>
            </mrow>
          </msup>
          <mi mathcolor="#000000"> </mi>
        </math>
        <div>
          (Примечание - это один и тот же угол, просто обозначения разные);
        </div>
      </div> */}

      <div style={{ border: "1px solid red" }}>
        <p>Для начала найдём</p>
        <math
          xmlns="http://www.w3.org/1998/Math/MathML"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            maxWidth: "380px",
            height: "100px",
          }}
        >
          <mi mathcolor="#000000">∠</mi>
          <mi mathcolor="#000000">A</mi>
          <mi mathcolor="#000000">D</mi>
          <mi mathcolor="#000000">C</mi>
          <mo mathcolor="#000000">=</mo>
          <msup>
            <mrow>
              <mn mathcolor="#000000">180</mn>
            </mrow>
            <mrow>
              <mn mathcolor="#000000">0</mn>
            </mrow>
          </msup>
          <mo mathcolor="#000000">-</mo>
          <mi mathcolor="#000000">∠</mi>
          <mi mathcolor="#000000">B</mi>
          <mi mathcolor="#000000">C</mi>
          <mi mathcolor="#000000">D</mi>
          <mo mathcolor="#000000">=</mo>
          <msup>
            <mrow>
              <mn mathcolor="#000000">180</mn>
            </mrow>
            <mrow>
              <mn mathcolor="#000000">0</mn>
            </mrow>
          </msup>
          <mo mathcolor="#000000">-</mo>
          <msup>
            <mrow>
              <mn mathcolor="#000000">120</mn>
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
          <mi mathcolor="#000000"> </mi>
          <mfenced mathcolor="#000000" separators="|">
            <mrow>
              <mi mathcolor="#000000">к</mi>
              <mi mathcolor="#000000">а</mi>
              <mi mathcolor="#000000">к</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">о</mi>
              <mi mathcolor="#000000">д</mi>
              <mi mathcolor="#000000">н</mi>
              <mi mathcolor="#000000">о</mi>
              <mi mathcolor="#000000">с</mi>
              <mi mathcolor="#000000">т</mi>
              <mi mathcolor="#000000">о</mi>
              <mi mathcolor="#000000">р</mi>
              <mi mathcolor="#000000">о</mi>
              <mi mathcolor="#000000">н</mi>
              <mi mathcolor="#000000">н</mi>
              <mi mathcolor="#000000">и</mi>
              <mi mathcolor="#000000">е</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">у</mi>
              <mi mathcolor="#000000">г</mi>
              <mi mathcolor="#000000">л</mi>
              <mi mathcolor="#000000">ы</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">п</mi>
              <mi mathcolor="#000000">р</mi>
              <mi mathcolor="#000000">и</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">B</mi>
              <msub>
                <mrow>
                  <mi mathcolor="#000000">C</mi>
                </mrow>
                <mrow>
                  <mo mathcolor="#000000">∥</mo>
                </mrow>
              </msub>
              <mi mathcolor="#000000">A</mi>
              <mi mathcolor="#000000">D</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">и</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">с</mi>
              <mi mathcolor="#000000">е</mi>
              <mi mathcolor="#000000">к</mi>
              <mi mathcolor="#000000">у</mi>
              <mi mathcolor="#000000">щ</mi>
              <mi mathcolor="#000000">е</mi>
              <mi mathcolor="#000000">й</mi>
              <mi mathcolor="#000000"> </mi>
              <mi mathcolor="#000000">C</mi>
              <mi mathcolor="#000000">D</mi>
            </mrow>
          </mfenced>
          <mo mathcolor="#000000">,</mo>
          <mi mathcolor="#000000"> </mi>
          <mi mathcolor="#000000">∠</mi>
          <mi mathcolor="#000000">A</mi>
          <mi mathcolor="#000000">D</mi>
          <mi mathcolor="#000000">C</mi>
          <mo mathcolor="#000000">=</mo>
          <mi mathcolor="#000000">∠</mi>
          <mi mathcolor="#000000">H</mi>
          <mi mathcolor="#000000">D</mi>
          <mi mathcolor="#000000">C</mi>
          <mo mathcolor="#000000">=</mo>
          <msup>
            <mrow>
              <mn mathcolor="#000000">60</mn>
            </mrow>
            <mrow>
              <mn mathcolor="#000000">0</mn>
            </mrow>
          </msup>
        </math>
        <p>(Примечание - это один и тот же угол, просто обозначения разные);</p>
      </div>

      {/* <embed src={test} type="application/pdf" width="100%" height="100%"/> */}
      <PrimaryButton onClick={navigateToTest}>Далее</PrimaryButton>
    </div>
  );
}
export default FilterPage;
