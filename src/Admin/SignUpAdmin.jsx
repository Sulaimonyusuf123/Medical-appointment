import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUpAdmin = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3009/registerAdmin', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setSuccess(response.data.message);
      setError(null); // Clear error if request succeeds
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess(null); // Clear success message if request fails
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <form onSubmit={handleSubmit} className="w-[350px] max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-lg text-center text-blue-500 mb-6">Admin Registration</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
          Create Account
        </button>

        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-4 text-center">{success}</p>}
        
        <div className="flex justify-center items-center mt-4">
          <p className="text-sm">Already have an account?</p>
          <Link to="/LoginAdmin" className="text-sm text-blue-500 ml-2">Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpAdmin;
