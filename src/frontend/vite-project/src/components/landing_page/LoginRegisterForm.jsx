import React, { useState } from 'react';
import { useAppContext } from '../../AppContext.jsx';
import { useLoginRegisterForm } from './loginRegisterFormFunctions';
import { getPasswordValidationMessage } from './validationFunctions';
import NumericKeyboard from './NumericKeyboard.jsx';
import styles from './LoginRegisterForm.module.css';

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

  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [keyboardKey, setKeyboardKey] = useState(0);
  const [showPasswordLabel, setShowPasswordLabel] = useState(true);

  const {
    handlePasswordComplete,
    handleClear,
    handlePasswordChange,
    handleRepeatPasswordChange,
    isButtonDisabled,
    handleSubmit,
    toggleForm
  } = useLoginRegisterForm(
    isLoggingIn,
    setIsLoggingIn,
    setUsername,
    setPassword,
    setPasswordRepeat,
    password,
    passwordRepeat,
    setShowPasswordRepeat,
    setShowPasswordLabel,
    setKeyboardKey
  );

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>
        {isLoggingIn ? 'INICIA SESIÓN' : 'CREA TU USUARIO'}
      </h2>
      <form onSubmit={handleSubmit} className={styles.formContent}>
        <div className={styles.formField}>
          <label htmlFor="username">¿Cuál es tu nombre?</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="password" className={styles.passwordLabel}>
            {getPasswordValidationMessage(isLoggingIn, showPasswordRepeat, passwordRepeat, password, showPasswordLabel)}
          </label>
          <NumericKeyboard
            key={keyboardKey}
            value={!isLoggingIn && showPasswordRepeat ? passwordRepeat : password}
            onChange={!isLoggingIn && showPasswordRepeat ? handleRepeatPasswordChange : handlePasswordChange}
            showMaskedPassword
            onPasswordComplete={handlePasswordComplete}
            onClear={handleClear}
          />
        </div>
       
        <div className={styles.formActions}>
          <button 
            type="submit" 
            className={`${styles.submitButton} ${isButtonDisabled() ? styles.inactive : styles.active}`}
            disabled={isButtonDisabled()}
          >
            {isLoggingIn ? 'Entrar' : 'Crear cuenta'}
          </button>
          <button
            type="button"
            className={styles.toggleButton}
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