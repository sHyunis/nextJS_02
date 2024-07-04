'use client' //중요!

import React, { useState } from 'react'
import './box-motion.css'
import { motion } from 'framer-motion'

const BoxMotion = () => {
  const [ isRotate, setIsRotate ] = useState(false);
  return (
    <div className='min-h-screen flex items-center'>
        <div className='out-box'>
            <motion.div className='box'
                        onClick={() => {setIsRotate(!isRotate)}}
                        animate={{ rotate : isRotate ? 360 : 0 }}
                        initial={{ rotate : 0 }}
                        transition={{duration : 1, type : 'spring', stiffness : 50}} 
            >
                BoxMotion
            </motion.div>
        </div>
    </div>
  )
}

export default BoxMotion