import React from 'react';
import './App.css';
import FormSection from './components/FormSection';
import DecorationSection from './components/DecorationSection';
import { useAuth } from './context/authContext';
import { doSignOut } from './firebase/auth';

function App() {
  const { currentUser, userLoggedIn, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        {userLoggedIn ? (
          <div className="welcome-screen">
            <h1>Hey {currentUser?.email}</h1>
            <button onClick={doSignOut}>Logout</button>
          </div>
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
