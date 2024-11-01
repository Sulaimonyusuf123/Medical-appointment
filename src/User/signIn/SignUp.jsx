import React, { useState, useContext } from "react";
import axios from "axios";
import img from "./welcome.png"; // Default profile picture
import image from "../logIN/back.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../ImageProvider";

function SignUp() {
  const { userImage, setUserImage, username, setUsername } =
    useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(userImage || img); // Use context image or default

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(newImage);
      setUserImage(newImage); // Update context image
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "username") {
      setUsername(e.target.value); // Update the username in the context
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3009/registeruser", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        profileImage: userImage, // Optionally send the profile image URL
      });

      if (response.data.success) {
        setSuccessMessage("Registration successful! Please check your email for the OTP.");
        navigate("/verify", { state: { email: formData.email } }); // Pass email to OTP verification page
      } else {
        setErrorMessage("Registration failed: " + response.data.message);
      }
    } catch (error) {
      console.error("There was an error registering:", error.response ? error.response.data : error.message);
      setErrorMessage("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-md"
      >
        <Link to="/Select">
          <div className="flex items-center mb-6">
            <button type="button" className="mr-3">
              <img src={image} alt="Back" className="w-5 h-5" />
            </button>
            <h1 className="text-2xl text-blue-500 font-bold ml-12">
              New Account
            </h1>
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
            className="absolute bottom-0 bg-blue-500 text-white p-2 rounded-full transform translate-x-1/4 translate-y-1/4 transition-colors hover:bg-blue-600"
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
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Display success and error messages */}
        {successMessage && (
          <div className="mt-4 text-green-600 text-center">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 text-red-600 text-center">
            {errorMessage}
          </div>
        )}

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Create Account
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link to="/login" className="text-sm text-blue-500 hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
