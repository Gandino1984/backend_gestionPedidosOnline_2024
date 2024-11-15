// src/context/AppContext.jsx
import { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

// Provider component
export const AppContextProvider = ({ children }) => {
    const [isLoggingIn, setIsLoggingIn] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');


  // Values to be shared across components
  const value = {
    isLoggingIn,
    setIsLoggingIn,
    username,
    setUsername,
    password,
    setPassword,
    passwordRepeat,
    setPasswordRepeat
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};