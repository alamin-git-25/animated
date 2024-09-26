import React from 'react';
import img from './jigar-panchal-EHsvDRl2iBM-unsplash.jpg';
import gsap from 'gsap';
import Scrolling from './Scrolling';


const Banner = () => {
   
    return (
       <section  className='w-full h-screen bg-zinc-900 bg-custom'>
        <div className='grid grid-cols-2 px-[10vw]'>
            <div className='mt-52'>
                <h1  className='text-[4.5vw] font-me leading-none tracking-widest font-semibold uppercase'><span id='fast' className='bg-gradient-to-tr from-purple-400 to-orange-300 bg-clip-text text-transparent'>We are enjoy our life <br />with friend <br />and <br /> Familly</span></h1>
            </div>
            <div className='w-[100%] h-[80vh] mt-52'>
                <img src={img} alt="" className=' img-me'/>
            </div>
        </div>
       
       </section>
    );
};

export default Banner;