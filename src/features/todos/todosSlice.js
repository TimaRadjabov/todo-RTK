import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { label: "Wake up", id: 1, important: false, done: false },
    { label: "Drink Coffee", id: 2, important: false, done: false },
    { label: "Programming", id: 3, important: false, done: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    toggleImportant: (state, action) => {
        return state.map((item) =>
        item.id === action.payload ? { ...item, important: !item.important } : item
      );
    },
    toggleDone: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    },
  },
});

export const { addTodo, removeTodo, toggleDone, toggleImportant } =
  todosSlice.actions;
export const todosReducer = todosSlice.reducer;
