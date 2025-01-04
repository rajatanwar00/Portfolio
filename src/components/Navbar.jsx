import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';

function Navbar() {
  return (
    <nav className='p-2 fixed min-h-screen flex flex-col justify-center text-3xl gap-10 text-white '>
    
                <div className='p-1'>
                    <a href='https://www.linkedin.com/in/rajat-tanwar-448745284/' target="_blank">
                        <FaLinkedin/>
                    </a>
                </div>
    
                <div className='p-1 '>
                    <a href='https://github.com/rajatanwar00' target='_blank'>
                        <FaGithub/>
                    </a>
                </div>   

                <div className='p-1'>
                    <a href='https://leetcode.com/u/rajatktanwar/' target='_blank'>
                        <SiLeetcode/>
                    </a>
                </div>        
            
    </nav>
  )
}

export default Navbar