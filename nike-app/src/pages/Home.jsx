import React, { useState } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import ShoeCover1 from '../assets/images/big-shoe12.png'
import ShoeCover2 from '../assets/images/big-shoe2.png'
import ShoeCover3 from '../assets/images/big-shoe3.png'
import backgroundImage from '../assets/images/collection-background.svg';
import backgroundImage2 from '../assets/images/thumbnail-background.svg';
import Products from './Products';
const Home = () => {
    const [image, setimage] = useState(ShoeCover1);
    const changeImageHandler = (shoeCover) => {
        setimage(shoeCover);
    }
    return (
        <>
        <div className='flex h-screen'>
            <div className='flex flex-col justify-center w-1/2 gap-y-12 relative left-20'>
                <div className='text-7xl text-white font-bold font-sans'>
                    <div className='bg-stone-500 text-center p-3 rounded-md h-28'>The New Arrival</div>
                    <div className=''><span className='text-red-500'>Nike</span> Shoes</div>
                </div>
                <div>
                    <p className='text-white'>Discover stylish Nike arrivals, quality
                        <br /> comfort, and innovation for your active life</p>
                </div>
                <div className='flex items-center gap-x-2 bg-red-500 rounded-2xl p-1 justify-center w-1/5 text-white hover:opacity-75'>
                    <button>Shop now</button>
                    <FaArrowAltCircleRight />
                </div>
                <div className='flex items-center gap-x-20 font-bold text-white text-3xl mt-10'>
                    <div>
                        <h1>1K+</h1>
                        <span>Brands</span>
                    </div>
                    <div>
                        <h1>500+</h1>
                        <span>Shops</span>
                    </div>
                    <div>
                        <h1>250K+</h1>
                        <span>Customers</span>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-cover bg-center mr-8">
                    <img src={image} />
                </div>
                <div className='flex justify-evenly relative bottom-12'>
                    <div className='border rounded-lg bg-cover bg-center border-black hover:border-red-500 cursor-pointer transition-transform hover:scale-110' style={{ backgroundImage: `url(${backgroundImage2})` }} onClick={() => changeImageHandler(ShoeCover1)}>
                        <img src={ShoeCover1} className='w-40 h-40' />
                    </div>
                    <div className='border rounded-lg bg-cover bg-center border-black hover:border-red-500 cursor-pointer transition-transform hover:scale-110' style={{ backgroundImage: `url(${backgroundImage2})` }} onClick={() => changeImageHandler(ShoeCover2)}>
                        <img src={ShoeCover2} className='w-40 h-40' />
                    </div>
                    <div className='border rounded-lg bg-cover bg-center border-black hover:border-red-500 cursor-pointer transition-transform hover:scale-110' style={{ backgroundImage: `url(${backgroundImage2})` }} onClick={() => changeImageHandler(ShoeCover3)}>
                        <img src={ShoeCover3} className='w-40 h-40' />
                    </div>
                </div>
            </div>
        </div>
         <div className='mt-20 relative left-20 flex flex-col gap-y-8'>
         <h1 className='text-6xl text-white font-bold font-sans'>Our <span className='text-red-500'>Popular</span> Products</h1>
         <span className='text-white'>Experience top-notch quality and style with our sought-after
            <br/> selections. Discover a world of comfort, and value </span>
            <Products/>
     </div>
     </>
    )
}

export default Home
