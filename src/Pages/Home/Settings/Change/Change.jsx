import React from 'react';
import back from "../../../Home/Doctors/back.svg";
import { Link } from 'react-router-dom';
import Navbar from '../../../../Home/Navbar/Navbar';
import { useTheme } from '../../../../Pages/Home/Settings/Change/Theme';
import themes from '../../../../Pages/Home/Settings/Change/Theme.json'; 

const Change = () => {
  const { changeTheme, themeStyles } = useTheme();

  // Determine the current theme based on background color
  const currentTheme = Object.keys(themes).find(themeName =>
    themes[themeName].backgroundColor === themeStyles.backgroundColor
  ) || 'light';

  const handleThemeChange = (theme) => {
    changeTheme(theme);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeStyles.backgroundColor }}>
      <div className='px-4'>
        <Navbar />
        <div className="flex items-center justify-between mb-6">
          <Link to="/Settings">
            <button className="mt-6">
              <img src={back} alt="Back" className="w-6 h-6 " />
            </button>
          </Link>
          <h2 className="font-bold text-2xl sm:text-xl text-blue-500 flex-grow text-center">
            Change Theme
          </h2>
        </div>
        <div className="space-y-4">
          {Object.keys(themes).map(themeName => (
            <div key={themeName} className="flex items-center justify-between text-lg sm:text-base">
              <p className="capitalize">{themeName}</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={currentTheme === themeName}
                  onChange={() => handleThemeChange(currentTheme === themeName ? 'light' : themeName)}
                />
                <div
                  className={`w-11 h-6 flex items-center bg-gray-200 rounded-full p-1 transition-all duration-300 ease-in-out ${currentTheme === themeName ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${currentTheme === themeName ? 'translate-x-5' : 'translate-x-1'}`}
                  />
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Change;
