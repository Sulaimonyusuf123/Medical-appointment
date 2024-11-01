import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme } from '../Change/Theme'; // Adjust path as needed
import back from '../../../../Pages/Home/Doctors/back.svg'; // Adjust path as needed

const Password = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const [success, setSuccess] = useState(''); // State for success messages
  const { themeStyles } = useTheme();

  const handleClick = async () => {
    setError(''); // Reset error message
    setSuccess(''); // Reset success message

    if (!oldPassword || !newPassword || !confirmNewPassword) {
      setError('All fields are required');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError('New passwords do not match');
      return;
    }

    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage

      if (!token) {
        setError('No authentication token found');
        return;
      }

      const response = await axios.put(
        'http://localhost:3009/change-password',
        { currentPassword: oldPassword, newPassword }, // Ensure these field names match your backend
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Send the token in Authorization header
          },
        }
      );

      if (response.status === 200) {
        setIsVisible(true);
        setOldPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        setSuccess('Password changed successfully');
      } else {
        setError(response.data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error during password change:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'An error occurred while updating the password');
    }
  };

  return (
    <div
      className="min-h-screen font-general px-5 relative"
      style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.color }}
    >
      <div className="flex items-center justify-between w-full">
        <Link to={"/Settings"}>
          <button>
            <img src={back} alt="Back" className="w-6 h-6 mt-4" />
          </button>
        </Link>
        <h2 className="font-bold text-lg sm:text-xl flex-grow text-center">
          Change Password
        </h2>
        <div className="w-8"></div>
      </div>

      <p className="text-sm mt-2 text-[#5F5F63]">
        Please enter your current password and your new password below. Ensure the new password is at least 6 characters long.
      </p>

      <div className="mt-8 sm:mt-16 w-full max-w-md mx-auto px-1">
        {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}
        {success && <div className="bg-green-500 text-white p-2 rounded mb-4">{success}</div>}
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="p-4 w-full rounded-[15px] border border-black mb-4 outline-none"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="p-4 w-full rounded-[15px] border border-black mb-4 outline-none"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className="p-4 w-full rounded-[15px] border border-black outline-none"
        />
      </div>

      <div className="mt-36 sm:mt-24 p-4 w-full rounded-[15px] bg-blue-500 border border-white">
        <button
          className="block mx-auto text-white text-lg sm:text-xl"
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Password;
