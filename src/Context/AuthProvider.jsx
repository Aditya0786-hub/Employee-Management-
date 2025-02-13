import React, { createContext, useEffect, useState } from "react";
import { getlocalstorage, setlocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    setlocalStorage();
    const { employees, admin } = getlocalstorage();
    setuserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
