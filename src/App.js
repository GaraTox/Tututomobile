import React,{ createContext, useState } from 'react';
import ReactSwitch from "react-switch";
import './App.css';
import LaRoute from './Routes';
export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr ==="dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div id={theme}>
      <LaRoute/>
      <div className='Mode'>
      <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
      </div>
    </div>
    </ThemeContext.Provider>

  );
}

export default App;
