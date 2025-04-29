import React from 'react'
import back from "../../../Pages/Home/Doctors/back.svg"
import { Link } from 'react-router-dom'
import Navbar from '../../../Home/Navbar/Navbar'
import SortBy from '../../SortBy'
import search from "../../../Pages/Home/SearchFilter/search.svg"
import filter from "../../../Pages/Home/SearchFilter/filter.svg"
import doctors from "../../../Pages/Home/Doctors/doctors.json"

const Ratings = () => {
  return (
    <div className='px-4 py-2'>
      <div>
    <Navbar/>
    <div className="flex items-center justify-between w-full">
  <Link to={"/Alldoctors"}>
    <button className="">
      <img src={back} alt="Back" className="w-6 h-6 mt-4" />
    </button>
  </Link>
  <h2 className="font-bold text-2xl text-blue-500 ml-12">
    Ratings
  </h2>
  <div className="flex mr-4 gap-2">
  <button className="bg-blue-300 rounded-full p-2 hover:bg-blue-400 transition duration-300">
    <div className=" rounded-full">
      <img src={search} alt="Search" className="w-3 h-3" />
    </div>
  </button>
 <button className='rounded-full bg-blue-300'>
 <img src={filter} className=''></img>
 </button>
</div>
  
</div>
    </div>
    <div>
  <SortBy/>
    </div>
    <div>
      <div className='mt-4'>
      {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex items-center mb-4 p-2 rounded-lg shadow bg-gray-200"
          >
          <div className='flex'>
          <img
              src={doctor.image}
              className="w-[80px] h-30 rounded-full mr-2 ml-1 mb-4"
            />
            <div className="">
              <div className="flex">
              <div className='flex'>
              <img src={doctor.img} className='bg-blue-700 p-1 rounded-full h-5'></img>
              <p className="text-gray-600 ml-2 text-xs">{doctor.per}</p>
              </div>
              <div className='flex ml-12 bg-white rounded-full h-5 p-1 w-12'>
                <button><img src={doctor.img} alt="" srcset=""  className='w-[10px] ml-1 mt-1'/></button>
                <p className='text-xs ml-2'>5</p>
              </div>
              </div>
              <div className='bg-white rounded-2xl text-sm p-2 mt-1'>
              <div className='flex text-blue-700'>
                <p className=''>{doctor.name}</p>
                <p>{doctor.names}</p>
              </div>
              <p>{doctor.Department}</p>
              </div>
              <div className='mt-6 flex'>
              <div className='bg-blue-700 p-1 w-14 rounded-3xl'>
              <Link to='/DocInfo'><p className="text-white ml-2">{doctor.information}</p></Link>
              </div>
              <div className='flex  ml-16'>
<div className='bg-white rounded-full p-1'>
  <img src={doctor.img} className='w-5 mt-1'></img>
</div>
<div className='bg-white rounded-full p-1'>
  <img src={doctor.img2} className='w-5 mt-1'></img>
</div>
<div className='bg-white rounded-full p-1'>
  <img src={doctor.img3} className='w-5 mt-1'></img>
</div>
<div className='bg-white rounded-full p-1'>
  <img src={doctor.img4} className='w-5 mt-1'></img>
</div>
</div>
              </div>
              
          </div>
          

            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Ratings
