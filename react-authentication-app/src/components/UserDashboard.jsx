import React from "react";
import { doSignOut } from "../firebase/auth";
import { useAuth } from "../context/authContext";

const UserDashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="welcome-screen">
      <h1>User Dashboard</h1>
      <p>Welcome, {currentUser?.email}</p>
      <button onClick={doSignOut}>Logout</button>
    </div>
  );
};

export default UserDashboard;
