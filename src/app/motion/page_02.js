'use client' //중요!

import React from 'react'
import './box-motion.css'
import { motion } from 'framer-motion'

const BoxMotion = () => {
  return (
    <div className='min-h-screen flex items-center'>
        <div className='out-box'>
            <motion.div className='box'
                        animate={{ x : 200}}
                        initial={{ x : 0}}
                        transition={{duration : 1, type : 'spring', 
                        stiffness : 20, // stiffness : 숫자가 높아질수록 가속이 높아짐 // 시작하는 가속을 정함
                        damping : 200 // 끝나는 가속을 정함
                      }} 
            >
                BoxMotion
            </motion.div>
        </div>
    </div>
  )
}

export default BoxMotion