import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./features/todos/todosSlice";
import { filterReducer } from "./features/filters/filtersSlice";
import { termReducer } from "./features/term/termSlice";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filterReducer,
        term: termReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});
