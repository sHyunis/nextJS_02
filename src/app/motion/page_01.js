'use client' //중요!

import React from 'react'
import './box-motion.css'
import { motion } from 'framer-motion'

const BoxMotion = () => {
  return (
    <div className='min-h-screen flex items-center'>
        <div className='out-box'>
            <motion.div className='box'
                        // animate={{ x : 100}}
                        // animate={{x:"50vw"}}
                        // animate={{y:-200}}
                        // animate={{rotate:45}}
                        // style={{opacity : 0}}
                        initial={{opacity : 0}}
                        animate={{opacity : 1}}
                        transition={{duration : 1}}
            >
                BoxMotion
            </motion.div>
        </div>
    </div>
  )
}

export default BoxMotion