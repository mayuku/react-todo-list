import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({
  todo,
  index,
  onMarkAsComplete,
  onEditTodo,
  onDeleteTodo,
}) => (
  <div className="todos__item">
    <input
      type="checkbox"
      onChange={() => onMarkAsComplete(todo)}
      checked={todo.completed}
    />
    <div
      contentEditable={!todo.completed}
      suppressContentEditableWarning={true}
      className={"todos__item--text" + (todo.completed ? " todo-complete" : "")}
      onBlur={(e) => onEditTodo(e, index)}
    >
      {todo.text}
    </div>
    <FontAwesomeIcon
      icon={faTrash}
      onClick={() => onDeleteTodo(todo)}
      className="button--delete"
    />
  </div>
);

export default TodoItem;
