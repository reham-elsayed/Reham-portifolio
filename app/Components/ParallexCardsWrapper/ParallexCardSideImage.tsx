'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import React from 'react'

const ParallexCardSideImage = () => {
    const { scrollYProgress } = useScroll()
    const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '180deg'])
    return (
        <>
            <div className='w-[32vw] h-[32vw] flex relative justify-center items-center top-[3vw]   '>
                <div className='reflect'></div>
                <div className='bobine_betacam '></div>
                <div className='support-bobine_betacam'></div>
                <motion.div
                    style={{ rotate }}
                    className='details-support_betacam '></motion.div>
                <div className='interior-bobine'></div>
            </div></>
    )
}

export default ParallexCardSideImage