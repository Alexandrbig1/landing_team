import { createContext, useContext, useState } from "react";

const Theme = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeContext = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("theme") === "light" ? true : false;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Theme.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        toggleMenu,
        menuOpen,
      }}
    >
      {children}
    </Theme.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(Theme);
  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
};
