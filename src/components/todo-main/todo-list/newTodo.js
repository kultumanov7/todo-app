import { useState, useEffect } from "react";
import threePoints from "../../../assets/img/three-points.png";
import ModalTodo from "./handleModal";
import ModalTrash from "./handleModalTrash";

const NewTodo = (props) => {
  const { task, todo, setTodo, originalTodo, setOriginalTodo, heading } = props;

  const [checked, setChecked] = useState(task.isDone);
  const [clickedPoints, setClickedPoints] = useState(false);
  const [clickedPointsTrash, setClickedPointsTrash] = useState(false);

  const handleCheckChange = () => {
    setChecked(!checked);
    const newOriginalTodo = [...originalTodo];
    const index = originalTodo.findIndex(el => el.id === task.id)
    if (index > -1) {
      newOriginalTodo[index].isDone = !newOriginalTodo[index].isDone;
      setOriginalTodo(newOriginalTodo);
    }
  };

  useEffect(() => {
    if (checked && task.status === "todo") {
      const newOriginalTodo = [...originalTodo];
      const index = originalTodo.findIndex((el) => el.id === task.id);
      if (index > -1) {
        newOriginalTodo[index].isDone = true;
        newOriginalTodo[index].status = "done";
        setOriginalTodo(newOriginalTodo);
      }
    }
    if (!checked && task.status === "done") {
      const newOriginalTodo = [...originalTodo];
      const index = originalTodo.findIndex(el => el.id === task.id);
      if (index > - 1) {
        newOriginalTodo[index].isDone = false;
        newOriginalTodo[index].status = "todo";
        setOriginalTodo(newOriginalTodo);
      }
    }
  }, [checked]);

  const handleModal = () => {
    if (task.status === "todo" || task.status === "done") {
      setClickedPoints(!clickedPoints);
    } else if (task.status === "trash") {
      setClickedPointsTrash(!clickedPointsTrash);
    }
  };

  return (
    <li className="todo-task">
      <button onClick={handleModal} className="three-points">
        <img
          className="img-three-points"
          src={threePoints}
          alt="three points"
        />
      </button>
      {clickedPoints && (
        <ModalTodo
          originalTodo={originalTodo}
          setOriginalTodo={setOriginalTodo}
          setFilteredTodo={setTodo}
          setClickedPoints={setClickedPoints}
          task={task}
          heading={heading}
        />
      )}
      {clickedPointsTrash && (
        <ModalTrash
          originalTodo={originalTodo}
          setOriginalTodo={setOriginalTodo}
          setChecked={setChecked}
          setClickedPointsTrash={setClickedPointsTrash}
          task={task}
          setFilteredTodo={setTodo}
          heading={heading}
        />
      )}
      <input
        checked={checked}
        onChange={handleCheckChange}
        className="checkbox"
        type="checkbox"
      />
      <p className={"todo-task-p " + (task.isDone && "line-through")}>
        #{task.id} - {task.todo}
      </p>
    </li>
  );
};

export default NewTodo;
