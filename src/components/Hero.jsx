import React from 'react'
import MyselfImage from '../assets/myself2.png';

function Hero() {
  return (
    <div className='p-2 text-white flex justify-center items-center w-full min-h-screen'>
        <div className='p-1 flex flex-col  w-1/2 pl-20'>
            <div className='p-1 text-8xl font-thin'>
                Rajat Tanwar
            </div>
            
            <br/><br/><br/>
            <div className='p-1 text-4xl'>
                <span className='bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent'>Full Stack Web Developer</span>
            </div>
            
            
            <div className='p-1 text-xl text-balance font-mono'>
                <p>
                    I am a MERN stack developer currently in my final year B.Tech CSE. I am also proficient in DSA and problem solving.
                </p>
            </div>            
        </div>
        <div className='p-1 flex justify-center items-center w-1/2'>
            <div className=''>
                <img src={MyselfImage} className='rounded-lg'></img>
            </div>
        </div>
    </div>
  )
}

export default Hero