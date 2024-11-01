import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../Navbar/one.svg';

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <nav className="w-full max-w-[390px] mx-auto h-[60px]  rounded-full bg-blue-600 border-t border-blue-700">
        <ul className="flex justify-around items-center h-full">
          <li>
            <Link to="/Myprofile" className="flex flex-col items-center text-white">
              <button className="p-2">
                <img src={HomeIcon} alt="User" className="h-6 w-6" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Chat" className="flex flex-col items-center text-white">
              <button className="p-2">
                <img src={HomeIcon} alt="Chat" className="h-6 w-6" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/UserProfile" className="flex flex-col items-center text-white">
              <button className="p-2">
                <img src={HomeIcon} alt="UserProfile" className="h-6 w-6" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Appointment" className="flex flex-col items-center text-white">
              <button className="p-2">
                <img src={HomeIcon} alt="Appointments" className="h-6 w-6" />
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
