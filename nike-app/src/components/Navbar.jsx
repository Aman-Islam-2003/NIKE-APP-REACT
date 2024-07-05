import React from 'react'
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import logo from "../assets/images/nikeLogo.png"

const Navbar = () => {
    return (
        <div className='w-full bg-neutral-800 p-5 text-white flex items-center justify-around shadow-lg'>

            <div>
                <img src={logo} alt='logo' className='cursor-pointer w-16 h-16'/>
            </div>

            <div className='w-2/5'>
                <ul className='flex justify-between text-xl'>
                    <li className='cursor-pointer  border-b-2 border-transparent hover:border-white transition-all duration-300'>Home</li>
                    <li className='cursor-pointer  border-b-2 border-transparent hover:border-white transition-all duration-300'>About Us</li>
                    <li className='cursor-pointer  border-b-2 border-transparent hover:border-white transition-all duration-300'>Products</li>
                    <li className='cursor-pointer  border-b-2 border-transparent hover:border-white transition-all duration-300'>Contact us</li>
                </ul>
            </div>
            <div className='flex items-center justify-between gap-x-3'>
            <div className='border border-white rounded-full flex items-center p-1 gap-x-2'>
            <IoSearch className='text-2xl  cursor-pointer text-red-500'/>
                <input type='text' className='bg-transparent outline-none ' placeholder='Search' />
            </div>

            <div className='flex items-center gap-x-3'>
            <MdOutlineDarkMode className='text-2xl cursor-pointer text-red-500'/>
            <MdShoppingCart className='text-2xl cursor-pointer text-red-500'/>
            </div>

            </div>
        </div>
    )
}

export default Navbar
