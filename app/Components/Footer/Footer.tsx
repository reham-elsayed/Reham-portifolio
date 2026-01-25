'use client';
import React, { useRef, useEffect, useState } from 'react'
import SVGComp from '../SVGComp/SVGComp'
import CircularText from '../CircularText/CircularText'
import FloatingIcons from '../FloatingIcons/FloatingIcons'

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the footer is more than 10% visible, activate icons
                // Adjust threshold as needed
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <div ref={footerRef} className="relative h-screen ">
            <div className='h-screen w-full fixed inset-0 -z-50 bg-[#2A2F33] text-white'>
                <div className='h-screen flex flex-col gap-5 absolute inset-0  justify-end'>
                    <div className='w-[90vw] mx-auto'>
                        <div className='flex justify-between items-center'>
                            <div className=''> phone</div>
                            <div className='relative p-5 flex justify-center items-center'>
                                <CircularText text="REHAM SHIPL • FRONTEND DEVELOPER • " />
                                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                    <SVGComp />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[40vw] text-9xl'>
                        REHAM SHIPL
                    </div>

                </div>
            </div>
            <FloatingIcons isVisible={isVisible} />
        </div>
    )
}

export default Footer
