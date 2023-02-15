import { useEffect, useState } from "react";
import plus from "../../assets/img/plus-btn.png";
import chrest from "../../assets/img/chrest-math.png";
import ModalWindow from "./modal-window";
import TodoList from "./todo-list";

const MainTodo = () => {
  const [counter, setCounter] = useState(1);


  // array of todos
  const massiveTodos = [
    {
      id: 1,
      todo: "Learn React",
      status: "todo",
      isDone: false,
    },
    {
      id: 2,
      todo: "Study Vue.js",
      status: "done",
      isDone: false,
    },
    {
      id: 3,
      todo: "Create Aldiyar.js Library",
      status: "trash",
      isDone: false,
    },
  ];

  const [todo, setTodo] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState(todo);
  const [heading, setHeading] = useState("To Do");
  const [modalShown, setModalShown] = useState(false);

  const handleTodos = () => {
    setHeading("To Do");
    setFilteredTodo(todo.filter((el) => el.status === "todo"));
    console.log(filteredTodo);
  };

  const handleDone = () => {
    setHeading("Done");
    setFilteredTodo(todo.filter((el) => el.status === "done"));
    console.log(filteredTodo);
  };

  const handleTrash = () => {
    setHeading("Trash");
    setFilteredTodo(todo.filter((el) => el.status === "trash"));
    console.log(filteredTodo);
  };

  const isModalShown = () => {
    setModalShown(!modalShown);
  };

  useEffect(() => {
    handleTodos();
  }, [])

  return (
    <>
      <div className="todo-buttons">
        <div>
          <button onClick={handleTodos} className="todo-btn">
            To Do
          </button>
          <button onClick={handleDone} className="todo-btn">
            Done
          </button>
          <button onClick={handleTrash} className="todo-btn">
            Trash
          </button>
        </div>
        <div className="modal-side">
          {modalShown && (
            <ModalWindow
              todo={todo}
              setTodo={setTodo}
              counter={counter}
              setCounter={setCounter}
              setFilteredTodo={setFilteredTodo}
              setHeading={setHeading}
            />
          )}
          <button onClick={isModalShown} className="todo-btn-plus">
            {modalShown ? (
              <img width="40" height="40" src={chrest} alt="plus sign" />
            ) : (
              <img width="24" height="24" src={plus} alt="plus sign" />
            )}
          </button>
        </div>
      </div>
      <h1 className="todo-heading-of-lists">{heading}</h1>
      <TodoList
        todo={filteredTodo}
        setTodo={setFilteredTodo}
        originalTodo={todo}
        setOriginalTodo={setTodo}
        heading={heading}
      />
    </>
  );
};

export default MainTodo;
