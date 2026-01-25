import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import ParallexCardSideImage from './ParallexCardSideImage'
import ExpertsSVG from './ExpertsSVG'

const ParallexCards = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Cassette perspective tilt
    const cassetteRotateX = useTransform(scrollYProgress, [0, 1], [0, 5])
    const cassetteRotateY = useTransform(scrollYProgress, [0, 1], [-2, 2])

    // Card 1
    const y1 = useTransform(scrollYProgress, [0, 0.2], ["0%", "0%"])
    const opacity1 = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    // Card 2
    const y2 = useTransform(scrollYProgress, [0.3, 0.5], ["200%", "0%"])
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
    const scale2 = useTransform(scrollYProgress, [0.5, 0.6], [1.2, 1])
    const rotate2 = useTransform(scrollYProgress, [0.5, 0.6], [6, 0])
    // Card 3
    const y3 = useTransform(scrollYProgress, [0.6, 0.8], ["200%", "0%"])
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])
    const scale3 = useTransform(scrollYProgress, [0.7, 0.8], [1.2, 1])
    const rotate3 = useTransform(scrollYProgress, [0.7, 0.8], [-6, 0])

    const ExpertCard = ({ title, category, list, url, style, colorClass }: any) => (
        <motion.div
            style={style}
            className="layout-etiquette-expertise w-[38vw]"
        >
            <div className="wrapper-titre__etiquette">
                <h3 className={`text-3xl font-bold ${colorClass}`}>{title}</h3>
            </div>
            {list.map((item: string, i: number) => (
                <div key={i} className="wrapper-content__etiquette">
                    <div className="txt-expertise">{item}</div>
                </div>
            ))}
            <div className="wrapper-btn-etiquette">
                <a href={url} className="btn-arrow w-inline-block">
                    <div className="txt-btn__arrow-1">Découvrir ↗</div>
                    <div className="txt-btn__arrow-2">Découvrir ↗</div>
                </a>
            </div>
        </motion.div>
    )

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-transparent">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Main Cassette Shell */}
                <motion.div
                    style={{
                        rotateX: cassetteRotateX,
                        rotateY: cassetteRotateY,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative w-[75vw] h-[36vw] bg-black  border-[#e5e2d633] border-2 shadow-2xl flex items-center"
                >
                    <div className="betacam">
                        <div className="top-bettacam">
                            <div className="bottom-top-bettacam"></div>
                            <ExpertsSVG />
                        </div>

                        <div className="flex w-full h-full">
                            {/* Left Side: Reels */}
                            <div className="w-[45%] h-full relative overflow-hidden ">
                                <ParallexCardSideImage />
                            </div>

                            {/* Right Side: Label Area */}
                            <div className="w-[55%] h-full relative flex items-center justify-center p-[2vw]">
                                <div className="relative  w-full h-full flex flex-col items-center justify-center ">
                                    <ExpertCard
                                        title="Production audiovisuelle & cinéma"
                                        category="Production"
                                        colorClass="purpple"
                                        list={["écriture", "développement", "pré-production", "production", "post-production"]}
                                        url="/productions"
                                        style={{ y: y1 }}
                                    />
                                    <ExpertCard
                                        title="Labo de post-production"
                                        category="Post-Prod"
                                        colorClass="yellow"
                                        list={["Coordinateur de post-production", "montage image / VFX / étalonnage", "motion design / génériques", "sous-titrage / Master-DCP-PAD"]}
                                        url="/labo-de-post-production"
                                        style={{ y: y2, scale: scale2, rotate: rotate2 }}
                                    />
                                    <ExpertCard
                                        title="Production de service"
                                        category="Services"
                                        colorClass="red"
                                        list={["LOCATION DE SALLE", "de montage et d'étalonnage"]}
                                        url="/production-de-service"
                                        style={{ y: y3, scale: scale3, rotate: rotate3 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ParallexCards
