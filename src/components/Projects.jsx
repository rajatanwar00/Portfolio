import React from 'react'
import Carousel from './Carousel'
import { ProjectList } from '../assets/text'

function Projects() {
  //const slides=[{image:TaskApp,content:"Project1"},{image:Amazon,content:"Project2"},{image:Weather,content:"Project3"}];
  const slides=ProjectList;
  return (
    <div className='text-gray-300 min-h-screen'>
        <div className='text-6xl text-center m-3'>
            Projects
        </div>

        <div className='flex justify-center items-center'>
          <div className='w-[854px] h-[720px]'>
            <Carousel slides={slides}>
            </Carousel>
          </div>
        </div>        
    </div>
  )
}

export default Projects