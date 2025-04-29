import React from 'react'
import { Link } from 'react-router-dom'
import star from "../Pages/Home/Doctors/star.svg"

export default function SortBy() {
  return (
    <div>
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
  )
}
