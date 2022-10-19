import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Google Sign In
  const googleProvider = new GoogleAuthProvider();

  const googlLogInWithPopUp = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //out side communicate
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      console.log(currenUser);
      setUser(currenUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, googlLogInWithPopUp };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
