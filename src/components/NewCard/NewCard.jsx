import React, { useEffect, useState } from "react";
import styles from "./NewCard.module.scss";
import IconStat from "../../img/stat.svg";
import IconEdit from "../../img/icon_edit.svg";
// import { Popup } from "../Popup/Popup";
import { BlockSolution } from "../BlockSolution/BlockSolution";
import { useNavigate } from "react-router-dom";
import IconCubeEasy from "../../img/cube-easy";
import IconCubeMiddle from "../../img/cube-middle";
import IconCubeHard from "../../img/cube-hard.svg";

function NewCard(props) {
  const { task, isExampleCard } = props;
  const navigate = useNavigate();

  const [isShowSolution, setIsShowSolution] = useState(false); // переменная состояния для демонстрации решения
  const [isSaveTask, setIsSaveTask] = useState(false); // переменная состояния для отметки сохранения задачи
  const [isDoneTask, setIsDoneTask] = useState(false); // переменная состояния для отметки выполненной задачи
  const [isLikeTask, setIsLikeTask] = useState(false); // переменная состояния для отметки лайка
  const [countLike, setCountLike] = useState(124); // переменная состояния количества лайков

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
      // console.log("click");
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

  const goToEditPage = (cardId) => {
    console.log("click");
    navigate(`/edit/${cardId}`, "_blank");
  };
  console.log("task", task);

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

        <div className={styles.newcard__skill}>
          <p>{task.skillInput}</p>
        </div>
        <div className={styles.newcard__task}>
          <div>
            {task?.blocks?.map((block) => (
              <div className={styles.newcard__condition}>
                {/* <p> */}
                {block.title}
                <div>
                  {block.file ? (
                    <img
                      src={`http://localhost:3003${block.file}`}
                      className={
                        block.style === "small"
                          ? styles.newcard__conditionImg_small
                          : block.style === "large"
                          ? styles.newcard__conditionImg_large
                          : styles.newcard__conditionImg
                      }
                      alt="условие"
                    />
                  ) : null}
                </div>
                {/* </p> */}
              </div>
            ))}
          </div>
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
              {/* <p>решили эту задачу</p> */}
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
        <div
          onClick={() => goToEditPage(task._id)}
          className={styles.newcard__edit}
        >
          <img src={IconEdit} alt="edit" />
        </div>
        <div className={styles.newcard__img_wrapper}>
          {task.skillInput === "easy" ? (
            <IconCubeEasy fill={"#D5EFF3"} />
          ) : (
            // : task.skillInput === "hard"
            // ? IconCubeHard
            <IconCubeMiddle fill={"#6564DB"} />
          )}

          {/* <img
            className={styles.newcard__skillImg}
            src={
              task.skillInput === "easy"
                ? IconCubeEasy
                : task.skillInput === "hard"
                ? IconCubeHard
                : IconCubeMiddle
            }
            // scr={MiddleCubeIcon}
            alt="background_cube"
          /> */}
        </div>
      </li>
      {isShowSolution && <BlockSolution task={task} />}
      {/* <Popup task={task} isOpen={isShowSolution} onClose={handleClose} /> */}
    </>
  );
}

export default NewCard;
