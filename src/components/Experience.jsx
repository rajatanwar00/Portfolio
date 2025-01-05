import React from 'react'
import Edukit2 from '../assets/Edukit2.png';
import NSUT from '../assets/NSUT.png'
import { easeInOut, motion } from "framer-motion";

function Experience() {
  return (
    <div className='text-gray-300 h-screen'>
        <div className='text-center text-6xl'>
            Experience & Education
        </div>

        <div className='flex justify-center items-center h-full'>
            <div className='w-1/2 '>

                <div className='flex'>
                    <motion.img src={Edukit2} className='size-60' 
                        initial={{ y: 200 , opacity:0}}
                        whileInView={{ y: 0 , opacity:1}}
                        transition={{ duration: 1, delay:0 }}
                        >
                    </motion.img>
                    <motion.div className='flex flex-col'
                        initial={{ y: 200 , opacity:0}}
                        whileInView={{ y: 0 , opacity:1}}
                        transition={{ duration: 1, delay:0 }}
                        >
                        <p className='p-1 text-2xl font-semibold'>
                            Edukit
                        </p>

                        <p className='p-1 pl-3 text-base'>
                            Backend Developer Intern<br></br>
                            (May,2024 - June,2024)
                        </p>

                        <p className='p-1 pl-3 text-wrap'>
                            Helped in the develpment of a CRM project. Developed webhooks required and coded several custom features.
                        </p>

                        <div className='p-1 pl-3 flex items-center gap-2'>
                            <div className='p-1 border text-gray-400 border-cyan-700 rounded-md shadow-lg shadow-slate-800'>Node.js</div>
                            <div className='p-1 border text-gray-400 border-cyan-700 rounded-md shadow-lg shadow-slate-800'>Sails.js</div>
                            <div className='p-1 border text-gray-400 border-cyan-700 rounded-md shadow-lg shadow-slate-800'>MongoDB</div>
                        </div>
                    </motion.div>
                </div>

                <div className='flex'>
                    <motion.img src={NSUT} className='size-60'
                        initial={{ y: 200 , opacity:0}}
                        whileInView={{ y: 0 , opacity:1}}
                        transition={{ duration: 1, delay:0.5 }}
                        >
                    </motion.img>
                    <motion.div className='flex flex-col'
                        initial={{ y: 200 , opacity:0}}
                        whileInView={{ y: 0 , opacity:1}}
                        transition={{ duration: 1, delay:0.5 }}
                        >
                        <p className='p-1 text-2xl font-semibold'>
                            Netaji Subhas University of Technology, Delhi
                        </p>

                        <p className='p-1 pl-3 text-base'>
                            Bachelor of Technology, Computer Science Engineering<br></br>
                            (Aug,2021 - May,2025)
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience