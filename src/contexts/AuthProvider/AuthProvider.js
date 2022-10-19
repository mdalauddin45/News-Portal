import React, { createContext } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const user = { dispalyName: "Alauddin" };

  // Google Sign In
  const googleProvider = new GoogleAuthProvider();

  const googlLogInWithPopUp = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = { user, googlLogInWithPopUp };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
