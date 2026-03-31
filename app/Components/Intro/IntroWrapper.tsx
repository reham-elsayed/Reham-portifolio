'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { useLenis } from '../LenisSetup/LenisSetup'
import FolderCoverComponent from '../FolderCoverComponent/FolderCoverComponent'
import { motion, useAnimate } from 'framer-motion'
import IntroHeader from './IntroHeader'

const IntroWrapper = () => {
    const [show, setShow] = useState(true)
    const [startCounting, setStartCounting] = useState(false)  // gates the counter
    const { stop, start } = useLenis()
    const [scope, animate] = useAnimate()
    const [scope1, animate1] = useAnimate()
    const [scope2, animate2] = useAnimate()

    // ── Sole owner of the exit sequence ──────────────────────────────────────
    // Called by IntroHeader once the counter hits 100.
    // 1 s pause → slide entire intro screen DOWN → enable scroll.
    const handleCountComplete = useCallback(() => {
        setTimeout(async () => {
            if (scope2.current) {
                await animate2(
                    scope2.current,
                    { y: '100vh' },                          // slide DOWN, revealing hero
                    { duration: 2.2, ease: [0.65, 0, 0.35, 1] }
                )
            }
            start()
            document.body.style.overflow = ''
            setShow(false)
        }, 1000)
    }, [animate2, scope2, start])

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        async function runEnvelopeAnimation() {
            stop()
            // ── Envelope sequence ─────────────────────────────────────────────
            // Start both layers in parallel but fire the counter gate
            // as soon as the FolderCoverComponent (5 s) exits —
            // no need to wait the full 7 s for the black bg.
            animate1(scope1.current, { translateY: -1500, rotate: '-5deg' }, { duration: 7 })
             setStartCounting(true)
            await animate(scope.current, { translateY: 1500 }, { duration: 5 })
            // FolderCover gone → card starting to emerge → begin counting         
            // ⚠️ Do NOT call start() / setShow() here — handleCountComplete owns the exit.
        }
        runEnvelopeAnimation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animate, animate1])

    return (
        show && (
            <>
                <div className='absolute inset-0 overflow-hidden h-screen w-full block'>

                    {/* Layer 3 — IntroHeader/card (z-20).
                        Revealed after the envelope layers slide away.
                        Slides DOWN when count=100 to reveal the hero. */}
                    <motion.div
                        ref={scope2}
                        className='absolute inset-0 z-20 layer3'
                    >
                        <IntroHeader
                            onCountComplete={handleCountComplete}
                            startCounting={startCounting}
                        />
                    </motion.div>

                    {/* Layer 1 — black bg (z-30), slides UP during envelope */}
                    <motion.div
                        ref={scope1}
                        className='z-30 absolute inset-0 bg-[var(--black)]'
                    />

                    {/* Layer 2 — FolderCoverComponent (z-40), slides DOWN first */}
                    <motion.div
                        ref={scope}
                        className='z-40 absolute inset-0'
                    >
                        <FolderCoverComponent />
                    </motion.div>

                </div>
            </>
        )
    )
}

export default IntroWrapper