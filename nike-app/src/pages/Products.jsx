import React from 'react'
import shoe4 from '../assets/images/shoe4.svg'
import { FaStar } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import About from './About';

const Products = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row items-center gap-x-4 w-full'>
                <div className='bg-slate-800 p-5 rounded transition-transform hover:scale-110 cursor-pointer w-1/5'>
                    <img src={shoe4} alt='shoe image' />
                    <div className='flex items-center gap-x-2'>
                        <FaStar className='text-red-500 text-xl' />
                        <p className='text-white'>4.5</p>
                    </div>
                    <h2 className='text-white font-semibold text-lg'>Nike Air Jordan-01</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-red-500'>$200.20</p>
                        <MdShoppingCart className='text-red-500 text-2xl' />
                    </div>
                </div>
                <div className='bg-slate-800 p-5 rounded transition-transform hover:scale-110 cursor-pointer w-1/5'>
                    <img src={shoe4} alt='shoe image' />
                    <div className='flex items-center gap-x-2'>
                        <FaStar className='text-red-500 text-xl' />
                        <p className='text-white'>4.5</p>
                    </div>
                    <h2 className='text-white font-semibold text-lg'>Nike Air Jordan-01</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-red-500'>$200.20</p>
                        <MdShoppingCart className='text-red-500 text-2xl' />
                    </div>
                </div>
                <div className='bg-slate-800 p-5 rounded transition-transform hover:scale-110 cursor-pointer w-1/5'>
                    <img src={shoe4} alt='shoe image' />
                    <div className='flex items-center gap-x-2'>
                        <FaStar className='text-red-500 text-xl' />
                        <p className='text-white'>4.5</p>
                    </div>
                    <h2 className='text-white font-semibold text-lg'>Nike Air Jordan-01</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-red-500'>$200.20</p>
                        <MdShoppingCart className='text-red-500 text-2xl' />
                    </div>
                </div>
                <div className='bg-slate-800 p-5 rounded transition-transform hover:scale-110 cursor-pointer w-1/5'>
                    <img src={shoe4} alt='shoe image' />
                    <div className='flex items-center gap-x-2'>
                        <FaStar className='text-red-500 text-xl' />
                        <p className='text-white'>4.5</p>
                    </div>
                    <h2 className='text-white font-semibold text-lg'>Nike Air Jordan-01</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-red-500'>$200.20</p>
                        <MdShoppingCart className='text-red-500 text-2xl' />
                    </div>
                </div>
            </div>
            <About />
        </>
    )
}

export default Products
