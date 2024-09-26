import { motion } from 'framer-motion';
import React from 'react';

const Scrolling = () => {

    return (
        <section  className='w-full h-[20vh]  flex items-center'>
          <div className='flex overflow-hidden whitespace-nowrap  border-t-[0.1px] border-b-[0.1px]'>
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: 'linear', repeat:Infinity, duration:20}}  className='text-[8vw] font-me text-purple-200 leading-none tracking-tighter font-semibold uppercase pl-7'><span className='bg-gradient-to-tr from-purple-400 to-orange-300 bg-clip-text text-transparent'>We are enjoy our life with friend and Familly</span></motion.h1>
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: 'linear', repeat:Infinity, duration:20}}  className='text-[8vw] font-me text-purple-200 leading-none tracking-tighter font-semibold uppercase pl-7'><span className='bg-gradient-to-tr from-purple-400 to-orange-300 bg-clip-text text-transparent'>We are enjoy our life with friend and Familly</span></motion.h1>
         
          </div>
          
        </section>
    );
};

export default Scrolling;