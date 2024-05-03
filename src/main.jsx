import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Header from "./templates/Header/index.jsx";
import Footer from "./templates/Footer/index.jsx";
import Sign from "./pages/Sign/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <body>
        <Header />
        <Home />
        <Footer />
      </body>
    ),
  },
  {
    path: "/sign",
    element: (
      <body>
        <Header />
        <Sign />
        <Footer />
      </body>
    ),
  }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);