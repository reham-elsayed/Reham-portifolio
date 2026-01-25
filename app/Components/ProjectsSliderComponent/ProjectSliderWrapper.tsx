'use client'
import React from 'react'
import TextChangeColorSize from '../TextChaingeColorSize/TextChangeColorSize'
import { useAnimate, motion, AnimatePresence } from 'framer-motion'
import ProjectSliderSlider from './ProjectSliderSlider'
import Link from 'next/link'
import DiscoverButton from '../DiscoverButton/DiscoverButton'
import Image from 'next/image'

const ProjectSliderWrapper = () => {

    const [isDark, setIsDark] = React.useState(false)
    //  const scope = React.useRef(null)

    const [scope, animate] = useAnimate()
    const handleClick = () => {
        const nextIsDark = !isDark
        setIsDark(nextIsDark)

        animate(
            scope.current,
            {
                backgroundColor: nextIsDark ? "#2c3236" : "#e5e2d6",
            },
            { duration: 0.8 }
        )
    }

    return (
        <div ref={scope} className="relative bg-[#e5e2d6] min-h-screen">
            <TextChangeColorSize
                colorStart={isDark ? "rgb(79, 82, 190)" : "#292f33"}
                colorEnd={isDark ? "rgb(79, 82, 190)" : "#292f33"}
            />
            <div className='relative h-[10vh] w-full [perspective:1000px]'>
                <div
                    onClick={handleClick}
                    className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer hover:scale-110 transition-transform duration-300"
                >
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        <span className="bg-[#FF70F3] text-black px-4 py-1 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm">
                            {isDark ? "Turn the lights back on" : "Switch to dark mode"}
                        </span>
                    </div>
                    <div className="relative w-[150px] h-[150px]">
                        <AnimatePresence mode="wait" initial={false}>
                            {isDark ? (
                                <motion.div
                                    key="dark"
                                    initial={{ rotateY: -90, opacity: 0, scale: 0.8, z: -100 }}
                                    animate={{ rotateY: 0, opacity: 1, scale: 1, z: 0 }}
                                    exit={{ rotateY: 90, opacity: 0, scale: 0.8, z: -100 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src="/happyComp.png"
                                        alt="Switch Theme"
                                        width={150}
                                        height={150}
                                        className="drop-shadow-xl"
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="light"
                                    initial={{ rotateY: -90, opacity: 0, scale: 0.8, z: -100 }}
                                    animate={{ rotateY: 0, opacity: 1, scale: 1, z: 0 }}
                                    exit={{ rotateY: 90, opacity: 0, scale: 0.8, z: -100 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src="/compNotHappy.png"
                                        alt="Switch Theme"
                                        width={150}
                                        height={150}
                                        className="drop-shadow-xl"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <ProjectSliderSlider />


        </div>

    )
}

export default ProjectSliderWrapper