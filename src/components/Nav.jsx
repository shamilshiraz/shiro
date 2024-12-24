import React, { useState } from 'react'

function Nav() {
    const [isHovered, setIsHovered] = useState(false);
    const [about,setAbout]=useState(false)
    const [services,setServices]=useState(false)
    const [contact,setContact]=useState(false)

  return (
    <div className='flex  fixed w-[100vw] z-10  justify-between '>
      <div className="px-6">
        <p className='text-4xl'>白</p>
      </div>
      <div className="flex mt-2 gap-4">
      <div 
      className="h-10 w-12 flex  text-sm overflow-hidden relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Original text */}
      <a className={`absolute transition-all duration-300
        ${isHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        Home
      </a>

      {/* Text that appears on hover */}
      <a className={`absolute transition-all duration-300 
        ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        Home
      </a>
    </div>
    <div 
      className="h-10 w-12 flex text-sm overflow-hidden relative cursor-pointer"
      onMouseEnter={() => setAbout(true)}
      onMouseLeave={() => setAbout(false)}
    >
      {/* Original text */}
      <a className={`absolute transition-all duration-300
        ${about ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        About
      </a>

      {/* Text that appears on hover */}
      <a className={`absolute transition-all duration-300 
        ${about ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        About
      </a>
    </div>
    <div 
      className="h-10 w-16 flex text-sm overflow-hidden relative cursor-pointer"
      onMouseEnter={() => setServices(true)}
      onMouseLeave={() => setServices(false)}
    >
      {/* Original text */}
      <a className={`absolute transition-all duration-300
        ${services ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        Services
      </a>

      {/* Text that appears on hover */}
      <a className={`absolute transition-all duration-300 
        ${services ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        Services
      </a>
    </div>
    <div 
      className="h-10 w-16 flex text-sm overflow-hidden relative cursor-pointer"
      onMouseEnter={() => setContact(true)}
      onMouseLeave={() => setContact(false)}
    >
      {/* Original text */}
      <a className={`absolute transition-all duration-300
        ${contact ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        Contact
      </a>

      {/* Text that appears on hover */}
      <a className={`absolute transition-all duration-300 
        ${contact ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        Contact
      </a>
    </div>
      </div>
    </div>
  )
}


export default Nav
