import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { ADMIN_EMAILS } from "../../roles";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [role, setRole] = useState(null); // 'admin' or 'user'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setUserLoggedIn(true);

        // role check
        if (ADMIN_EMAILS.includes(user.email)) {
          setRole("admin");
        } else {
          setRole("user");
        }
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
        setRole(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, userLoggedIn, role, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
