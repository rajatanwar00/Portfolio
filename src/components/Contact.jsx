import React from 'react'

function Contact() {
  return (
    <div className='h-1/2 text-gray-300'>
        <p className='text-6xl text-center'>
            Get in Touch
        </p>

        <div className='flex justify-center items-center h-full'>
            <div>
            <p className='text-center text-2xl'>Mail me at <u className='text-sky-600'><a href='mailto:byte.rajat@gmail.com'>byte.rajat@gmail.com</a></u></p>
            <p className='text-center'>OR</p>
            <p className='text-center text-xl'>Contact me at my socials through the sidebar.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Contact