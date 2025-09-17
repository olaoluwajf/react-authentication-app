import React from 'react';
import './App.css';
import FormSection from './components/FormSection';
import DecorationSection from './components/DecorationSection';
import { useAuth } from './context/authContext';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  const { userLoggedIn, role, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="auth-container">
      <div className="auth-form">
        {userLoggedIn ? (
          role === "admin" ? (
            <AdminDashboard />
          ) : (
            <UserDashboard />
          )
        ) : (
          <>
            <FormSection />
            <DecorationSection />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
