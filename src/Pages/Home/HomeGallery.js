import React, { useState } from 'react';
import img from './jigar-panchal-EHsvDRl2iBM-unsplash.jpg';
import gsap from 'gsap';
import { easeIn } from 'framer-motion';

const HomeGallery = () => {
   
    gsap.from("img",{
        opacity:1,
        direction:2,
        delay:3,
        transition: easeIn
        
    });
    return (
        <section className='w-full min-h-screen bg-sec'>
            <div className="">
            <div className='grid grid-cols-3 place-items-center gap-10 px-[10vw] py-10'>
                <div className={`img-me w-full h-[40vh] col-span-2 `} >
                    <img src={img} alt="" className='w-full h-full'/>
                </div>
                <div className="img-me w-full h-[40vh] ">
                    <img src={img} alt="" className='w-full h-full'/>
                </div>
                <div className="img-me w-full h-[40vh] ">
                    <img src={img} alt="" className='w-full h-full'/>
                </div>
                <div className="img-me w-full h-[40vh] col-span-2">
                    <img src={img} alt="" className='w-full h-full'/>
                </div>
                <div className="img-me w-full h-[40vh] col-span-2">
                    <img src={img} alt="" className='w-full h-full'/>
                </div>
                <div className="img-me w-full h-[40vh]">
                    <img src={img} alt="" className='w-full h-full'/>
                </div>
                </div>
                
           
            </div>
        </section>
    );
};

export default HomeGallery;