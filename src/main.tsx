import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Child1 } from "./components/Child1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet></Outlet>,
    children: [
      {
        path: "child-1",
        element: <Child1 />,
        children: [
          {
            path: "light-gold",
            element: (
              <div style={{ border: "4px solid #fff2a9" }}>light gold</div>
            ),
          },
          {
            path: "dark-gold",
            element: (
              <div style={{ border: "4px solid #d2f2a9" }}>Dark gold</div>
            ),
          },
        ],
      },
      {
        path: "child-2",
        element: <>Child 2</>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
