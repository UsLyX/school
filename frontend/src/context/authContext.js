import { useEffect, useState, createContext, useContext } from "react";
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [jwt, setJwt] = useState(() => {
    // Попытка получить токен из localStorage при загрузке компонента
    return localStorage.getItem("jwt") || null;
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios.post('http://localhost:5000/user/info', {jwt: jwt})
        .then(res => {
            setUser({
              id: res.data._id,
              name: res.data.name,
              login: res.data.login,
              email: res.data.email,
              roles: res.data.roles
            })
          }
        )
        .catch(e => console.log(e));
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        throw error;
      }
    };

    // Обновление localStorage при изменении токена
    if (jwt !== null) {
      localStorage.setItem("jwt", jwt);
      getUser();
    } else {
      setUser(null);
      localStorage.removeItem("jwt");
    }
  }, [jwt]);

  const logout = () => {
    setJwt(null);
  };

  const login = async (jwt) => {
    setJwt(jwt);
  };

  return (
    <AuthContext.Provider value={{ jwt, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
