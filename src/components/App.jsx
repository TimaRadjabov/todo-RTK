import Header from "./Header";
import ItemFilter from "./ItemFilter";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";

import s from "./App.module.css";
import AddItem from "./AddItem";

import React, { useState } from "react";
import { useSelector } from "react-redux";
const App = () => {
  const todos = useSelector((item) => item.todos);

  const todoDone = todos.filter((item) => item.done).length;
  const todoImportant = todos.filter((item) => item.important).length;

  return (
    <>
      <div className={s.wrapper}>
        <Header important={todoImportant} done={todoDone} />
        <div className={s.searching}>
          <SearchPanel />
          <ItemFilter />
        </div>
        <TodoList />
        <AddItem />
      </div>
    </>
  );
};
export default App;
