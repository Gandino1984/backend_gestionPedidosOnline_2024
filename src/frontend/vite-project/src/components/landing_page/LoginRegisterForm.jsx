import React, { useState } from 'react';
import { useAppContext } from '../../AppContext.jsx';

const LoginRegisterForm = () => {
    const { 
        isLoggingIn,
        setIsLoggingIn,
        username,
        setUsername,
        password,
        setPassword
    } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login or registration logic here
    console.log('Submitted:', { username, password });
  };

  const toggleForm = () => {
    setIsLoggingIn((prevState) => !prevState);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">
        {isLoggingIn ? 'Login' : 'Register'}
      </h2>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">
            {isLoggingIn ? 'Login' : 'Register'}
          </button>
          <button
            type="button"
            className="toggle-button"
            onClick={toggleForm}
          >
            {isLoggingIn
              ? "Don't have an account? Register"
              : 'Already have an account? Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginRegisterForm;