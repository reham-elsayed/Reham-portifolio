'use client'
import React from 'react'

const ParallexCardSideImage = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-[#292F33] text-[#E5E2D6] font-bold">
            <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] opacity-50">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="25" cy="50" r="5" fill="currentColor" />
                <circle cx="75" cy="50" r="5" fill="currentColor" />
            </svg>
        </div>
    )
}

export default ParallexCardSideImage
