import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>
);
