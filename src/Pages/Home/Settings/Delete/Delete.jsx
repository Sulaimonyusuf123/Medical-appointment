// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Delete() {
//   const navigate = useNavigate();

//   const handleDeleteAccount = async () => {
//     try {
//       const response = await axios.delete('http://localhost:3009/deleteAccount', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Assume you store the JWT in localStorage
//         },
//       });

//       if (response.data.success) {
//         // Optionally clear any stored tokens or user data
//         localStorage.removeItem('token');
//         alert('Account deleted successfully');
//         navigate('/'); // Redirect to the homepage or login page after deletion
//       } else {
//         alert('Error: ' + response.data.message);
//       }
//     } catch (error) {
//       console.error('Error deleting account:', error);
//       alert('Server error, could not delete account');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleDeleteAccount} className="bg-red-500 text-white py-2 px-4 rounded">
//         Delete Account
//       </button>
//     </div>
//   );
// }

// export default DeleteAcc;
import React from 'react'

const Delete = () => {
  return (
    <div>
      
    </div>
  )
}

export default Delete

