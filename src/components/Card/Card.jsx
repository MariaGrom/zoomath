export const Card = (props) => {
  const { task } = props;
  return (
    <li className="Card-Task">
      <p>{task.title}</p>
      <div>карточка с текстом и id - {task._id}</div>
      <p>{task.skill} - уровень сложности</p>
    </li>
  );
};
