import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../Home/logo.svg";

const MyCarousel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSlide, setSelectedSlide] = useState(location.state?.startSlide || 0);
  const [bgColor, setBgColor] = useState("bg-blue-500");
  const [role, setRole] = useState("user");

  useEffect(() => {
    if (selectedSlide === 1) {
      setBgColor("bg-white");
    } else {
      setBgColor("bg-blue-500");
    }
  }, [selectedSlide]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleContinue = () => {
    if (role === "doctor") {
      navigate("/Dselect");
    } else {
      navigate("/Select");
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div className={`h-screen ${bgColor}`}>
      <Carousel
        selectedItem={selectedSlide}
        showArrows={false}
        showThumbs={false}
        infiniteLoop={false}
        autoPlay={false}
        showStatus={false}
        showIndicators={selectedSlide === 0}
        onChange={setSelectedSlide}
      >
        <motion.div
          className="h-screen flex flex-col justify-center items-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} className="w-[400px] h-[200px]" alt="Logo" />
          <div className="text-white mt-4 text-center">
            <h1 className="text-4xl font-thin">
              Skin <br /> Flirt
            </h1>
            <p>Dermatological center</p>
          </div>
        </motion.div>

        <motion.div
          className="h-screen flex flex-col justify-center items-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} className="w-[300px] h-[150px]" alt="Logo" />
          <div className="mt-4 text-center">
            <h1 className="text-4xl font-thin text-blue-500">
              Skin <br /> Flirt
            </h1>
            <p>Dermatological center</p>
            <p className="mt-4 break-words w-full px-4 text-blue-500">
              lorem2woe;gfiiiidbcklcvwdhsjhjshsjhnnswscghjc hsjsjcsghwsjhwevcjhkwe
            </p>
          </div>

          <div className="mt-6 px-4">
            <label className="block text-sm w-[150px] font-medium text-gray-700">Select Role:</label>
            <select
              value={role}
              onChange={handleRoleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            >
              <option value="user">User</option>
              <option value="doctor">Doctor</option>
            </select>

            <button
              onClick={handleContinue}
              className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600"
            >
              Continue
            </button>
          </div>
        </motion.div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
