import TodoListItem from "./TodoListItem";
import {useSelector, useDispatch} from "react-redux";

import s from "./TodoList.module.css";
import { removeTodo, toggleDone, toggleImportant } from "../../features/todos/todosSlice";
const TodoList = () => {
  
  
  const todos = useSelector(state => state.todos);
  const filter = useSelector(item => item.filters.name);
  const dispatch = useDispatch();
  const term = useSelector(item => item.term.term);
  const onSearching = (data, term) => {
    if (term.length === 0) {
      return data;
    }
    return data.filter((item) =>
      item.label.toLowerCase().includes(term.toLowerCase())
    );
  };
  const filtered = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const visibleData = filtered(onSearching(todos, term), filter);
  
  const elements = visibleData.map(item => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem {...item}  onDeleted={() => dispatch(removeTodo(item.id))}
        onToggleImportant={() => dispatch(toggleImportant(item.id))} onToggleDone={() => dispatch(toggleDone(item.id))}/>
      </li>
    )
  })
  return (
    <div className={s.wrapper}>
      <ul className="list-group">{elements}</ul>
    </div>
  );
};

export default TodoList;
