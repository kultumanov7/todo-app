import { useEffect, useState } from "react";

const ModalWindow = (props) => {
  const { todo, setTodo, counter, setCounter, setFilteredTodo, setHeading} = props;
  const [inputTodo, setInputTodo] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(inputTodo);
  }, [inputTodo])

  const addTodo = () => {
    const newObject = {
      id: counter,
      todo: inputTodo,
      status: "todo",
      isDone: false,
    };
    const newOriginalTodo = [...todo, newObject];
    setTodo(newOriginalTodo);
    setFilteredTodo(newOriginalTodo.filter(el => el.status === "todo"))
    setCounter((counter) => counter + 1);
    setValue('')
    setHeading("To Do");
  };

   const handleValue = (event) => {
    setInputTodo(event.target.value);
   }

  return (
    <div className="modal-window">
      <label for="todo">
        <h5>Add New To Do</h5>
      </label>
      <textarea
        value={value}
        onChange={handleValue}
        className="input-add-todo"
        id="todo"
        name="todo"
        rows="4"
        cols="50"
      ></textarea>
      <button onClick={addTodo} className="add-btn">
        Add
      </button>
    </div>
  );
};

export default ModalWindow;
