import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Header from "./templates/Header/index.jsx";
import Footer from "./templates/Footer/index.jsx";
import Sign from "./pages/Sign/index.jsx";
import Login from "./pages/Login/index.jsx";
import Settings from "./pages/Settings/index.jsx";
import TeacherArea from "./pages/TeacherArea/index.jsx";
import { PageProvider } from "./Context/PageContext.jsx";
import { UserProvider } from "./Context/ContextUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <PageProvider>
          <body>
            <Header />
            <Home />
            <Footer />
          </body>
        </PageProvider>
      </UserProvider>
    ),
  },
  {
    path: "/sign",
    element: (
      <UserProvider>
        <PageProvider>
          <body>
            <Header />
            <Sign />
            <Footer />
          </body>
        </PageProvider>
      </UserProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <UserProvider>
        <PageProvider>
          <body>
            <Header />
            <Login />
            <Footer />
          </body>
        </PageProvider>
      </UserProvider>
    ),
  },
  {
    path: "/settings",
    element: (
      <UserProvider>
        <PageProvider>
          <body>
            <Header />
             <Settings /> 
            <Footer />
          </body>
        </PageProvider>
      </UserProvider>
    ),
  },
  {
    path: "/area-professor-adm",
    element: (
      <UserProvider>
        <PageProvider>
          <body>
            <Header />
            <TeacherArea />
            <Footer />
          </body>
        </PageProvider>
      </UserProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
