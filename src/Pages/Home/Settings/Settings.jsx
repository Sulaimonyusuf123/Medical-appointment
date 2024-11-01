import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../../Home/Navbar/Navbar';
import back from "../../../Pages/Home/Doctors/back.svg";
import not from '../../Home/Settings/not.svg';
import go from '../../Home/Settings/go.svg';
import pass from '../../Home/Settings/pass.svg';
import del from '../../Home/Settings/del.svg';
import { useTheme } from './Change/Theme';

const Settings = () => {
  const { themeStyles } = useTheme();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false); // State to control visibility of the confirmation prompt

  // Function to handle account deletion
  const handleDeleteAccount = async () => {
    try {
      const response = await axios.delete('http://localhost:3009/DeleteUserProfile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.data.success) {
        localStorage.removeItem('token');
        alert('Account deleted successfully');
        navigate('/');
      } else {
        alert('Error: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('Server error, could not delete account');
    }
  };

  // Function to show the confirmation prompt
  const promptDelete = () => {
    setShowConfirm(true);
  };

  // Function to cancel the deletion
  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <div className='px-4 min-h-screen' style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.color }}>
      <div>
        <Navbar />
        <div className="flex items-center justify-between w-full">
          <Link to={"/UserProfile"}>
            <button className="">
              <img src={back} alt="Back" className="w-6 h-6 mt-4" />
            </button>
          </Link>
          <h2 className="font-bold text-2xl sm:text-xl flex-grow text-center text-blue-500">
            Settings
          </h2>
          <div className="w-8"></div>
        </div>
      </div>

      <div className='mt-8'>
        <div className=''>
          <Link to='/Notification'>
            <button className='flex'>
              <img src={not} className='mr-12 ml-2' alt="Notification settings"></img>
              <p className='font-semibold text-lg'>Notification settings</p>
              <img src={go} className='ml-32 mt-2' alt="Go"></img>
            </button>
          </Link>
        </div>

        <div className='mt-7'>
          <Link to='/Password'>
            <button className='flex'>
              <img src={pass} className='mr-12 ml-2' alt="Password Manager"></img>
              <p className='font-semibold text-lg'>Password Manager</p>
              <img src={go} className='ml-[135px] mt-2' alt="Go"></img>
            </button>
          </Link>
        </div>

        <div className='mt-7'>
          <Link to='/Change'>
            <button className='flex'>
              <img src={del} className='mr-12 ml-2' alt="Change theme"></img>
              <p className='font-semibold text-lg'>Change theme</p>
              <img src={go} className='ml-[167px] mt-2' alt="Go"></img>
            </button>
          </Link>
        </div>

        <div className='mt-7'>
          <button className='flex' onClick={promptDelete}>
            <img src={del} className='mr-12 ml-2' alt="Delete Account"></img>
            <p className='font-semibold text-lg'>Delete Account</p>
            <img src={go} className='ml-[162px] mt-2' alt="Go"></img>
          </button>
        </div>

        {showConfirm && (
          <div className="mt-10 p-4 bg-gray-100 rounded shadow w-[300px] h-[150px] mx-auto">
            <p className='text-center'>Permanently delete your Account?</p>
            <div className='flex justify-center gap-4 mt-4'>
              <button onClick={handleDeleteAccount} className="px-4 py-2 bg-red-600 text-white w-24 rounded">
                Yes
              </button>
              <button onClick={cancelDelete} className="px-4 py-2 bg-gray-300 w-24 rounded">
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
