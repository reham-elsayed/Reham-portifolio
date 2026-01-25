'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'
type TextChaingeColorSizeProps = {
    colorStart: string;
    colorEnd: string;
}
const TextChangeColorSize = ({ colorStart, colorEnd }: TextChaingeColorSizeProps) => {
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
                className='pt-20 h-[80vh] text-center items-center overflow-hidden container'
            >
                <motion.h1

                    style={{
                        opacity,
                        scale,
                        color,
                        fontSize: textSize,
                        transformStyle: "preserve-3d",
                        fontVariationSettings: `"wght" ${weight.get()},"wdth" ${width.get()}`,
                    }}
                    className=' font-GeistVariable font-bold flex-1  will-change-scroll '
                >EXPERTIRES</motion.h1>
            </motion.div>
        </div>
    )
}

export default TextChangeColorSize