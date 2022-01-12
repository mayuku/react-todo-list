import TodoContextProvider from "../../providers/TodoContextProvider";
import { getCurrentDateLocaleFormat } from "../../utils/helpers/date";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = () => (
  <TodoContextProvider>
    <TodoForm />
    <p className="date">Current Date: {getCurrentDateLocaleFormat()}</p>
    <TodoList />
  </TodoContextProvider>
);

export default Todos;
