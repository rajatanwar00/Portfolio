import React, { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

function Carousel({slides}) {
    const [curr,setCurr]=useState(0)

    const prev=()=> setCurr((cur)=>(cur==0?slides.length-1:cur-1));
    const next=()=> setCurr((cur)=>(cur==slides.length-1?0:cur+1));

  return (
    <div className='overflow-hidden '>
        <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
            {slides.map((s)=>(
                <div className='min-w-full min-h-full'>
                    <div className='relative'>
                        <img src={s.image} className='p-2 w-[854px] h-[480px]'>
                        </img>

                        <div className='absolute inset-0 flex items-center justify-between p-4'>
                            <button onClick={prev} className='bg-white/80 text-gray-800 shadow-md rounded-full p-1 hover:bg-white'>
                                <BiChevronLeft size={20}/>
                            </button>
                            <button onClick={next} className='bg-white/80 text-gray-800 shadow-md rounded-full p-1 hover:bg-white'>
                                <BiChevronRight size={20}/>
                            </button>
                        </div> 

                        <div className="absolute bottom-4 right-0 left-0">
                            <div className="flex items-center justify-center gap-2">
                                {slides.map((_, i) => (
                                    <div
                                    className={`
                                    transition-all w-3 h-3 bg-sky-400 rounded-full
                                    ${curr === i ? "p-2" : "bg-opacity-50"}
                                    `}
                                    />
                                ))}
                            </div>
                        </div> 
                    </div>
                    
                    <div className='p-1 mt-3'>
                        <div className='text-3xl'>{s.title} | <a href={s.link} target="_blank">Link</a></div>
                        <br></br>
                        <p>
                        {s.description}
                        </p>
                    </div>
                </div>
              ))}
        </div>

        

               
    </div>
  )
}

export default Carousel