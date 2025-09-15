import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormSection() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };

  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
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

        {/* Password Input */}
        <div className="input-group password-input">
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />

          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? 'Hide Password' : 'Show Password'}
          >
            {showPassword ? (
              // Eye-off icon (hide)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18M9.88 9.88A3 3 0 0112 9c1.657 0 3 1.343 3 3 0 .477-.112.927-.31 1.326M6.1 6.1A10.478 10.478 0 003 12s3 7 9 7c1.98 0 3.79-.586 5.27-1.59M14.12 14.12A3 3 0 0112 15c-1.657 0-3-1.343-3-3 0-.477.112-.927.31-1.326"
                />
              </svg>
            ) : (
              // Eye icon (show)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </span>

          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        {isSignUp ? (
          <button type="submit">Sign Up</button>
        ) : (
          <button type="submit">Login</button>
        )}
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
