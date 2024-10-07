import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DieuKhoan from "./conponents/DieuKhoan";
import ChinhSachBaoMat from "./conponents/ChinhSachBaoMat";
import BanQuyen from "./conponents/BanQuyen";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <div>Nghĩa</div>,
      },
      { path: "/dieukhoan", element: <DieuKhoan /> },
      { path: "/chinhsachbaomat", element: <ChinhSachBaoMat /> },
      { path: "/banquyen", element: <BanQuyen /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
