import React, { useState } from 'react';
import image from '../image.svg'

const DoctorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState({
    experience: "15 years experience",
    focus: "The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin disorders.",
    name: "Dr. Alexander Bennett, Ph.D.",
    specialization: "Dermato-Genetics",
    rating: 5,
    reviews: 40,
    availability: "Mon-Sat / 9:00AM - 5:00PM",
    profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    careerPath: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    highlights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setDoctorDetails({
      ...doctorDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-2xl font-bold text-blue-600">Doctor Info</h2>
        <div className="flex space-x-2">
          <button className="p-2 bg-blue-100 rounded-full text-blue-600">A-Z</button>
          {/* Add other icons as needed */}
        </div>
      </div>

      {/* Profile Card */}
      <div className="flex items-center bg-blue-50 p-4 rounded-xl mb-4">
        {/* Profile Image */}
        <img
          className="h-24 w-24 rounded-full object-cover"
          src={image} // replace with actual image source
          alt="Doctor"
        />

        {/* Profile Info */}
        <div className="ml-4 w-full">
          <div className="flex justify-between items-center">
            <div className="bg-blue-600 text-white rounded-full px-2 py-1 mb-2 inline-block text-sm">
              {isEditing ? (
                <input
                  type="text"
                  name="experience"
                  value={doctorDetails.experience}
                  onChange={handleChange}
                  className="bg-blue-600 text-white outline-none"
                />
              ) : (
                doctorDetails.experience
              )}
            </div>
            <button
              onClick={handleEditToggle}
              className="text-blue-600 bg-blue-100 px-2 py-1 rounded-lg"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>
          <p className="text-sm text-blue-600">
            {isEditing ? (
              <textarea
                name="focus"
                value={doctorDetails.focus}
                onChange={handleChange}
                className="w-full bg-blue-50 text-blue-600 outline-none resize-none"
              />
            ) : (
              doctorDetails.focus
            )}
          </p>
          <h3 className="text-lg font-semibold mt-2">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={doctorDetails.name}
                onChange={handleChange}
                className="bg-blue-50 text-black outline-none w-full"
              />
            ) : (
              doctorDetails.name
            )}
          </h3>
          <p className="text-gray-600">
            {isEditing ? (
              <input
                type="text"
                name="specialization"
                value={doctorDetails.specialization}
                onChange={handleChange}
                className="bg-blue-50 text-gray-600 outline-none w-full"
              />
            ) : (
              doctorDetails.specialization
            )}
          </p>

          {/* Ratings and Schedule */}
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <span className="text-yellow-400">★ {doctorDetails.rating}</span>
              <span className="ml-2 text-gray-500">({doctorDetails.reviews} reviews)</span>
            </div>
            <p className="ml-4 text-gray-500">
              {isEditing ? (
                <input
                  type="text"
                  name="availability"
                  value={doctorDetails.availability}
                  onChange={handleChange}
                  className="bg-blue-50 text-gray-500 outline-none"
                />
              ) : (
                doctorDetails.availability
              )}
            </p>
          </div>

          {/* Schedule Button */}
          {!isEditing && (
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full">
              Schedule
            </button>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="text-sm text-gray-700 space-y-4">
        <div>
          <h4 className="font-bold text-blue-600">Profile</h4>
          {isEditing ? (
            <textarea
              name="profile"
              value={doctorDetails.profile}
              onChange={handleChange}
              className="w-full bg-white text-black outline-none resize-none"
            />
          ) : (
            <p>{doctorDetails.profile}</p>
          )}
        </div>
        <div>
          <h4 className="font-bold text-blue-600">Career Path</h4>
          {isEditing ? (
            <textarea
              name="careerPath"
              value={doctorDetails.careerPath}
              onChange={handleChange}
              className="w-full bg-white text-black outline-none resize-none"
            />
          ) : (
            <p>{doctorDetails.careerPath}</p>
          )}
        </div>
        <div>
          <h4 className="font-bold text-blue-600">Highlights</h4>
          {isEditing ? (
            <textarea
              name="highlights"
              value={doctorDetails.highlights}
              onChange={handleChange}
              className="w-full bg-white text-black outline-none resize-none"
            />
          ) : (
            <p>{doctorDetails.highlights}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
