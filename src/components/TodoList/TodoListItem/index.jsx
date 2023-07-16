import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import "./TodoListItem.css";

const TodoListItem = ({
  label,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  done,
  important,
}) => {
  const checkImportant = important ? " important" : "";
  const classNames = "todo-list-item" + checkImportant;
  return (
    <span className={done ? classNames + " done" : classNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>

      <div className="btns">
        <button
          className="btn btn-outline-success btn-sm"
          onClick={onToggleImportant}
        >
          <FontAwesomeIcon icon={faCircleExclamation} />
        </button>
        <button className="btn btn-outline-success btn-sm" onClick={onDeleted}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </span>
  );
};
export default TodoListItem;
