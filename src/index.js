import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import styles from "./index.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(store.getState());
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className={styles.wrapper}>
        <App />
      </div>
    </PersistGate>
  </Provider>
);
