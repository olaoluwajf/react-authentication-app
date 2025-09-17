import React from "react";
import { doSignOut } from "../firebase/auth";
import { useAuth } from "../context/authContext";

const AdminDashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="welcome-screen">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {currentUser?.email}</p>
      <button onClick={doSignOut}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
