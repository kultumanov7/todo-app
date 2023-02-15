import trashImg from "../../../assets/img/trash.png";
import moveBack from "../../../assets/img/move-back-to-todo.png";

const ModalTrash = (props) => {
  const {
    originalTodo,
    setOriginalTodo,
    setClickedPointsTrash,
    task,
    setChecked,
    setFilteredTodo,
    heading,
  } = props;

  const moveToTodo = () => {
    const newOriginalTodo = [...originalTodo];
    const index = originalTodo.findIndex(el => el.id === task.id);
    if (index > -1) {
      newOriginalTodo[index].status = 'todo';
      newOriginalTodo[index].isDone = false;
      setChecked(false);
      setOriginalTodo(newOriginalTodo);
      if (heading === "Trash") {
        setFilteredTodo(newOriginalTodo.filter(el => el.status === "trash"))
      }
    }
    setClickedPointsTrash(false);
  };

  const deleteForever = () => {
    const newOriginalTodo = [...originalTodo];
    const index = originalTodo.findIndex(el => el.id === task.id);
    if (index > -1) {
      newOriginalTodo.splice(index, 1);
      setOriginalTodo(newOriginalTodo);
      if (heading === "Trash") {
        setFilteredTodo(newOriginalTodo.filter(el => el.status === "trash"))
      }
    }
    setClickedPointsTrash(false);
  };

  return (
    <div className="move-to-trash-modal trash-modal">
      <div className="trash-modal-components" onClick={deleteForever}>
        <img width="15" height="15" src={trashImg} />
        <h5>Delete Forever</h5>
      </div>
      <div className="trash-modal-components" onClick={moveToTodo}>
        <img width="15" height="15" src={moveBack} />
        <h5>Move back to To Do</h5>
      </div>
    </div>
  );
};

export default ModalTrash;
