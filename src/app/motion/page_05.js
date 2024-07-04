'use client' //중요!

import React, { useState } from 'react'
import './box-motion.css'
import { motion } from 'framer-motion'

const BoxMotion = () => {
  const [ isOpacity, setIsOpacity ] = useState(false);
  const [ isMove, setIsMove ] = useState(false);
  const [ isRotate, setIsRotate ] = useState(false);

  const animateHandle = () => {
    setIsOpacity(!isOpacity)
    setIsMove(!isMove)
    setIsRotate(!isRotate)
  }
  return (
    <div className='min-h-screen flex items-center'>
        <div className='out-box'>
            <motion.div className='box'
                        onClick={animateHandle}
                        animate={{ 
                          opacity : isOpacity ? 1 : 0,
                          x : isMove ? 200 : 0,
                          rotate : isRotate ? 360 : 0
                        }}
                        initial={{ opacity : 0 }}
                        transition={{duration : 1, type : 'spring', stiffness : 50}} 
            >
                BoxMotion
            </motion.div>
        </div>
    </div>
  )
}

export default BoxMotion