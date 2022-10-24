import React, { createContext, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  //   const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //GoogleSignIn
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //GithubSignIn
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const authInfo = { googleSignIn, githubSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
