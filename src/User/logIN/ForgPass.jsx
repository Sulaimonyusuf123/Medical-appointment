import React, { useState } from "react";
import axios from "axios";

function ForgPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3009/forgotPassword", {
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error sending password reset email");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-md">
        <h1 className="text-2xl text-blue-500 font-bold mb-4">Forgot Password</h1>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mt-6">
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
            Send Reset Link
          </button>
        </div>
        {message && <p className="text-green-500 text-sm mt-4">{message}</p>}
      </form>
    </div>
  );
}

export default ForgPass;
