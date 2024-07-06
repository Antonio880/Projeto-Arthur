import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/ContextUser.jsx";
import { PageProvider } from "./Context/PageContext.jsx";
import Header from "./templates/Header/index.jsx";
import Footer from "./templates/Footer/index.jsx";
import axios from 'axios';
import Cookies from 'js-cookie';
import "../global.css";

// Configurar o axios para incluir o token de autorização em todas as requisições
const token = Cookies.get('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <PageProvider>
        <BrowserRouter>
          <Header />
          <main>
          <App />
        </main>
          <Footer />
        </BrowserRouter>
    </PageProvider>
  </UserProvider>
);
