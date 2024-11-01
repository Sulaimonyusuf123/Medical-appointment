import React, { useContext } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import { Link } from "react-router-dom";
import alerm from "../Home/Alerm/alerm.svg";
import settings from "../Home/Settings/settings.svg";
import favorites from "../Home/Favorites/favorites.svg";
import vector from "../Home/vector.svg";
import filter from "../Home/SearchFilter/filter.svg";
import search from "../Home/SearchFilter/search.svg";
import calendarData from "../Home/Data.json"; 
import doctorsData from "../Home/Davailable.json"; 
import { UserContext } from "../../User/ImageProvider";
import img from '../Home/img.svg'
import { useTheme } from "./Settings/Change/Theme";

const ProfileUser = () => {
  const { userImage } = useContext(UserContext); // Access userImage from context
  const { days, appointments, selectedDate } = calendarData;
  const { username } = useContext(UserContext);
  const { themeStyles } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.color }}>
      <Navbar />
      <div className="mb-12" style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.color }}>
        <div className="flex px-4 py-4">
          <div className="flex items-center space-x-2">
            <img src={userImage || img} alt="Profile" className="w-16 h-16 rounded-full" />
            <div>
              <p className="text-blue-500 text-sm md:text-base">
                Hi, Welcome back
              </p>
              <p className="text-lg md:text-xl">{username || 'sulaimon yusuf'}</p>
            </div>
          </div>

          <div className="flex space-x-2 ml-28">
            <Link to="/Alerm">
              <button className="p-2">
                <img src={alerm} alt="Alerm" className="w-4 h-8" />
              </button>
            </Link>
            <Link to="/Settings">
              <button className="p-2">
                <img src={settings} alt="Settings" className="w-4 h-8" />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex px-4 py-4 ml-2 mr-2 max-w-x">
          <Link to="/Alldoctors">
            <button className="">
              <img src={vector} alt="Vector" className="w-7 ml-2" />
            </button>
            <p>Doctors</p>
          </Link>
          <Link to="/favorites" className="mt-[1px]">
            <button className="">
              <img src={favorites} alt="Favorites" className="w-9 ml-2" />
            </button>
            <p className="ml-2">Favorites</p>
          </Link>

          <div className="flex items-center py-6 bg-blue-200 rounded-full w-80 h-2 mt-3 ml-2">
            <button className="p-1">
              <img src={filter} alt="Filter" className="w-8 h-6" />
            </button>
            <input
              type="text"
              className="w-32 p-1 h-6 rounded-full bg-blue-200 border border-blue-200 outline-none"
            />
            <button className="p-1">
              <img src={search} alt="Search" className="w-8 h-6 ml-12" />
            </button>
          </div>
        </div>

        <div className="p-4 bg-blue-200 max-w-md mx-auto">
          <div className="flex flex-wrap justify-between mb-4">
            {days.map((day) => (
              <div
                key={day.date}
                className={`flex flex-col items-center justify-center w-12 h-16 mb-2 rounded-2xl ${
                  day.isToday
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600"
                }`}
              >
                <span className="text-lg font-bold">{day.date}</span>
                <span className="text-xs">{day.day}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg">
            <div className="text-blue-600 text-sm mb-2">
              {selectedDate} Wednesday - Today
            </div>
            {appointments.map((appointment, index) => (
              <div
                key={index}
                className="bg-blue-100 p-3 rounded-lg shadow-sm border border-blue-200 mb-2"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-blue-800 font-semibold text-sm">
                    {appointment.doctor}
                  </h3>
                  <div className="flex items-center">
                    <img src={filter} alt="Action" className="w-4" />
                    <button className="text-blue-500 hover:text-blue-700 focus:outline-none ml-4">
                      &#10005;
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  {appointment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-gray-100 max-w-md mx-auto rounded-lg " style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.color }}>
          <h2 className="text-lg font-semibold mb-4 text-blue-800">
            Available Doctors
          </h2>
          {doctorsData.map((doctor) => (
            <div
              key={doctor.id}
              className="flex items-center mb-4 p-2 bg-blue-100 rounded-lg shadow"
            >
              <img
                src={doctor.image}
                className="w-20 h-20 rounded-full mr-2 ml-1"
              />
              <div className="mt-2">
                <div className="bg-white w-[270px] rounded-3xl px-5 p-2">
                  <h3 className="text-blue-800 font-semibold">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.department}</p>
                </div>

                <div className="flex">
                  <div className="mt-2 flex bg-white ml-2 px-2 rounded-2xl w-[60px]">
                    <img
                      src={doctor.rating}
                      className="w-5 h-5 rounded-full mr-2"
                    />
                    <p>{doctor.numbers}</p>
                  </div>
                  <div className="mt-2 flex bg-white ml-2 px-2 rounded-2xl w-[60px]">
                    <img
                      src={doctor.message}
                      className="w-4 rounded-full mr-2 ml-1"
                    />
                    <p>{doctor.numbers}</p>
                  </div>
                  <div className="mt-2 ml-16 h-5 shadow-white bg-white rounded-full w-5">
                    <img src={doctor.question} className="w-2 py-1 ml-1" />
                  </div>
                  <img
                    src={doctor.favorite}
                    className="w-5 h-5 mr-2 ml-4 mt-2 px-1 py-1 shadow-white bg-white rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
