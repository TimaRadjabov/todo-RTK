import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./features/todos/todosSlice";
import { filterReducer } from "./features/filters/filtersSlice";
import { termReducer } from "./features/term/termSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
  term: termReducer,
});
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["todos"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)