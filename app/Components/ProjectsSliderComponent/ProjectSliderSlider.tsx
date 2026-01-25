'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'
import ThreeColumnGrid from '../ThreeColumnGrid/ThreeColumnGrid'
import { useLenis } from '../LenisSetup/LenisSetup'
import projects from '@/public/projects.json'
import Image from 'next/image'

const ProjectSliderSlider = () => {
    const [openDetails, setOpenDetails] = useState(false)
    const [index, setIndex] = useState(0)
    const ref = useRef(null)
    const { stop, start } = useLenis()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"])
    const [frozenX, setFrozenX] = useState<string | null>(null)
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const handleClick = (e, itemIndex) => {
        const element = e.currentTarget // Access the moving element
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = element.getBoundingClientRect().x; // Element's left edge position
        console.log(x)
        setIndex(itemIndex);
        setOpenDetails(prev => !prev);
        setCoordinates({ x, y: 0 }); // Store the starting X position
    };
    // Freeze the x position when details open, resume when closed
    useEffect(() => {
        if (openDetails) {
            setFrozenX(xTransform.get())
        } else {
            setFrozenX(null)
        }
    }, [openDetails, xTransform])

    const x = frozenX !== null ? frozenX : xTransform

    // Stop Lenis scroll when details panel is open
    useEffect(() => {
        if (openDetails) {
            stop()
        } else {
            start()
        }
    }, [openDetails, stop, start])

    return (
        <div
            ref={ref}
            className='relative h-[300vh] w-full'>
            {/* Sticky container that stays in view while scrolling */}
            <motion.div
                // 1. Define variants based on open/closed state
                variants={{
                    closed: {
                        scale: 1,
                        rotateX: 0,
                        opacity: 1,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    },
                    open: {
                        scale: 0.85, // Shrink slightly
                        rotateX: 10, // Rotate back for perspective
                        opacity: .99, // Fade slightly
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }
                }}
                // 2. Control the state with openDetails
                animate={openDetails ? "open" : "closed"}
                // 3. Add necessary perspective styling
                style={{ perspective: 1000 }}
                className='sticky top-0 h-screen  w-full flex flex-col justify-center items-stretch gap-6  pb-[2.4vw] origin-top overflow-hidden'
            >
                <div className='w-full mx-auto  md:w-[90vw] h-[60vh] flex'>
                    <div className='relative h-full  '>
                        <motion.div
                            style={{ x }}
                            className='relative  flex justify-center h-full items-stretch mb-4'>
                            {projects.map((project, i) =>
                                <div
                                    onClick={(e) => handleClick(e, i)}
                                    key={i}
                                    className='h-full w-full relative'>

                                    <div
                                        style={(() => {
                                            const startX = coordinates.x;
                                            const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
                                            let xTranslate = 0;

                                            if (openDetails && i > index) {
                                                // MOVE ITEMS AFTER CLICKED ITEM OFF SCREEN RIGHT (example logic)
                                                xTranslate = viewportWidth - startX;
                                            } else if (openDetails && i <= index) {
                                                // MOVE ITEMS BEFORE CLICKED ITEM OFF SCREEN LEFT (example logic)
                                                xTranslate = -startX;
                                            }

                                            return {
                                                transform: `translateX(${xTranslate}px)`,
                                            };
                                        })()}
                                        className={` w-full h-full 
                                         w-auto transition-all duration-1000 relative `}
                                    >
                                        {/* Card Content - Animated out when open */}
                                        <div
                                            className={`
                                                gap-1 relative bg-[#e5e2d6] border-2 border-[#292f33] rounded-lg p-4 h-full flex flex-col 
                                                hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0px_#292f33] hover:shadow-[6px_6px_0px_#292f33]
                                                transform
                                                ${openDetails && i === index ? '-translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'}
                                            `}
                                        >
                                            <div className={` h-[200px] relative flex items-center justify-center mb-4 bg-white border-2 border-[#292f33] rounded-md p-2`}>
                                                <Image
                                                    src={project.images[0]}
                                                    alt={project.name}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div
                                                className='flex-1 flex flex-col items-center justify-start text-center mb-6'>
                                                <h3 className='text-2xl font-black text-[#292f33] uppercase antialiased mb-1 tracking-tight'>{project.name}</h3>
                                                <p className='text-sm text-[#292f33]/70 italic font-medium leading-relaxed max-w-[90%]'>{project.excerpt}</p>
                                            </div>
                                            <div className='flex flex-wrap items-center justify-center gap-1.5 mt-auto'>
                                                {project.technologies_tools.map(tool => (
                                                    <span
                                                        className='px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-[#e5e2d6] border border-[#292f33] rounded-sm bg-[#292f33] hover:bg-[#ddab45] transition-colors duration-200 cursor-default'
                                                        key={tool}
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                            {/* Decorative corner accent */}
                                            <div className='absolute top-2 right-2 w-2 h-2 bg-[#292f33] rounded-full opacity-20'></div>
                                        </div>

                                        {/* Expanded Details Block */}
                                        {openDetails && i === index && (
                                            <div className="w-[90vw] h-[120%] col-span-4 absolute  inset-2 flex flex-col">
                                                {/* Visual Cue */}
                                                <div className="w-full text-center py-2 ">
                                                    <p className="text-sm font-bold text-[#4f52be] tracking-wider uppercase">
                                                        Click anywhere to go back to projects
                                                    </p>
                                                </div>
                                                <div className="flex-grow w-full h-full ">
                                                    <ThreeColumnGrid projectid={project.id} />
                                                </div>
                                            </div>
                                        )}
                                    </div>


                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default ProjectSliderSlider