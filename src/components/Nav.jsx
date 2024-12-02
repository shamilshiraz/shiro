import React from 'react'
import StaggerHoverButton from './Stagger'

function Nav() {
  return (
    <div className='flex fixed w-[96vw]  justify-between mx-6'>
      <div className="">
        <p className='text-2xl'>白</p>
      </div>
      <div className="flex my-2 gap-4">
        <a href="" className='hover:bg-white hover:text-orange-600'>Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Works</a>
        <a href="">Contact</a>
      </div>
    </div>
  )
}

export default Nav
