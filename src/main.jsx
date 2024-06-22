import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/ContextUser.jsx";
import PageProvider from "./Context/PageContext.jsx";
import Header from "./templates/Header/index.jsx";
import Footer from "./templates/Footer/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <PageProvider>
        <BrowserRouter>
          <Header />
          <App />
          <Footer />
        </BrowserRouter>
    </PageProvider>
  </UserProvider>
);
