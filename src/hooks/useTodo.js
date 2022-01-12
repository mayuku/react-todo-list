import { useEffect, useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState([]);

  // on mount
  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  // todos on change
  // listener every todos state was changed update localstorage todos
  useEffect(() => {
    const temp = JSON.stringify(todos);

    localStorage.setItem("todos", temp);
  }, [todos]);

  const onSubmitTodo = (payload) => {
    // todo item
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        completed: false,
        ...payload,
      },
    ]);
  };

  function onDeleteTodo(selectedTod) {
    if (!window.confirm("Are you sure you want to delete this item?")) {
      return;
    }

    const updatedTodos = [...todos].filter(
      (todo) => todo.id !== selectedTod.id
    );

    setTodos(updatedTodos);
  }

  function onMarkAsComplete(selectedTod) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === selectedTod.id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  const onEditTodo = (e, index) => {
    const currentTodos = [...todos];

    currentTodos[index] = Object.assign(currentTodos[index], {
      text: e.target.innerText,
    });
    setTodos(currentTodos);
  };

  return {
    onDeleteTodo,
    onMarkAsComplete,
    onEditTodo,
    onSubmitTodo,
    //
    todos,
  };
};

export default useTodo;
