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
                        // whileHover={{ scale : 1.2 }}
                        // whileTap={{ scale : 0.9 }}
                        drag
                        whileDrag={{ scale : 1.2 }} // 파일 업로드 할때 사용 가능
                        // drag="x"
                        // drag="y"
                        dragConstraints={{ // drag에 제한을 준다.
                          right: 20,
                          left: -20,
                          top : -20,
                          bottom: 20
                        }}
            >
                BoxMotion
            </motion.div>
        </div>
    </div>
  )
}

export default BoxMotion