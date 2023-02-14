import React from 'react'
import { useState } from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)


  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="FI Banking" className="w-[124px] h-[100px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1" >
        {
          navLinks.map((nav, index) => (
            // dynamically spaced nav link to account for last linkin navLinks - if it's the last one, don't add mr-10
            <li key={nav.id} className={`{font-poppins} font-normal cursor-pointer text-[16px] text-white mr-10 ${index === navLinks.length -1 ? "mr-0" : "mr-10"}`}>
              <a href={`${nav.id}`} >
                {nav.title}
              </a>
            </li>
          ))
        }
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <img src={toggle ? close : menu} alt="menu" className='w-[29px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}/>
        <div className={`${!toggle ? "hidden" : "flex" } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} >
                <ul className="list-none sm:flex flex-col justify-end items-center flex-1" >
        {
          navLinks.map((nav, index) => (
            // dynamically spaced nav link to account for last linkin navLinks - if it's the last one, don't add mr-10
            <li key={nav.id} className={`{font-poppins} font-normal cursor-pointer text-[16px] text-white mb-4 ${index === navLinks.length -1 ? "mr-0" : "mr-10"}`}>
              <a href={`${nav.id}`} >
                {nav.title}
              </a>
            </li>
          ))
        }
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar