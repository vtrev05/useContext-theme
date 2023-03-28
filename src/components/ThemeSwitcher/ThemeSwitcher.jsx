import React, { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div>
      <button className="theme-button" type="button" onClick={toggleTheme}>
        {theme === "dark" ? "🌞" : "🌚"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
