import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import finger from '../Admin/finger.svg'

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3009/loginAdmin', {
        username,
        password,
      }, { withCredentials: true });

      console.log(response.data);
      
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-blue-500'>
      <form onSubmit={handleLogin} className='w-full max-w-xs p-6 bg-white rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold text-center text-blue-500 mb-6'>Admin Login</h2>
        <div className='mb-4'>
          <label htmlFor='username' className='block text-sm font-medium text-gray-700'>Username</label>
          <input
            type='text'
            id='username'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
        <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-green-600'>
          Login
        </button>
        <div className="text-center text-gray-500 mb-2 mt-4">Or</div>

<div className="flex justify-center mb-6">
  <button type="button" className="bg-gray-100 p-3 rounded-full shadow-md hover:bg-gray-200 transition">
    <img src={finger} alt="Fingerprint Login" className="w-8 h-8" />
  </button>
</div>
        <div className="flex justify-center items-center mt-4">
          <p className="text-sm">Don't have an account?</p>
          <Link to="/SignUpAdmin" className="text-sm text-blue-500 ml-2">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginAdmin;
