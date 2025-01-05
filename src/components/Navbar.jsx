import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';
import { easeOut, motion } from "framer-motion";

function Navbar() {
  return (
    <nav className='p-2 fixed min-h-screen flex flex-col justify-center text-3xl gap-10 text-white '>
    
                <motion.div className='p-1' whileHover={{scale: 1.5}} transition={{duration:0.5, ease: easeOut}}>
                    <a href='https://www.linkedin.com/in/rajat-tanwar-448745284/' target="_blank">
                        <FaLinkedin/>
                    </a>
                </motion.div>
    
                <motion.div className='p-1' whileHover={{scale: 1.5}} transition={{duration:0.5, ease: easeOut}}>
                    <a href='https://github.com/rajatanwar00' target='_blank'>
                        <FaGithub/>
                    </a>
                </motion.div>   

                <motion.div className='p-1' whileHover={{scale: 1.5}} transition={{duration:0.5, ease: easeOut}}>
                    <a href='https://leetcode.com/u/rajatktanwar/' target='_blank'>
                        <SiLeetcode/>
                    </a>
                </motion.div>        
            
    </nav>
  )
}

export default Navbar