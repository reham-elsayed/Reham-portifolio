"use client"

import { motion, useAnimate, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import hero from "../../../public/heroContent.json"
const AnimatedClipContainer = () => {

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll()
    const maxHeight = typeof window !== "undefined" ? window.innerHeight * 0.5 : 400
    const height = useTransform(scrollYProgress, [0, .2], ["2%", "70%"])
    const width = useTransform(scrollYProgress, [0, .2], ["70%", "80%"])


    const y = useTransform(scrollYProgress, [.1, .2], [0, 150]);//translate down
    const invertedY = useTransform(y, (v) => -v);
    const weight = useTransform(scrollYProgress, [0, .2, .5], [900, 700, 300]); // font weight
    const widthT = useTransform(scrollYProgress, [0, .2, .5], [160, 100, 85]); // font width
    const fontSize = useTransform(scrollYProgress, [0, .5], ["clamp(24px, 4vw, 80px)", "clamp(14px, 1.5vw, 24px)"]); // font size

    return (
        <div className=" bg-[#e5e2d6]">


            <div className="bg-[#e5e2d6] w-[90%]  mx-auto">
                <div className="relative  h-[470vh] ">
                    <div className="   sticky left-0 right-0 top-0 w-full h-[100vh] overflow-hidden flex items-stretch justify-center">

                        <div className="overflow-hidden relative flex flex-col flex-1 items-center self-stretch justify-center " >
                            <div

                                className={`bg-[#e5e2d6] w-full z-10 wrapper-h1 p-3`}>
                                {/* Big scroll space to see effect */}
                                <motion.div
                                    style={{
                                        fontVariationSettings: `"wght" ${weight}`,
                                        fontFamily: "var(--font-inter)",
                                        fontSize: fontSize,
                                        y,
                                        transformStyle: "preserve-3d",
                                    }}
                                    className="text-center hero-txt"
                                >
                                    {hero[0].text2}
                                </motion.div>
                            </div>

                            <div

                                className={`bg-[#e5e2d6] w-full z-10 wrapper-h1 p-3`}>
                                {/* Big scroll space so you can see effect */}
                                <motion.div
                                    style={{
                                        y,
                                        fontVariationSettings: `"wght" ${weight}`,
                                        fontFamily: "var(--font-inter)",
                                        fontSize: fontSize,
                                        transformStyle: "preserve-3d",
                                    }}
                                    className="text-center hero-txt"
                                >
                                    {hero[0].text1}
                                </motion.div>
                            </div>
                            <motion.div
                                style={{ height, width }}
                                transition={{ duration: 50 }}
                                id="clip-container"
                                className=" flex items-center justify-center bg-amber-400  w-[80vw] mx-auto"
                            >

                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                    onEnded={(e) => {
                                        e.currentTarget.currentTime = 0;
                                        e.currentTarget.play();
                                    }}
                                >
                                    <source src="/full2sites.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </motion.div>

                            <div

                                className={`bg-[#e5e2d6] w-full z-10 wrapper-h1 p-3`}>
                                {/* Big scroll space so you can see effect */}
                                <motion.div

                                    style={{
                                        y: invertedY,
                                        fontVariationSettings: `"wght" ${weight}`,
                                        fontFamily: "var(--font-inter)", // must be a variable font
                                        fontSize: fontSize,
                                        transformStyle: "preserve-3d",
                                    }}
                                    transition={{ duration: 50 }}
                                    className="text-center hero-txt"
                                >
                                    {hero[0].text4}
                                </motion.div>
                            </div>
                            <div

                                className={`bg-[#e5e2d6] w-full z-10 wrapper-h1 p-3`}>
                                {/* Big scroll space so you can see effect */}
                                <motion.div

                                    style={{
                                        y: invertedY,
                                        fontVariationSettings: `"wght" ${weight}`,
                                        fontFamily: "var(--font-inter)", // must be a variable font
                                        fontSize: fontSize,
                                        transformStyle: "preserve-3d",
                                    }}
                                    transition={{ duration: 50 }}
                                    className="text-center hero-txt"
                                >
                                    {hero[0].text3}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedClipContainer
