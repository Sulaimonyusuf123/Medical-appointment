import React from "react";
import image from "../Doctors/back.svg";
import { Link } from "react-router-dom";
import finger from "../Doctors/finger.svg";

function Login() {


  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <form 
        onSubmit={handleSubmit} 
        className="w-[350px] max-w-md bg-white p-6 rounded-2xl shadow-lg"
      >
      <Link to='/DSelect'>

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
            placeholder="Enter email"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-6">
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Log In
          </button>
        </div>

        <div className="text-center text-gray-500 mb-6">Or</div>

        <div className="flex justify-center mb-6">
          <button type="button" className="bg-gray-100 p-3 rounded-full shadow-md hover:bg-gray-200 transition">
            <img src={finger} alt="Fingerprint Login" className="w-8 h-8" />
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <Link to="/DSignUp" className="text-sm text-blue-500 ">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
