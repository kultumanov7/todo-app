import NewTodo from "./newTodo";

const TodoList = (props) => {
  const { todo, setTodo, originalTodo, setOriginalTodo, heading } = props;
  return (
    <ul className="todo-list">
      {todo.map((task) => (
        <NewTodo
          key={task.id}
          task={task}
          todo={todo}
          setTodo={setTodo}
          originalTodo={originalTodo}
          setOriginalTodo={setOriginalTodo}
          heading={heading}
        />
      ))}
    </ul>
  );
};

export default TodoList;
