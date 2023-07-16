import { useDispatch } from "react-redux";
import s from "./AddItem.module.css";
import { addTodo } from "../../features/todos/todosSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
const AddItem = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

 
  const onLabelChange = (e) => {
    setText(e.target.value);
  };
  const onLabelSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      label: text, important: false, done: false, id: nanoid()
    }))
    setText("");
  };

  return (
    <form className={`d-flex  ${s.wrapper}`} onSubmit={onLabelSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        className={`form-control ${s.input}`}
        onChange={onLabelChange}
        value={text}
      />
      <button className="btn btn-outline-secondary">Add Task</button>
    </form>
  );
};
export default AddItem;