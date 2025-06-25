import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="text-end mb-3">
      <button className="btn btn-secondary" onClick={toggleTheme}>
        Switch to {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
      </button>
    </div>
  );
};

export default ThemeToggler;
