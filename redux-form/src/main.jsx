import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./app/store.js";
import { Provider } from "react-redux";
import WelcomePage from "./components/WelcomePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/WelcomePage" element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>{" "}
    </Provider>
  </React.StrictMode>
);
