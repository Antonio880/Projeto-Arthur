import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Header from "./templates/Header/index.jsx";
import Footer from "./templates/Footer/index.jsx";
import Sign from "./pages/Sign/index.jsx";
import Login from "./pages/Login/index.jsx";
import { PageProvider } from "./Context/PageContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageProvider>
        <body>
          <Header />
          <Home />
          <Footer />
        </body>
      </PageProvider>
    ),
  },
  {
    path: "/sign",
    element: (
      <PageProvider>
        <body>
          <Header />
          <Sign />
          <Footer />
        </body>
      </PageProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <PageProvider>
        <body>
          <Header />
          <Login />
          <Footer />
        </body>
      </PageProvider>
    )
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);