import React from 'react'
import back from '../../../Home/Doctors/back.svg'
import { Link } from 'react-router-dom'
import Navbar from '../../../../Home/Navbar/Navbar'
import search from '../../SearchFilter/search.svg'
import filter from '../../SearchFilter/filter.svg'
import star from '../../SearchFilter/star.svg'
import Doc from '../../Doctors/Docinfo/doc.svg'
import year from '../../Doctors/Docinfo/years.svg'
import vector from '../../Doctors/vector.svg'

const DocInfo = () => {
  return (
    <div className='px-4 py-2'>
    <div>
    <Navbar/>
    <div className=''>
    <div className=" items-center justify-between w-full flex">
  <Link to={"/Alldoctors"}>
    <button className="">
      <img src={back} alt="Back" className="w-6 h-6 mt-4 text-blue-500" />
    </button>
  </Link>
  <h2 className="font-bold text-2xl text-blue-500 ml-12 ">
    Doctors info
  </h2>
  <div className="flex mr-2 gap-2">
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

<div className='flex mt-2'>
  <p className='text-sm'>Sort by</p>
<div className='flex ml-2'>
<div className='bg-blue-300 rounded-full '>
<p className=' ml-4 text-sm w-12 p-[0.5px]'>A--Z</p>
</div>

<div className='bg-blue-200 rounded-full ml-2'>
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
</div>

<div className='mt-3 bg-blue-200  rounded-2xl'>
    <div className='flex p-3'>
        <img src={Doc} className='w-44'></img>
        <div className=' ml-4'>
        <div className='flex bg-blue-800 p-2 rounded-full'>
        <img src={year} className=''></img>
            <p className='text-white text-xs'>15years experience</p>
        </div>
       <div className='bg-blue-500 rounded-2xl p-1 mt-1'>
       <p className='text-xs p-1 text-white'>Focus: The impact <br/> of hormonal <br/> imbalances on <br/> skin conditions, <br/>acne, hirsutism,<br/> and other skin<br/> disorders</p>   
       </div>
       
        </div>
       
    </div>
    
    <div className='bg-white w-full max-w-xs mx-auto rounded-full  h-8 text-center'>  
        <p className='text-xs text-blue-800 font-bold'>Dr John Do Alabama Ph.D</p>  
        <p className='text-xs'>Demato-Genetics</p>  
    </div>  
    <div className='flex  md:flex-row mt-1 ml-12'>  
        <div className='flex ml-0 bg-white rounded-xl mr-4 w-11 h-6 mt-3 '>  
            <img src={star} className='ml-1 w-4 ' alt="Rating Star" />  
            <p className='text mt-[2px] ml-1 text-sm'>5</p>  
        </div>  
        <div className='flex bg-white mt-2 md:mt-0 ml-0 md:ml-4 p-1 rounded-2xl w- max-w-xs'>  
            <img src={year} className='w-6 ml-2' alt="Availability Icon" />  
            <p className='ml-2 text-sm'>Mon-Sat / 9:00AM - 5:00PM</p>  
        </div>  
    </div> 
   <div className='flex pb-4 '>
    <div className='ml-12 bg-blue-500 w-24 p-1 rounded-full mt-2'>
    <Link to='/Schedule' className='flex'>
    <img src={vector} className=' bg-blue-500'></img>
        <p className='ml-2 text-sm'>Schedule</p>
    </Link>
       
    </div>
    <div className='flex'>
    <img src={star} className='w-5 ml-20 bg-white mt-2 rounded-full h-5 p-1'></img>
    <img src={star} className='w-5  ml-2 bg-white mt-2 rounded-full h-5 p-1'></img>
    <img src={star} className='w-5 ml-2 bg-white mt-2 rounded-full h-5 p-1'></img>
    <img src={star} className='w-5 ml-2 bg-white mt-2 rounded-full h-5 p-1'></img>
    </div>
   
   </div>
   
</div>





    </div>
    <div className='mt-4'>
      <h2 className='text-blue-600'>Profile</h2>
      <p className='text-xs'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur deleniti sit consequuntur neque autem iure expedita necessitatibus dignissimos voluptate ipsam.
      </p>

      <h2 className='text-blue-600 mt-6'>Career Path</h2>
      <p className='text-xs'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur deleniti sit consequuntur neque autem iure expedita necessitatibus dignissimos voluptate ipsam.
      </p>

      <h2 className='text-blue-600 mt-2'>Heghlight</h2>
      <p className='text-xs mb-12'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur deleniti sit consequuntur neque autem iure expedita necessitatibus dignissimos voluptate ipsam.
      </p>      

    </div>
       
    </div>
  )
}

export default DocInfo
