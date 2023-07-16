import {createAction} from "@reduxjs/toolkit";

const addTodos = createAction("ADD_TODO", (title) => ({
  payload: {
    title,
  }
})); 
console.log(addTodos());
console.log(addTodos.type);
console.log(addTodos("Learn RTK"));

export const addTodo = (title) => ({
  type: addTodos.type,
  title,
});
export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id,
});
export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

 