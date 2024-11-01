import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Doctors/logo.svg';
import back from '../Doctors/back.svg';

const DSelect = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { state: { startSlide: 1 } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Button */}
      <div className="p-4">
        <button className="mt-2" onClick={handleBack}>
          <img src={back} alt="Back" className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center items-center px-4 text-center">
        <img src={logo} className="w-60 h-24 sm:w-72 sm:h-32" alt="Logo" />
        <div className="mt-4">
          <h1 className="text-3xl sm:text-4xl font-thin text-blue-500">
            Skin <br /> Flirt
          </h1>
          <p className="text-lg sm:text-xl">Dermatological center</p>
          <p className="mt-4 break-words text-blue-500">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 w-full max-w-xs space-y-4">
          <Link to="/DsignUp">
            <button className="w-full text-center bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors">
              Sign Up
            </button>
          </Link>
          <Link to="/DLogin">
            <button className="w-full text-center mt-8 bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DSelect;
