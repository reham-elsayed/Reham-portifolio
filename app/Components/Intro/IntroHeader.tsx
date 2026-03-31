'use client'
import React, { useState, useEffect } from 'react'
import Counter from './Counter'
import Logo from '../Icons/Logo'
import IntroIcons from './IntroIcons'

interface IntroHeaderProps {
    onCountComplete?: () => void
    startCounting?: boolean   // set true by IntroWrapper after envelope finishes
}

const IntroHeader = ({ onCountComplete, startCounting = false }: IntroHeaderProps) => {
    const [counter, setCounter] = useState(0)

    // Only start counting after IntroWrapper signals envelope is done
    useEffect(() => {
        if (!startCounting) return
        const timeOut = setTimeout(() => {
            const interval = setInterval(() => {
                setCounter((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval)
                        return 100
                    }
                    return prev + 1
                })
            }, 50)
            return () => clearInterval(interval)
        }, 300)
        return () => clearTimeout(timeOut)
    }, [startCounting])

    // Fire callback exactly once when counter reaches 100
    useEffect(() => {
        if (counter === 100) {
            onCountComplete?.()
        }
    }, [counter, onCountComplete])

    return (
        <div className='relative flex justify-center items-center w-full h-dvh bg-[var(--white-smoke)] overflow-hidden'>
            <IntroIcons counter={counter} />

            <div className='h-full w-[90vw] mx-auto absolute inset-0 flex justify-center items-center z-10'>

                {/* ── Neo-brutalist card matching WindowFrame style ── */}
                <div style={{
                    background: '#fff',
                    border: '3px solid #000',
                    boxShadow: '6px 6px 0px 0px #000',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    width: '80vw',
                    minWidth: '280px',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                }}>
                    {/* ── Yellow header bar ── */}
                    <div style={{
                        background: '#F4F04E',
                        borderBottom: '3px solid #000',
                        padding: '6px 10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <span style={{
                            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            fontSize: '13px',
                            letterSpacing: '1px',
                        }}>
                            reham.elsayed — portfolio.init()
                        </span>

                        {/* macOS-style traffic lights */}
                        <div style={{ display: 'flex', gap: '6px' }}>
                            {['#ff5f57', '#febc2e', '#28c840'].map((color, i) => (
                                <div key={i} style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    backgroundColor: color,
                                    border: '1.5px solid rgba(0,0,0,0.4)',
                                }} />
                            ))}
                        </div>
                    </div>

                    {/* ── Card content ── */}
                    <div style={{
                        padding: '20px 28px',
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        {/* Logo */}
                        <div style={{
                            flexShrink: 0,
                            width: 'clamp(40px, 6vw, 72px)',
                            height: 'clamp(30px, 4.5vw, 54px)',
                        }}>
                            <Logo />
                        </div>

                        {/* Text fields */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0px',
                            flex: 1,
                            paddingLeft: '16px',
                            justifyContent: 'flex-end',
                        }}>
                            <div style={{
                                borderBottom: '1.5px solid #000',
                                paddingTop: '10px',
                                paddingBottom: '6px',
                                width: '100%',
                                fontSize: '16px',
                                fontFamily: "'Courier New', monospace",
                                color: '#333',
                            }}>
                                rehamshipl445@gmail.com
                            </div>
                            <div style={{
                                borderBottom: '1.5px solid #000',
                                paddingTop: '10px',
                                paddingBottom: '6px',
                                width: '100%',
                                fontSize: '16px',
                                fontFamily: "'Inter', sans-serif",
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                                fontWeight: 700,
                                color: counter === 100 ? '#000' : '#555',
                                transition: 'color 0.4s ease',
                            }}>
                                {counter === 100 ? '✓  ready' : 'loading...'}
                            </div>
                        </div>

                        {/* Counter */}
                        <Counter counter={counter} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroHeader
