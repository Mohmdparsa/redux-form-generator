import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./app/store.js";
import { Porvider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Porvider store={store}>
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </Porvider>
    </BrowserRouter>
  </React.StrictMode>
);
