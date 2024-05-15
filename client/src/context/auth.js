import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  //used to create global state
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //showing error so changed
  //default axios
  // axios.defaults.headers.common["Authorization"] = auth?.token;
  // Set Axios default headers whenever the 'auth' state changes
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = auth?.token;
  }, [auth?.token]); // Add 'auth.token' to the dependency array

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
  );
};

//custom hook

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
