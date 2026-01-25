
'use client'
import React from 'react'
import Percent from '../Icons/Percent';

interface CounterProps {
    counter: number;
}

const Counter = ({ counter }: CounterProps) => {
    return (
        <div className='absolute right-0 -top-3 header '>
            <div className='flex items-center text-[6vw] text-blue-800 font-extrabold '>
                <span>{counter}</span>
                <Percent fill='#193cb8' width='9rem' height='9rem' />
            </div>
        </div>
    )
}

export default Counter
