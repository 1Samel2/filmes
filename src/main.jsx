import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./globalStyle";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);
