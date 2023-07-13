import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./globalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MovieSeries from "./pages/MovieSeries";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/popular",
        element: <MovieSeries />,
      },
      {
        path: "/movies",
        element: <MovieSeries />,
      },
      {
        path: "/series",
        element: <MovieSeries />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </React.StrictMode>
);
