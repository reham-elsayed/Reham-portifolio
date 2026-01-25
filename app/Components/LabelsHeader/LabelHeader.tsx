'use client'
import React, { useEffect } from 'react'
import YellowLabel from '../Icons/YellowLabel'
import RedLabel from '../Icons/RedLabel'
import BlueLabel from '../Icons/BlueLabel'
import { useAnimate } from 'framer-motion'

const LabelHeader = () => {


    const [scope, animate] = useAnimate()
    useEffect(() => {
        async function sequence() {
            await animate(scope.current, { translateY: 1000 }, { duration: 5 })
            await animate(scope.current, { translateX: 200, translateY: 500 }, { duration: 2 })
            await animate(scope.current, { translateX: 1000, translateY: 200 }, { duration: 2 })
        }
        sequence()
    }, [])
    return (
        <div className='absolute  inset-0 flex justify-center items-center w-full h-dvh bg-[var(--white-smoke)] overflow-hidden'>
            <div
                ref={scope}
                className='absolute top-5 left-3 translate-x-[1000px] translate-y-[200px] -rotate-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                <BlueLabel />
            </div>
            <div
                ref={scope}
                className='absolute top-5 left-3 translate-x-[200px] translate-y-[500px] rotate-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                <RedLabel />
            </div>

            <div
                ref={scope}
                className='absolute top-[600px] left-[980px] rotate-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                <YellowLabel />
            </div>

        </div>
    )
}

export default LabelHeader