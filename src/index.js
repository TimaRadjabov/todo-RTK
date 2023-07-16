import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store";

import styles from "./index.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(store.getState());
root.render(
  <Provider store={store}>
    <div className={styles.wrapper}>
      <App />
    </div>
  </Provider>
);
