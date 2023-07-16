import { addTodo, removeTodo, toggleTodo } from "../actions/todoActions";


const initialState = [
  { label: "Wake up", id: 1, important: false, done: false },
  { label: "Drink Coffee", id: 2, important: false, done: false },
  { label: "Programming", id: 3, important: false, done: false },
];
const todos = createReducer([], builder => {
  builder.addCase(addTodo, (state, action) => { 
    state.push(action.payload);
  })
  builder.addCase(removeTodo, (state, action) => {})
  builder.addCase(toggleTodo, (state, action) => {})
})
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: new Date(),
          label: action.label,
          important: false,
          done: false,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((item) => item.id !== action.id);
    case "IMPORTANT_TODO":
      return state.map((item) =>
        item.id === action.id ? { ...item, important: !item.important } : item
      );
    case "DONE_TODO":
      return state.map((item) =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
    default:
      return state;
  }
};
