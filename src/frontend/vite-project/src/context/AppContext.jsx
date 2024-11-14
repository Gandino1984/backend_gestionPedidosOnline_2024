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
//   const [example, setExample] = useState(null);


  // Values to be shared across components
  const value = {
    // example,
    // setExample,
    
    // Add any other shared functions here
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};