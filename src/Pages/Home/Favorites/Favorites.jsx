import React from 'react'
import back from "../../../Pages/Home/Doctors/back.svg"
import { Link } from 'react-router-dom'
import Navbar from '../../../Home/Navbar/Navbar'
import search from "../../../Pages/Home/SearchFilter/search.svg"
import filter from "../../../Pages/Home/SearchFilter/filter.svg"

const Favorites = () => {
  return (
    <div className='px-2 py-2'>
    <div>
    <Navbar/>
    <div className="flex items-center justify-between w-full">
  <Link to={"/Alldoctors"}>
    <button className="">
      <img src={back} alt="Back" className="w-6 h-6 mt-4" />
    </button>
  </Link>
  <h2 className="font-bold text-2xl text-blue-500">
    Favorites
  </h2>
  <div className="flex ml-32 gap-2">
  <button className="bg-blue-300 rounded-full p-2 hover:bg-blue-400 transition duration-300">
    <div className=" rounded-full">
      <img src={search} alt="Search" className="w-3 h-3" />
    </div>
  </button>
 <button className='rounded-full bg-blue-300'>
 <img src={filter} className=''></img>
 </button>
</div>
  <div className="w-8"></div>
</div>
    </div>
       
    </div>
  )
}

export default Favorites
