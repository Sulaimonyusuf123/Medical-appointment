import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Verify() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://medical-appointment-api-uflc.onrender.com/verifyOTP", {
        email,
        otp,
      });

      if (response.data.success) {
        setSuccessMessage("OTP verified successfully!");
        setErrorMessage(""); // Clear any previous error messages
        setTimeout(() => {
          navigate("/login");
        }, 2000); // Redirect after 2 seconds
      } else {
        setErrorMessage("Error verifying OTP: " + response.data.message);
        setSuccessMessage(""); // Clear any previous success messages
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setErrorMessage("Error verifying OTP. Please try again later.");
      setSuccessMessage(""); // Clear any previous success messages
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-md"
      >
        <h1 className="text-2xl text-blue-500 font-bold mb-4">Verify OTP</h1>

        {successMessage && (
          <div className="mb-4 text-green-500 text-sm text-center">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm text-center">
            {errorMessage}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            Verify OTP
          </button>
        </div>
      </form>
    </div>
  );
}

export default Verify;
