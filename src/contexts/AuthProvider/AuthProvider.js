import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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

  // log out

  const logOut = () => {
    return signOut(auth);
  };
  //Create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, googlLogInWithPopUp, logOut, createUser, logInUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
