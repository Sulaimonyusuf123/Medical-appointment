import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { userId, token } = useParams(); // Ensure userId and token are extracted correctly
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`https://medical-appointment-api-uflc.onrender.com/resetPassword/${userId}/${token}`, {
        newPassword: password, // Make sure to use the same field name as expected by the backend
      });
      setMessage(response.data.message);

      if (response.data.success) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      setMessage("Error resetting password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-md">
        <h1 className="text-2xl text-blue-500 font-bold mb-4">Reset Password</h1>
        <div>
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mt-6">
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
            Reset Password
          </button>
        </div>
        {message && <p className="text-green-500 text-sm mt-4">{message}</p>}
      </form>
    </div>
  );
}

export default ResetPassword;
