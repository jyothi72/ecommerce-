import React, { useState } from "react";
import { useHistory } from "react-router-dom";

let AuthContext = React.createContext({
  token: "",
  isLoggedIn: true,
  login: (token) => {},
  logout: () => {},
  emailid: "",
});
export const Authcontextprovider = (props) => {
  const history = useHistory();

  const emailState = localStorage.getItem("email");
  const inittoken = localStorage.getItem("token");
  const [token, settoken] = useState(inittoken);
  const [email, SetEmail] = useState(emailState);

  const userloggedin = !!token;
  const loginhandler = (token, email) => {
    settoken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    SetEmail(email);
  };
  const logoutHandler = () => {
    settoken(null);
    localStorage.removeItem("token"); 
    SetEmail('');
};   

  const contextvalue = {
    token: token,
    isLoggedIn: userloggedin,
    login: loginhandler,
    logout: logoutHandler,
    emailid: email,
  };
  return (
    <AuthContext.Provider value={contextvalue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
