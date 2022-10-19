import React, { useContext } from "react";
import { getAuth } from "/firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = useContext();
const UserContext = () => {
  const authInfo = [{}];
  return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
};

export default UserContext;
