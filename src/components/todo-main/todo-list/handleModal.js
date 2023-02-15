import trashImg from "../../../assets/img/trash.png";

const ModalTodo = (props) => {
  const {
    originalTodo,
    setOriginalTodo,
    setClickedPoints,
    task,
    setFilteredTodo,
    heading,
  } = props;

  const moveToTrash = () => {
    const newOriginalTodo = [...originalTodo];
    const index = originalTodo.findIndex((el) => el.id === task.id);
    if (index > -1) {
      newOriginalTodo[index].status = "trash";
      setOriginalTodo(newOriginalTodo);
      if (heading === "To Do") {
        setFilteredTodo(newOriginalTodo.filter(el => el.status === "todo"))
      } else if (heading === "Done") {
        setFilteredTodo(newOriginalTodo.filter(el => el.status === "done"))
      }
    }
    setClickedPoints(false);
  };

  return (
    <div onClick={moveToTrash} className="move-to-trash-modal">
      <img src={trashImg} />
      <h5>Move to trash</h5>
    </div>
  );
};

export default ModalTodo;
