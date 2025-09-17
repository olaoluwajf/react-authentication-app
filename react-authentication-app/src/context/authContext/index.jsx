import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged (auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
}
const value = { currentUser, userLoggedIn, loading };
return <AuthContext.Provider value={value}>
    {!loading && children}
</AuthContext.Provider>;
}
