import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../AppContext.jsx';
import { Check, X } from 'lucide-react';
import styles from './LoginRegisterForm.module.css';

const NumericKeyboardInput = ({ value, onChange, showMaskedPassword = false, onPasswordComplete, onClear }) => {
  const [displayedPassword, setDisplayedPassword] = useState('');
  const MAX_PASSWORD_LENGTH = 4;

  // Sincronizar displayedPassword con el valor real
  useEffect(() => {
    setDisplayedPassword('*'.repeat(value.length));
  }, [value]);

  const handleKeyClick = (num, e) => {
    e.preventDefault();
    if (value.length < MAX_PASSWORD_LENGTH) {
      const newValue = value + num;
      onChange(newValue);
      
      if (newValue.length === MAX_PASSWORD_LENGTH && onPasswordComplete) {
        onPasswordComplete();
      }
    }
  };

  const handleBackspace = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      const newValue = value.slice(0, -1);
      onChange(newValue);
    }
  };

  const handleClearPassword = (e) => {
    e.preventDefault();
    onChange('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className={styles.numericKeyboardInput}>
      <div className={styles.passwordDisplay}>
        {displayedPassword}
      </div>
      <div className={styles.keyboard}>
        <div className={styles.row}>
          <button className={styles.key} onClick={(e) => handleKeyClick('1', e)}>1</button>
          <button className={styles.key} onClick={(e) => handleKeyClick('2', e)}>2</button>
          <button className={styles.key} onClick={(e) => handleKeyClick('3', e)}>3</button>
        </div>
        <div className={styles.row}>
          <button className={styles.key} onClick={(e) => handleKeyClick('4', e)}>4</button>
          <button className={styles.key} onClick={(e) => handleKeyClick('5', e)}>5</button>
          <button className={styles.key} onClick={(e) => handleKeyClick('6', e)}>6</button>
        </div>
        <div className={styles.row}>
          <button className={styles.key} onClick={(e) => handleKeyClick('7', e)}>7</button>
          <button className={styles.key} onClick={(e) => handleKeyClick('8', e)}>8</button>
          <button className={styles.key} onClick={(e) => handleKeyClick('9', e)}>9</button>
        </div>
        <div className={styles.row}>
          <button className={styles.key} onClick={handleBackspace}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z" />
            </svg>
          </button>
          <button className={`${styles.key} ${styles.zero}`} onClick={(e) => handleKeyClick('0', e)}>0</button>
          <button className={`${styles.key} ${styles.clear}`} onClick={handleClearPassword}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

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

  const handlePasswordComplete = () => {
    if (!isLoggingIn) {
      setShowPasswordRepeat(true);
      setKeyboardKey(prev => prev + 1);
    } else {
      setShowPasswordLabel(false);
    }
  };

  const handleClear = () => {
    if (!isLoggingIn) {
      // Reset both passwords and return to initial state for registration
      setPassword('');
      setPasswordRepeat('');
      setShowPasswordRepeat(false);
      setShowPasswordLabel(true);
      setKeyboardKey(prev => prev + 1);
    } else {
      // Just clear the password for login
      setPassword('');
      setShowPasswordLabel(true);
    }
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    if (isLoggingIn && newPassword.length !== 4) {
      setShowPasswordLabel(true);
    }
  };

  const handleRepeatPasswordChange = (newPassword) => {
    setPasswordRepeat(newPassword);
  };

  const getPasswordValidationMessage = () => {
    if (!isLoggingIn && showPasswordRepeat) {
      if (passwordRepeat.length === 4) {
        if (password === passwordRepeat) {
          return (
            <div className={styles.validationMessage}>
              <span className={styles.validText}>Contraseña válida</span>
              <Check className={styles.validIcon} size={20} />
            </div>
          );
        } else {
          return (
            <div className={styles.validationMessage}>
              <span className={styles.errorText}>Las contraseñas no coinciden</span>
              <X className={styles.errorIcon} size={20} />
            </div>
          );
        }
      }
      return "Repite tu contraseña";
    }
    return showPasswordLabel ? "Teclea tu contraseña" : "";
  };

  const isButtonDisabled = () => {
    if (isLoggingIn) {
      return password.length !== 4;
    } else {
      return password.length !== 4 || passwordRepeat.length !== 4 || password !== passwordRepeat;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isButtonDisabled()) {
      console.log('Submitted:', { username, password, passwordRepeat });
    }
  };

  const toggleForm = () => {
    setIsLoggingIn((prevState) => !prevState);
    setUsername('');
    setPassword('');
    setPasswordRepeat('');
    setShowPasswordRepeat(false);
    setShowPasswordLabel(true);
    setKeyboardKey(prev => prev + 1);
  };

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
            {getPasswordValidationMessage()}
          </label>
          <NumericKeyboardInput
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