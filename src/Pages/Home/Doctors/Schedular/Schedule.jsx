import React from 'react'
import Navbar from '../../../../Home/Navbar/Navbar'
import back from '../../../../Home/back.svg'
import { Link } from 'react-router-dom'

const Schedule = () => {
  return (
    <div>
    <div>
    <Navbar/>
    <div className="flex items-center justify-between w-full">
  <Link to="/DocInfo">
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

export default Schedule
