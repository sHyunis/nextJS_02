'use client' //중요!

import React from 'react'
import './box-motion.css'
import { motion } from 'framer-motion'

const BoxMotion = () => {
  const boxVariants = {
        hidden : {
            x : 100,
            opacity : 0
        },
        visible : {
            x : 0,
            opacity : 1,
            transition : {
                // duration : 1,
                staggerChildren : 0.3 // 첫번째 자식 1초후, 두번째 자식 그 다음 1초후 ...
                // 자식의 애니메이션 delay 제어
            }
        }
  }

  const item = {
    hidden : { opacity : 0 },
    visible : { opacity : 1 }
  }

  return (
    <div className='min-h-screen flex items-center'>
        <div className='out-box'>
            <motion.div className='box'
                        variants={boxVariants}
                        initial="hidden"
                        animate="visible"
            >
                {
                    [1,2,3].map(box => <motion.div key={box} 
                                                   className='boxItem'
                                                   variants={item}
                                                   // 주의! 속성은 지정하지 말기! (staggerChildren)
                                                //    initial="hidden"
                                                //    animate="visible"
                    ></motion.div>)
                }
            </motion.div>
        </div>
    </div>
  )
}

export default BoxMotion