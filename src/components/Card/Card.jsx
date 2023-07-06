import { useState } from 'react';
import { Popup } from '../Popup/Popup';

export const Card = (props) => {
  const { task } = props;
  const [isSolutionPopup, setIsSolutionPopup] = useState(false);

  const handleOpen = () => {
    console.log('click')
    setIsSolutionPopup(true)
  }



  const handleClose = () => {
    setIsSolutionPopup(false)
  }

  return (
    <>
      <li className="Card-Task">
        <p>{task.title}</p>
        <div>карточка с текстом и id - {task._id}</div>
        <p>{task.skill} - уровень сложности</p>
        <button onClick={handleOpen}>решение</button>
      </li>
      <Popup task={task} isOpen={isSolutionPopup} onClose={handleClose} />
    </>
  );
};
