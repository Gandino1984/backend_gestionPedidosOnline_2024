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
  // Define your state variables here
//   const [user, setUser] = useState(null);
//   const [theme, setTheme] = useState('light');
//   const [isLoading, setIsLoading] = useState(false);

  // Values to be shared across components
  const value = {
    // State
    // user,
    // theme,
    // isLoading,
    // // State setters
    // setUser,
    // setTheme,
    // setIsLoading,
    // Add any other shared functions here
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};