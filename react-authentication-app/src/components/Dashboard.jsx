import React from 'react';
import { useAuth } from '../context/authContext';
import { getAuth, signOut } from 'firebase/auth';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const auth = getAuth();

  const handleLogout = async () => {
    await signOut(auth);

  };

  return (
    <div className="form-section">
      <div className="logo">
        <div className="decoration-logo">
          <div className="yellow-logo"></div>
          <div className="green-logo"></div>
        </div>
        Push
      </div>

      <div className="title">Hey {currentUser?.email}</div>

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
