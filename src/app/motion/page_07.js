'use client' //중요!

import React, { useState } from 'react'
import './box-motion.css'
import { motion } from 'framer-motion'

const BoxMotion = () => {
  const boxVariants = {
        ani01 : { // 주제가 되는 이름으로 주는게 좋다.
            opacity : 1,
            x : 100
        },
        ani02 : {
            scale : 1.2,
        },
        ani03 : {
            rotate : 360,
        },
        hidden : {
            x : "-100vw"
        },
        visible : {
            x : 0,
            transition : {
                duration : 1
            }
        }
  }

  const [ isShowHide, setIsShowHide ] = useState(false);

  return (
    <div className='min-h-screen flex items-center'>
        <button onClick={() => {setIsShowHide(!isShowHide)}}>
        {isShowHide ? "hidden" : "visible"}
        </button>
        <div className='out-box'>
            <motion.div className='box'
                        variants={boxVariants}
                        animate={isShowHide ? "hidden" : "visible"} 
                        // animate="ani03" // 이런 방식으로 지정!
            >
                BoxMotion
            </motion.div>
        </div>
    </div>
  )
}

export default BoxMotion