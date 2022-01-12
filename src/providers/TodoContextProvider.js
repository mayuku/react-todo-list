import React from "react";
import useTodo from "../hooks/useTodo";

export const TodoContext = React.createContext({});

const TodoContextProvider = ({ children }) => {
  const { onSubmitTodo, todos, onMarkAsComplete, onEditTodo, onDeleteTodo } =
    useTodo();

  return (
    <TodoContext.Provider
      value={{
        onSubmitTodo,
        onMarkAsComplete,
        onEditTodo,
        onDeleteTodo,
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
