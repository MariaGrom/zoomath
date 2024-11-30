import { useEffect, useState } from "react";
import styles from "./NewCard.module.scss";
import IconStat from "../../img/stat.svg";
// import { Popup } from "../Popup/Popup";
import { BlockSolution } from "../BlockSolution/BlockSolution";
import { useNavigate } from "react-router-dom";

function NewCard(props) {
  const { task, isExampleCard } = props;
  const navigate = useNavigate();
  // переменная состояния для демонстрации решения
  const [isShowSolution, setIsShowSolution] = useState(true);
  // переменная состояния для отметки сохранения задачи
  const [isSaveTask, setIsSaveTask] = useState(false);
  // переменная состояния для отметки выполненной задачи
  const [isDoneTask, setIsDoneTask] = useState(false);
  // переменная состояния для отметки лайка
  const [isLikeTask, setIsLikeTask] = useState(false);
  // переменная состояния количества лайков
  const [countLike, setCountLike] = useState(124);

  // функция открытия попапа
  const handleOpen = () => {
    setIsShowSolution(true);
  };
  // функция закрытия попапа
  const handleClose = () => {
    setIsShowSolution(false);
  };

  // функция сохранения карточки
  const handleBookmark = () => {
    if (isSaveTask === true) {
      setIsSaveTask(false);
    } else {
      setIsSaveTask(true);
    }
  };

  // функция сделанной задачи
  const handleDoneTask = () => {
    if (isDoneTask === true) {
      setIsDoneTask(false);
    } else {
      setIsDoneTask(true);
    }
  };
  // функция лайкнутой задачи
  const handleLikeTask = () => {
    if (isLikeTask === true) {
      setIsLikeTask(false);
      console.log("click");
      // не сразу отрисовывает - разобраться почему
      setCountLike(countLike + 1);
    } else {
      setIsLikeTask(true);
    }
  };

  //   навигация на банк карточек, при клике на карточку с главной
  const navigateToBank = () => {
    navigate("/algebra/base/card");
  };

  return (
    <>
      <li className={styles.newcard} id={task._id}>
        <button
          type="button"
          onClick={handleBookmark}
          className={
            isSaveTask ? styles.newcard__bookmark : styles.newcard__bookmarkNot
          }
        ></button>
        <button
          type="button"
          onClick={handleDoneTask}
          className={isDoneTask ? styles.newcard__done : styles.newcard__doNot}
        ></button>

        <div className={styles.newcard__complexity}>
          <p>{task.skill}</p>
        </div>
        <div className={styles.newcard__task}>
          <p>{task.title}</p>
          <div className={styles.newcard__statistics}>
            <div className={styles.newcard__statisticsLike}>
              <button
                type="button"
                onClick={handleLikeTask}
                className={
                  isLikeTask ? styles.newcard__like : styles.newcard__likeNot
                }
              ></button>
              <p>{countLike}</p>
            </div>
            <div className={styles.newcard__statisticsDecisions}>
              <div>
                <img src={IconStat} alt="statistics" />
                <p>67%</p>
              </div>
              <p>решили эту задачу</p>
            </div>
          </div>
        </div>

        <div className={styles.newcard__btns}>
          <button
            type="button"
            className={styles.newcard__btn}
            onClick={
              isExampleCard
                ? navigateToBank
                : isShowSolution
                ? handleClose
                : handleOpen
            }
          >
            {isShowSolution ? "скрыть решение" : "решение"}
          </button>
          <button type="button" className={styles.newcard__btn}>
            видео
          </button>
          <button type="button" className={styles.newcard__btn}>
            теория
          </button>
        </div>
      </li>
      {isShowSolution && <BlockSolution task={task} />}
      {/* <Popup task={task} isOpen={isShowSolution} onClose={handleClose} /> */}
    </>
  );
}

export default NewCard;
