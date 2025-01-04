import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiSailsdotjs, SiTailwindcss } from "react-icons/si";

function Technologies() {
  return (
    <div className='h-screen relative'>
        <div className='absolute inset-10 text-6xl text-center text-gray-300'>
            Technologies
        </div>

        <div className='flex justify-center items-center min-h-full min-w-full'>

            <div className='flex justify-around gap-2'>
                <div className='p-4 text-green-600 text-6xl border border-gray-400 rounded-lg'>
                    <SiMongodb/>
                </div>

                <div className='p-4 text-gray-200 text-6xl border border-gray-400 rounded-lg'>
                    <SiExpress/>
                </div>

                <div className='p-4 text-blue-400 text-6xl border border-gray-400 rounded-lg'>
                    <FaReact/>
                </div>

                <div className='p-4 text-green-600 text-6xl border border-gray-400 rounded-lg'>
                    <FaNodeJs/>
                </div>

                <div className='p-4 text-blue-400 text-6xl border border-gray-400 rounded-lg'>
                    <SiSailsdotjs/>
                </div>

                <div className='p-4 text-blue-500 text-6xl border border-gray-400 rounded-lg'>
                    <SiTailwindcss/>
                </div>
            </div>

            
        </div>

        
    </div>
  )
}

export default Technologies