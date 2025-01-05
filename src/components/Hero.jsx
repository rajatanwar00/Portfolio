import React from 'react'
import MyselfImage from '../assets/myself2.png';
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className='p-2 text-white flex justify-center items-center w-full min-h-screen'>
        <motion.div className='p-1 flex flex-col  w-1/2 pl-20'>
            <motion.div className='p-1 text-8xl font-thin' 
                initial={{ x: -100 , opacity:0}}
                animate={{ x: 0 , opacity:1}}
                transition={{ duration: 1 }}
                >
                Rajat Tanwar
            </motion.div>
            
            <br/><br/><br/>
            <motion.div className='p-1 text-4xl'
                initial={{ x: -100 , opacity:0}}
                animate={{ x: 0 , opacity:1}}
                transition={{ duration: 1, delay:1 }}
                >
                <span className='bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent'>Full Stack Web Developer</span>
            </motion.div>
            
            
            <motion.div className='p-1 text-xl text-balance font-mono'
                initial={{ x: -100 , opacity:0}}
                animate={{ x: 0 , opacity:1}}
                transition={{ duration: 1, delay:2 }}
                >
                <p>
                    I am a MERN stack developer currently in my final year B.Tech CSE. I am also proficient in DSA and problem solving.
                </p>
            </motion.div>            
        </motion.div>
        <div className='p-1 flex justify-center items-center w-1/2'>
            <motion.div className=''
                initial={{ x: 100 , opacity:0}}
                animate={{ x: 0 , opacity:1}}
                transition={{ duration: 1 , delay:2}}
                >
                <img src={MyselfImage} className='rounded-lg'></img>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero