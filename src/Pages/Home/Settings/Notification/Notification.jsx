import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../Home/Navbar/Navbar';
import back from '../../../Home/Doctors/back.svg';
import { useTheme } from '../Change/Theme';

const Notification = () => {
  const [isEmailOn, setIsEmailOn] = useState(false);
  const [isSmsOn, setIsSmsOn] = useState(false);
  const [isPushOn, setIsPushOn] = useState(false);
  const [isInAppOn, setIsInAppOn] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isInOn, setIsInOn] = useState(false);
  const [is, setIs] = useState(false);
  const [On, setOn] = useState(false);

  const { themeStyles } = useTheme();

  
  const toggleEmail = () => setIsEmailOn(prev => !prev);
  const toggleSms = () => setIsSmsOn(prev => !prev);
  const togglePush = () => setIsPushOn(prev => !prev);
  const toggleInApp = () => setIsInAppOn(prev => !prev);
  const toggleApp = () => setIsOn(prev => !prev);
  const toggleIsApp = () => setIsInOn(prev => !prev);
  const toggleIs = () => setIs(prev => !prev);
  const toggleOn = () => setOn(prev => !prev);


  // ToggleSwitch component for the switch UI
  const ToggleSwitch = ({ isOn, handleToggle }) => {
    return (
      <div
        className={`w-14 h-7 flex items-center rounded-full p-1 ${
          isOn ? "bg-blue-500" : "bg-gray-300"
        } cursor-pointer`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
            isOn ? "translate-x-7" : ""
          }`}
        ></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col px-4" style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.color }}>
      <Navbar />
      <div className="flex items-center justify-between w-full mb-6">
        <Link to="/Settings">
          <button className="mt-2">
            <img src={back} alt="Back" className="w-6 h-6" />
          </button>
        </Link>
        <h2 className="font-bold text-xl text-blue-500 text-center flex-grow">
          Notification Settings
        </h2>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">General Notifications</p>
          <ToggleSwitch isOn={isEmailOn} handleToggle={toggleEmail} />
        </div>

        <div className="flex justify-between items-center pt-3">
          <p className="text-lg font-bold">Sound</p>
          <ToggleSwitch isOn={isSmsOn} handleToggle={toggleSms} />
        </div>

        <div className="flex pt-3 justify-between items-center">
          <p className="text-lg font-bold">Sound Call</p>
          <ToggleSwitch isOn={isPushOn} handleToggle={togglePush} />
        </div>

        <div className="flex pt-3 justify-between items-center">
          <p className="text-lg font-bold">Vibrate</p>
          <ToggleSwitch isOn={isInAppOn} handleToggle={toggleInApp} />
        </div>

        <div className="flex pt-3 justify-between items-center">
          <p className="text-lg font-bold">Special Offers</p>
          <ToggleSwitch isOn={isOn} handleToggle={toggleApp} />
        </div>

        <div className="flex pt-3 justify-between items-center">
          <p className="text-lg font-bold">Payments</p>
          <ToggleSwitch isOn={isInOn} handleToggle={toggleIsApp} />
        </div>

        <div className="flex pt-3 justify-between items-center">
          <p className="text-lg font-bold">Promo And Discount</p>
          <ToggleSwitch isOn={is} handleToggle={toggleIs} />
        </div>

        <div className="flex pt-3 justify-between items-center">
          <p className="text-lg font-bold">Cashback</p>
          <ToggleSwitch isOn={On} handleToggle={toggleOn} />
        </div>
      </div>
    </div>
  );
};

export default Notification;
