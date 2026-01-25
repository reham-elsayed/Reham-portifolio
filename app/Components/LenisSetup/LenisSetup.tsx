'use client'
import Lenis from 'lenis'
import React, { useEffect, createContext, useContext } from 'react'

type LenisContextType = {
    lenis: Lenis | null
    stop: () => void
    start: () => void
}

const LenisContext = createContext<LenisContextType | null>(null)

export const useLenis = () => {
    const lenisContext = useContext(LenisContext)
    if (!lenisContext) throw new Error("Lenis is not setup")
    return lenisContext
}

const LenisSetup = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = React.useRef<Lenis | null>(null)

    useEffect(() => {
        const lenisInstance = new Lenis({ duration: 2 })
        lenisRef.current = lenisInstance

        function raf(time: number) {
            lenisInstance.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => {
            lenisInstance.destroy()
            lenisRef.current = null
        }
    }, [])

    return (
        <LenisContext.Provider
            value={{
                lenis: lenisRef.current,
                stop: () => lenisRef.current?.stop(),
                start: () => lenisRef.current?.start(),
            }}
        >
            {children}
        </LenisContext.Provider>
    )
}

export default LenisSetup
