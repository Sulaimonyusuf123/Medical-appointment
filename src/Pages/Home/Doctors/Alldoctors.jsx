import React from 'react'
import back from "../../../Pages/Home/Doctors/back.svg"
import { Link } from 'react-router-dom'
import Navbar from '../../../Home/Navbar/Navbar'
import search from '../SearchFilter/search.svg'
import filter from '../SearchFilter/filter.svg'
import star from '../Doctors/star.svg'
import json from "../Doctors/doctors.json"
import { useTheme } from '../Settings/Change/Theme'


const Alldoctors = () => {
  const { themeStyles } = useTheme();
  return (
    <div className='' style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.color }}>
     <Navbar/>
    <div className='px-4 py-2'>
    <div className=" items-center justify-between w-full flex">
  <Link to={"/UserProfile"}>
    <button className="">
      <img src={back} alt="Back" className="w-6 h-6 mt-4 text-blue-500" />
    </button>
  </Link>
  <h2 className="font-bold text-2xl text-blue-500 ml-12">
    Doctors
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

<div className='flex mt-4'>
  <p className='text-sm'>Sort by</p>
<div className='flex ml-2'>
<div className='bg-blue-300 rounded-full '>
<p className=' ml-4 text-sm w-12 p-[0.5px]'>A--Z</p>
</div>

<div className='bg-blue-200 rounded-full ml-2' >
<Link to='/Favorites'><img src={star} className='p-1 w-6'></img></Link>

</div>
<div className='bg-blue-200 rounded-full ml-2'>
<Link to='/Ratings'><img src={star} className='p-1 w-6'></img></Link>
</div>
<div className='bg-blue-200 rounded-full ml-2'>
<Link to='/Favemale'><img src={star} className='p-1 w-6'></img></Link>
</div>
<div className='bg-blue-200 rounded-full ml-2'>
<Link to='/Favefem'><img src={star} className='p-1 w-6'></img></Link>
</div>
</div>
</div>
 <div className="p-4 bg-gray-100 max-w-md mx-auto rounded-lg mt-4" style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.color }}>
        {json.map((doctor) => (
          <div
            key={doctor.id}
            className="flex items-center mb-4 p-2 rounded-lg shadow bg-gray-200"
          >
          <div className='flex'>
          <img
              src={doctor.image}
              className="w-[150px] h-30 rounded-full mr-2 ml-1 mb-4"
            />
            <div className=" mt-2">
              <div className="">
                <h3 className="text-blue-800 font-semibold">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.names}</p>
                <p className="text-gray-600">{doctor.Department}</p>
              </div>
              <div className='mt-6 flex'>
              <div className='bg-blue-700 p-1 w-14 rounded-3xl'>
              <Link to='/DocInfo'><p className="text-white ml-2">{doctor.information}</p></Link>
              </div>
              <div className='flex  ml-2'>
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

export default Alldoctors
