'use client'
import React, { useState, useEffect } from 'react'
import Counter from './Counter'
import Logo from '../Icons/Logo'
import IntroIcons from './IntroIcons'

const IntroHeader = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            const interval = setInterval(() => {
                setCounter((prev) => (prev < 100 ? prev + 1 : prev));
            }, 50); // Speed up for better testing/visuals, adjust as needed
            return () => clearInterval(interval);
        }, 300);
        return () => clearTimeout(timeOut);
    }, []);

    return (
        <div className='relative flex justify-center items-center w-full h-dvh bg-[var(--white-smoke)] overflow-hidden'>
            <IntroIcons counter={counter} />
            <div className='h-full w-[90vw] mx-auto absolute inset-0 flex justify-center items-center z-10'>
                <div className='h-[15vw] w-[90vw] rounded-md justify-end p-6 flex items-center bg-[var(--black)]'>
                    <div className=' w-[80vw] h-full rounded-md flex justify-end items-center bg-[var(--white-smoke)] p-11 '>
                        <div className='h-full w-40'><Logo /></div>
                        <div className='flex flex-col gap-2 w-full h-full relative ps-6 pb-2.5 justify-end flex-stretch'>
                            <div className='border-b-[1px] pt-2 pb-[.2rem] border-b-black  w-full '>
                                <div> rehamshipl445@gmail.com</div>
                            </div>
                            <div className='header border-b-[1px] pt-2 pb-[.2rem] border-b-black  w-full '>
                                <div>loading...</div>
                            </div>
                            <Counter counter={counter} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroHeader
