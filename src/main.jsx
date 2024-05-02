import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Header from "./templates/Header/index.jsx";
import Footer from "./templates/Footer/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <main>
        <Header />
        <Home />
        <Footer />
      </main>
    ),
  }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);