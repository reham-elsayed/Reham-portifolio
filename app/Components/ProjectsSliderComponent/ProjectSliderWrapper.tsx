'use client'
import React from 'react'
import TextChangeColorSize from '../TextChaingeColorSize/TextChangeColorSize'
import { useAnimate } from 'framer-motion'
import ProjectSliderSlider from './ProjectSliderSlider'


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
            text="Experience"
                colorStart={isDark ? "rgb(79, 82, 190)" : "#292f33"}
                colorEnd={isDark ? "rgb(79, 82, 190)" : "#292f33"}
            />
          
            <ProjectSliderSlider />


        </div>

    )
}

export default ProjectSliderWrapper