import Footer from "../footer";
import HeaderTodo from "../header";
import MainTodo from "../todo-main";

const TodoPage = () => {
  return (
    <div className="todo-page">
      <HeaderTodo/>
      <MainTodo/>
      <Footer />
    </div>
  );
};

export default TodoPage;
