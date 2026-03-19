import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

// 1. root 요소를 한 번만 생성합니다.
const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. Provider로 App을 감싸서 한 번만 렌더링합니다.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
