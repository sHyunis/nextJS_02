'use client' //중요!

import React from 'react'
import './box-motion.css'
import { motion } from 'framer-motion'

const BoxMotion = () => {
    const boxVariants = {
        ani01 : {
            opacity : [0,1,1,0], // keyframe
            x : 100,
            transition : {
                repeat : Infinity
            }
        },
        ani02 : {
            scale : [1.2, 0.9, 1.2],
            transition : {
                repeat : Infinity
            }
        },
        ani03 : {
            rotate : [360, 0, 270],
            transition : {
                repeat : Infinity
            }
        }
  }

  return (
    <div className='min-h-screen flex items-center'>
        <div className='out-box'>
            {/* <motion.div className='box'
                        // animate={{rotate : [0, 360, 360, 0]}}
                        // animate={{x : [100, -100, 50, -100, 100, 30]}} // keyframe 주는 법
                        animate={{opacity: [0, 1, 1, 0]}} 
                        transition={{duration : 2, repeat : Infinity}}
            ></motion.div> */}

            <motion.div className='box'
                        variants={boxVariants}
                        // animate="ani01"
                        // animate="ani02"
                        animate="ani03"
            >
            </motion.div>
        </div>
    </div>
  )
}

export default BoxMotion