import React from 'react'
import shoe8 from '../assets/images/shoe8.svg';
import { FaShippingFast } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className='mt-14 flex'>
        <div className='w-1/2 p-2 flex flex-col gap-y-8'>
          <h1 className='text-6xl text-white font-bold font-sans'>We Provide You<span className='text-red-500'> Super <br /> Quality</span> Shoes</h1>
          <div className='text-white text-lg text-wrap'>
            Ensuring premium comfort and style, out meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
            Our dedication to detail and excellence ensures your satisfaction
          </div>
          <div className='flex items-center gap-x-2 bg-red-500 rounded-2xl p-1 justify-center w-1/5 text-white hover:opacity-75'>
            <button>View Details</button>
          </div>
        </div>
        <div className='w-1/2'>
          <img src={shoe8} alt='show-image' />
        </div>
      </div>
      {/* cards */}
      <div className='flex items-center gap-x-6 mt-12'>
        <div className='rounded-lg w-1/4 bg-slate-800 text-white p-12 gap-y-4 flex flex-col justify-center transition-transform hover:scale-110 cursor-pointer'>
          <div className='w-8 h-8 rounded-full bg-red-500 flex items-center justify-center'>
            <FaShippingFast className='' />
          </div>
          <h2 className='font-bold text-xl'>Free Shipping</h2>
          <p>Enjoy seamless shopping with our complimentary shipping service.</p>
        </div>
        <div className='rounded-lg w-1/4 bg-slate-800 text-white p-12 gap-y-4 flex flex-col justify-center transition-transform hover:scale-110 cursor-pointer'>
          <div className='w-8 h-8 rounded-full bg-red-500 flex items-center justify-center'>
            <FaShippingFast className='' />
          </div>
          <h2 className='font-bold text-xl'>Free Shipping</h2>
          <p>Enjoy seamless shopping with our complimentary shipping service.</p>
        </div>
        <div className='rounded-lg w-1/4 bg-slate-800 text-white p-12 gap-y-4 flex flex-col justify-center transition-transform hover:scale-110 cursor-pointer'>
          <div className='w-8 h-8 rounded-full bg-red-500 flex items-center justify-center'>
            <FaShippingFast className='' />
          </div>
          <h2 className='font-bold text-xl'>Free Shipping</h2>
          <p>Enjoy seamless shopping with our complimentary shipping service.</p>
        </div>

      </div>
    </div>
  )
}

export default About
