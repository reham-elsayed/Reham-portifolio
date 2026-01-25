"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    isDark?: boolean;
}
const DiscoverButton = ({ isDark }: Props) => {
    return (

        <Link href="#" className='btn-arrow w-inline-block '>
            <motion.div
                whileHover="hover"
                className='perspective-distant'
            >
                <motion.div
                    initial={{ y: 0 }}
                    variants={{
                        hover: {
                            scale: [1, 0.9, 1],   // pulls back, then returns
                            y: [0, 0, 50],        // then moves down
                        }
                    }}
                    transition={{
                        duration: 1,           // total duration
                        times: [0, 0.3, 1],    // control sequence inside one animation
                        ease: "easeInOut"
                    }}
                    className={`txt-btn__arrow-1 ${isDark ? 'bg-[#2c3236] text-white' : ""}`} >
                    DISCOVER1
                </motion.div>
                <motion.div
                    className={`txt-btn__arrow-2 text-[--black] ${isDark ? 'bg-[#2c3236] text-white' : ""}`}
                    initial={{
                        rotateX: 90,
                        transition: { duration: 0.3 }
                    }}
                    variants={{
                        hover: { rotateX: 0 }
                    }}
                    transition={{ duration: 0.5, delay: .6 }}
                >
                    DISCOVER2
                </motion.div>

            </motion.div>
        </Link>

    )
}

export default DiscoverButton