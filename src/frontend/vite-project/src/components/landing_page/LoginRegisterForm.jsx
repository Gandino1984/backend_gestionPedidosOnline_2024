import React, { useState } from 'react';
import { useAppContext } from '../../AppContext.jsx';
import NumericKeyboardInput from './NumericKeyboard.jsx';

const LoginRegisterForm = () => {
  const { 
    isLoggingIn,
    setIsLoggingIn,
    username,
    setUsername,
    password,
    setPassword,
    passwordRepeat,
    setPasswordRepeat
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login or registration logic here
    console.log('Submitted:', { username, password, passwordRepeat });
  };

  const toggleForm = () => {
    setIsLoggingIn((prevState) => !prevState);
    setUsername('');
    setPassword('');
    setPasswordRepeat('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">
        {isLoggingIn ? 'INICIA SESIÓN' : 'CREA TU USUARIO'}
      </h2>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-field">
          <label htmlFor="username">¿Cuál es tu nombre?</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Teclea tu contraseña</label>
          <NumericKeyboardInput
            value={password}
            onChange={setPassword}
            showMaskedPassword
          />
        </div>
       
        <div className="form-actions">
          <button type="submit">
            {isLoggingIn ? 'Entrar' : 'Crear cuenta'}
          </button>
          <button
            type="button"
            className="toggle-button"
            onClick={toggleForm}
          >
            {isLoggingIn
              ? "¿No tienes cuenta?"
              : "¿Ya tienes cuenta?"}
          </button>
        </div>  
      </form>
    </div>
  );
};

export default LoginRegisterForm;