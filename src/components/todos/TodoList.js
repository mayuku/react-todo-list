import { useContext } from "react";

import { TodoContext } from "../../providers/TodoContextProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, onMarkAsComplete, onEditTodo, onDeleteTodo } =
    useContext(TodoContext);

  return todos.map((todo, index) => (
    <TodoItem
      key={`todo-${index}`}
      todo={todo}
      index={index}
      onMarkAsComplete={onMarkAsComplete}
      onEditTodo={onEditTodo}
      onDeleteTodo={onDeleteTodo}
    />
  ));
};

export default TodoList;
