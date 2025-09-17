import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { doSignInWithEmailAndPassword, doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../context/authContext';

function FormSection() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSignUp, setIsSignUp] = useState(true);
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState('');

  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
    setFirebaseError('');
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setFirebaseError('');

    try {
      if (isSignUp) {
        // create a new user
        await doCreateUserWithEmailAndPassword(data.email, data.password);
        // optionally store first/last name in Firestore later
      } else {
        // sign in existing user
        await doSignInWithEmailAndPassword(data.email, data.password);
      }
      // success (redirect or show message)
    } catch (err) {
      setFirebaseError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-section left">
      <div className="logo">
        <div className="decoration-logo">
          <div className="yellow-logo"></div>
          <div className="green-logo"></div>
        </div>
        Push
      </div>

      <div className="title">{isSignUp ? 'Sign Up for Push' : 'Login to Push'}</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {isSignUp && (
          <div className="input-group-1">
            <div className="name-inputs">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && <p className="error">{errors.firstName.message}</p>}
            </div>
            <div className="name-inputs">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && <p className="error">{errors.lastName.message}</p>}
            </div>
          </div>
        )}

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Invalid email format',
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="input-group password-input">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        {firebaseError && <p className="error">{firebaseError}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>

      <div className="terms">
        {isSignUp
          ? 'By creating an account, you agree with our Terms of Service and Privacy Policy.'
          : ''}
      </div>

      <div className="login-link">
        {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
        <a href="#" onClick={toggleForm}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </a>
      </div>
    </div>
  );
}

export default FormSection;
