'use client' //중요!

import React, { useState } from 'react'
import './box-motion.css'
import { motion } from 'framer-motion'

const BoxMotion = () => {
  const [ isMove, setIsMove ] = useState(false);
  return (
    <div className='min-h-screen flex items-center'>
        <div className='out-box'>
            <motion.div className='box'
                        onClick={() => {setIsMove(!isMove)}}
                        animate={{ x : isMove ? 200 : 0 }}
                        initial={{ x : 0 }}
                        transition={{duration : 1, type : 'spring', stiffness : 200}} 
            >
                BoxMotion
            </motion.div>
        </div>
    </div>
  )
}

export default BoxMotion