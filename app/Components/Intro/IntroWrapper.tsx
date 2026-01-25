'use client'
import React, { useEffect, useState } from 'react'
import { useLenis } from '../LenisSetup/LenisSetup'
import FolderCoverComponent from '../FolderCoverComponent/FolderCoverComponent'
import { motion, useAnimate } from 'framer-motion'
import IntroHeader from './IntroHeader'
const IntroWrapper = () => {
    const [display, setDisplay] = useState("")
    const [show, setShow] = useState(true)
    const { stop, start } = useLenis()
    const [scope, animate] = useAnimate()
    const [scope1, animate1] = useAnimate()
    const [scope2, animate2] = useAnimate()
    useEffect(() => {
        document.body.style.overflow = "hidden"
        async function handleOnLoadAnimation() {
            stop()
            // await animate(scope.current, { translateY: 1500, opacity: .5 }, { duration: 5 })
            // await animate1(scope1.current, { translateY: -1500, rotate: "-5deg", opacity: .5 }, { duration: 2 })
            await Promise.all([
                animate(scope.current, { translateY: 1500 }, { duration: 5 }),
                animate1(scope1.current, { translateY: -1500, rotate: "-5deg" }, { duration: 7 }),
            ]);
            await animate2(scope2.current, { translateY: 1500 }, { duration: 5, delay: 10, onComplete: () => setShow(false) })
            start()
            document.body.style.overflow = ""

        }
        handleOnLoadAnimation()
    }, [animate, animate1, animate2])



    return (
        show && (
            <>
                <div className={`absolute inset-0 overflow-hidden h-screen w-full block ${display}`}>
                    <motion.div
                        ref={scope1}
                        className='z-30 absolute inset-0 bg-[var(--black)]'
                    >

                    </motion.div>
                    <motion.div
                        ref={scope}
                        className='z-40 absolute inset-0'
                    >
                        <FolderCoverComponent />
                    </motion.div>

                    <motion.div
                        ref={scope2}
                        className='absolute inset-0 z-20 layer3'>
                        <IntroHeader />
                    </motion.div>
                </div>
            </>
        )
    )




}

export default IntroWrapper