import React, { createContext, useState } from 'react';

// Create a Context
export const UserContext = createContext();

// Create a Provider Component
export const UserProvider = ({ children }) => {
  const [userImage, setUserImage] = useState(''); // Default image
  const [username, setUsername] = useState("");


  return (
    <UserContext.Provider value={{ userImage, setUserImage, username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
