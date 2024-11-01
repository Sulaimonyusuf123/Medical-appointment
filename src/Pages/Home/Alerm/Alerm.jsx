import React from 'react'
import back from "../../../Pages/Home/Doctors/back.svg"
import { Link } from 'react-router-dom'
import Navbar from '../../../Home/Navbar/Navbar'

const Alerm = () => {
  return (
    <div>
    <div>
    <Navbar/>
    <div className="flex items-center justify-between w-full">
  <Link to={"/UserProfile"}>
    <button className="">
      <img src={back} alt="Back" className="w-6 h-6 mt-4" />
    </button>
  </Link>
  <h2 className="font-bold text-lg sm:text-xl flex-grow text-center">
    Add payment options
  </h2>
  <div className="w-8"></div>
</div>
    </div>
       
    </div>
  )
}

export default Alerm
