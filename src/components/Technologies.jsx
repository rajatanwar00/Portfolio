import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiC, SiCplusplus, SiExpress, SiJavascript, SiMongodb, SiMysql, SiSailsdotjs, SiTailwindcss } from "react-icons/si";
import { easeInOut, motion } from "framer-motion";
import { FaC } from 'react-icons/fa6';
import { BiLogoCPlusPlus } from 'react-icons/bi';

function Technologies() {
  return (
    <div className='h-screen '>
        <div className=' inset-5 text-6xl text-center text-gray-300'>
            Technologies
        </div>

        <div className='flex justify-center items-center h-full w-full'>

            <div className='flex flex-col gap-40'>
                <div className='flex justify-around gap-2'>
                    <motion.div className='p-4 text-green-600 text-6xl border border-gray-400 rounded-lg'
                        animate={{ y: [0, +50, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        >
                        <SiMongodb/>
                    </motion.div>

                    <motion.div className='p-4 text-gray-200 text-6xl border border-gray-400 rounded-lg'
                        animate={{ y: [+50, 0, 50] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        >
                        <SiExpress/>
                    </motion.div>

                    <motion.div className='p-4 text-blue-400 text-6xl border border-gray-400 rounded-lg'
                        animate={{ y: [0, +50, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        >
                        <FaReact/>
                    </motion.div>

                    <motion.div className='p-4 text-green-600 text-6xl border border-gray-400 rounded-lg'
                        animate={{ y: [+50, 0, 50] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        >
                        <FaNodeJs/>
                    </motion.div>

                    <motion.div className='p-4 text-blue-400 text-6xl border border-gray-400 rounded-lg'
                        animate={{ y: [0, +50, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        >
                        <SiSailsdotjs/>
                    </motion.div>

                    <motion.div className='p-4 text-blue-500 text-6xl border border-gray-400 rounded-lg'
                        animate={{ y: [+50, 0, 50] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        >
                        <SiTailwindcss/>
                    </motion.div>

                    <motion.div className='p-4 text-blue-400 text-6xl border border-gray-400 rounded-lg'
                        animate={{ y: [0, +50, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        >
                        <SiMysql/>
                    </motion.div>
                </div>

                <div className='flex justify-center gap-10'>
                    <motion.div className='p-4 text-blue-800 text-6xl border  border-gray-400 rounded-lg'
                        animate={{ scale: [1, 1.2, 1]}}
                        transition={{ duration: 2, repeat: Infinity }}
                        >
                        <SiC/>
                    </motion.div>

                    <motion.div className='p-4 text-blue-500 text-6xl border border-gray-400 rounded-lg'
                        animate={{ scale: [1.2, 1, 1.2]}}
                        transition={{ duration: 2, repeat: Infinity }}
                        >
                        <BiLogoCPlusPlus/>
                    </motion.div>

                    <motion.div className='p-4 text-yellow-300 text-6xl border border-gray-400 rounded-lg'
                        animate={{ scale: [1, 1.2, 1]}}
                        transition={{ duration: 2, repeat: Infinity }}
                        >
                        <SiJavascript/>
                    </motion.div>
                </div>
            </div>         

            
        </div>

        
    </div>
  )
}

export default Technologies