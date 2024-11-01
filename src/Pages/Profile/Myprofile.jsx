import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import { UserContext } from "../../User/ImageProvider";
import img from '../../Pages/Profile/logo.svg';
import {
  FaUser,
  FaLock,
  FaChartBar,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";

const MyProfile = () => {
  const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);
  const { userImage, setUserImage, username, setUsername } =
    useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(userImage || img); 
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutPrompt(true);
  };

  const handleLogout = () => {
    navigate("/Select");
  };

  const handleCancel = () => {
    setShowLogoutPrompt(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="px-6 sm:px-5 font-general mt-4">
      <Navbar />
      <div>
        <p className="font-general text-blue-500 font-bold text-2xl sm:text-[25px] text-center">
          Profile
        </p>
      </div>

      <div className="relative inline-block mt-4 ml-32">
  <img
    src={selectedImage}
    className="w-24 h-24 rounded-full object-cover"
    alt="Profile"
  />
  <button
    type="button"
    className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full transform translate-x-1/4 translate-y-1/4 transition-colors hover:bg-blue-600"
    onClick={handleButtonClick}
  >
    <img src={img} alt="Edit" className="w-5 h-5" />
  </button>
  <input
    id="fileInput"
    type="file"
    accept="image/*"
    className="hidden"
    onChange={handleImageChange}
  />
</div>

      <h2 className="text-lg sm:text-xl text-center mt-2">
          <p className="text-lg md:text-xl">{username || 'sulaimon yusuf'}</p>
        </h2>
      <div className="bg-white mt-4 rounded-lg border-2  w-full max-w-md ">
        <Link className="no-underline text-black" to="/MyProfile">
          <div className="flex items-center justify-between p-5 sm:p-6 border-b">
            <div className="flex items-center ">
              <FaUser className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Profile</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <Link className="no-underline text-black" to="/ChangePassword">
          <div className="flex items-center justify-between p-5 sm:p-6 border-b">
            <div className="flex items-center">
              <FaLock className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Favorites</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <Link className="no-underline text-black" to="/Activities">
          <div className="flex items-center justify-between p-5 sm:p-6 border-b">
            <div className="flex items-center">
              <FaChartBar className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Payments Method</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <Link className="no-underline text-black" to="/Help">
          <div className="flex items-center justify-between p-6 sm:p-6 border-b">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Privacy Policy</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <Link className="no-underline text-black" to="/Settings">
          <div className="flex items-center justify-between p-5 sm:p-6 border-b">
            <div className="flex items-center">
              <FaCog className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Settings</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <Link className="no-underline text-black" to="/Settings">
          <div className="flex items-center justify-between p-5 sm:p-6 border-b">
            <div className="flex items-center">
              <FaCog className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Help</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <div className="no-underline text-black">
          <div
            className="flex items-center justify-between p-5 sm:p-6"
            onClick={handleLogoutClick}
          >
            <div className="flex items-center">
              <FaSignOutAlt className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Log out</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </div>
      </div>
      {showLogoutPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[300px] sm:w-[350px]">
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">
              Are you sure you want to log out?
            </h2>
            <p className="mb-4 text-center text-sm sm:text-base">
              This will automatically log you out
            </p>
            <div className="flex justify-center gap-2 sm:gap-4">
              <button
                className="w-[100px] sm:w-[120px] p-2 text-black rounded-xl h-[45px] sm:h-[55px] font-bold border-2 hover:bg-black hover:text-white transition-colors"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="w-[100px] sm:w-[120px] p-2 bg-black text-white border-2 rounded-xl hover:bg-white hover:text-black h-[45px] sm:h-[55px] transition-colors"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="navbar mb-24">
        <Navbar />
      </div>
    </div>
  );
};

export default MyProfile;
