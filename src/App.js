import React, { createContext, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import Router from "./routes/Router";
import { authentication } from "./utils/fakeBackend";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
  }
`

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = (name, password) => setAuth(authentication(name, password));

  const logout = () => setAuth(null);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
