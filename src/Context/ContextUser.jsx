import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.get('http://localhost:3000/current_user') // rota para obter o usuário atual
            .then(response => {
                setUser(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error("Failed to load user", error);
                Cookies.remove('token');
            });
      }else{
        setUser(null);
      }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
