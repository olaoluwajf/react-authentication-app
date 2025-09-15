import React from 'react';
import './App.css';
import FormSection from './components/FormSection';
import DecorationSection from './components/DecorationSection';

function App() {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <FormSection />
        <DecorationSection />
      </div>
    </div>
  );
}

export default App;