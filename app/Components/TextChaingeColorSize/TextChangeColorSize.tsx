'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'
type TextChaingeColorSizeProps = {
    colorStart: string;
    colorEnd: string;
    text:string;
}
const TextChangeColorSize = ({ colorStart, colorEnd ,text}: TextChaingeColorSizeProps) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])
    const y = useTransform(scrollYProgress, [0, 1], [100, 50]) // translate up
    const weight = useTransform(scrollYProgress, [0, 1], [900, 200]) // font wght
    const width = useTransform(scrollYProgress, [0, 1], [176, 50])   // font wdth
    const scale = useTransform(scrollYProgress, [0, 1], [0, .8])    // optional bump
    const color = useTransform(scrollYProgress, [0, 1], [colorStart, colorEnd])    // color change
    const textSize = useTransform(scrollYProgress, [0, 1], ["5vw", "15vw"]); // text size
    return (
        <div className=''>
            <motion.div
                ref={ref}
                className='pt-10 h-[30vh] md:h-[50vh] text-center items-center overflow-hidden container flex m-auto'
            >
                <motion.h1
                    style={{
                        opacity,
                        scale,
                        color,
                        fontSize: textSize,
                        fontFamily: "Geist Variable, sans-serif",
                        transformStyle: "preserve-3d",
                        fontVariationSettings: `"wght" ${weight.get()},"wdth" ${width.get()}`,
                    }}
                    className='  font-bold flex-1  will-change-scroll '
                >{text}</motion.h1>
            </motion.div>
        </div>
    )
}

export default TextChangeColorSize