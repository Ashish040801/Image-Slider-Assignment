import { useState } from "react";
import SportsSlider from "./Components/SportsSlider";
import "./App.css"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <button onClick={toggleTheme} className="absolute top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      
        <SportsSlider />
      
    </div>
  );
};


export default App;