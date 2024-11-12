"use client";

import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("#4DB4D0");
  const colors = ["#4DB4D0", "#FF7121", "#D43796", "#7F4AFE", "#B4E348"];

  // Function to set a random color as themeColor
  const setRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setThemeColor(randomColor);
  };

  const values = {
    colors,
    themeColor,
    setRandomColor,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppProvider);
