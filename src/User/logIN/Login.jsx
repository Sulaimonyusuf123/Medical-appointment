import React, { useState } from "react";
import axios from "axios";
import image from "../logIN/back.svg";
import { Link, useNavigate } from "react-router-dom";
import finger from "../logIN/finger.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend URL
      const response = await axios.post("https://medical-appointment-api-uflc.onrender.com/loginuser", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/UserProfile"); // Navigate to the user profile page after successful login
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <form 
        onSubmit={handleSubmit} 
        className="w-[350px] max-w-md bg-white p-6 rounded-2xl shadow-lg"
      >
        <Link to='/Select'>
          <div className="flex items-center mb-6">
            <button type="button" className="mr-2">
              <img src={image} alt="Back" className="w-4 h-4 mt-2" />
            </button>
            <h1 className="text-2xl text-blue-500 font-bold ml-[90px]">Login</h1>
          </div>
        </Link>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="mb-6">
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Log In
          </button>
        </div>
<div className="text-center mb-4">
<Link to='/ForgPass'>
<botton>forgot password?</botton>
</Link>
 
</div>
        <div className="text-center text-gray-500 mb-6">Or</div>

        <div className="flex justify-center mb-6">
          <button type="button" className="bg-gray-100 p-3 rounded-full shadow-md hover:bg-gray-200 transition">
            <img src={finger} alt="Fingerprint Login" className="w-8 h-8" />
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <Link to="/SignUp" className="text-sm text-blue-500 ">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
