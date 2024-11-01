import React, { useState } from "react";
import img from "./welcome.png"; // Default profile picture
import image from "../Doctors/back.svg"; // Back button image
import { Link } from "react-router-dom";

function DSignUp() {
  const [selectedImage, setSelectedImage] = useState(img);

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-md"
      >
        <Link to='/DSelect'>
          <div className="flex items-center mb-6">
            <button type="button" className="mr-3">
              <img src={image} alt="Back" className="w-5 h-5" />
            </button>
            <h1 className="text-2xl text-blue-500 font-bold ml-12">New Account</h1>
          </div>
        </Link>

        <div className="relative flex items-center justify-center mt-4">
  <img
    src={selectedImage}
    className="w-24 h-24 rounded-full object-cover"
    alt="Profile"
  />
  <button
    type="button"
    className="absolute bottom-0  bg-blue-500 text-white p-2 rounded-full transform translate-x-1/4 translate-y-1/4 transition-colors hover:bg-blue-600"
    onClick={handleImageClick}
  >
    <img src={img} alt="Edit" className="w-5 h-5" />
  </button>
  <input
    id="fileInput"
    type="file"
    accept="image/*"
    style={{ display: "none" }}
    onChange={handleImageChange}
  />
</div>


        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
        <div className="mt-6">
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Create Account
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link to="/login" className="text-sm text-blue-500 hover:underline">Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default DSignUp;
