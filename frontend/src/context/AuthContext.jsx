import React from 'react'
import { createContext } from "react";

export const AuthDataContext = createContext(null);

function AuthContext({ children }) {
  const serverUrl = "http://localhost:3000";


  return (
    <AuthDataContext.Provider value={{ serverUrl }}>
      {children}
    </AuthDataContext.Provider>
  );
}

export default AuthContext;
