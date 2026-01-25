"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Cameraman = () => {
    return (
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#f0f0f0" />
            <path d="M0 40H400M0 80H400M0 120H400M0 160H400M0 200H400M0 240H400M0 280H400M0 320H400M0 360H400" stroke="#e0e0e0" stroke-width="1" />
            <path d="M40 0V400M80 0V400M120 0V400M160 0V400M200 0V400M240 0V400M280 0V400M320 0V400M360 0V400" stroke="#e0e0e0" stroke-width="1" />

            <rect x="75" y="75" width="250" height="210" rx="4" fill="white" />
            <rect x="160" y="280" width="80" height="50" fill="white" />

            <rect x="80" y="80" width="240" height="200" rx="2" fill="white" stroke="black" stroke-width="8" />

            <rect x="105" y="105" width="190" height="130" fill="#00FF41" stroke="black" stroke-width="6" />

            <circle cx="160" y="160" r="18" fill="white" stroke="black" stroke-width="6" />
            <circle cx="160" y="160" r="6" fill="black" />

            <circle cx="240" y="160" r="18" fill="white" stroke="black" stroke-width="6" />
            <circle cx="240" y="160" r="6" fill="black" />

            <path d="M180 205H220" stroke="black" stroke-width="8" stroke-linecap="round" />

            <rect x="165" y="280" width="70" height="40" fill="white" stroke="black" stroke-width="8" />
            <path d="M130 320H270" stroke="black" stroke-width="10" stroke-linecap="round" />

            <rect x="115" y="248" width="40" height="6" fill="black" />
        </svg>
    )
}

export default Cameraman
