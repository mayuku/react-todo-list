import { useContext, useRef } from "react";
import { TodoContext } from "../../providers/TodoContextProvider";

const TodoForm = () => {
  const inputTodoRef = useRef(null);
  const { onSubmitTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputTodoRef.current.value) {
      console.log("INPUT IS EMPTY!");

      return;
    }

    onSubmitTodo({ text: inputTodoRef.current.value });

    // clear input
    inputTodoRef.current.value = "";
  };

  return (
    <form className="todos__form" onSubmit={handleSubmit}>
      <input ref={inputTodoRef} className="todos__input" type="text" />
      <button type="submit" className="todos__button">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
