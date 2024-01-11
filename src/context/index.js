import React, { createContext, useState } from 'react';

// Create a new context
export const ColorThemeContext = createContext();

// Create a provider component for the context
export const ColorThemeProvider = ({ children }) => {
  const [stringState, setStringState] = useState('teal');
  const updateStringState = newString => {
    setStringState(newString);
  };
  const contextValue = {
    stringState,
    updateStringState,
  };
  return (
    <ColorThemeContext.Provider value={contextValue}>
      {children}
    </ColorThemeContext.Provider>
  );
};
