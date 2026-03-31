'use client'
import React from 'react'

interface CounterProps {
    counter: number
}

const Counter = ({ counter }: CounterProps) => {
    const isComplete = counter === 100

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '6px',
            flexShrink: 0,
            paddingLeft: '16px',
        }}>
            {/* Main number */}
            <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '2px',
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 900,
                lineHeight: 1,
                color: '#000',
                letterSpacing: '-3px',
                textShadow: isComplete
                    ? '4px 4px 0px #F4F04E'
                    : '3px 3px 0px #F4F04E',
                transition: 'text-shadow 0.4s ease',
            }}>
                <span style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
                    {counter}
                </span>
                <span style={{
                    fontSize: 'clamp(1.4rem, 3.5vw, 3rem)',
                    marginBottom: '6px',
                    fontWeight: 900,
                    letterSpacing: '-1px',
                    opacity: 0.75,
                }}>
                    %
                </span>
            </div>

            {/* Label badge */}
            <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '9px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: isComplete ? '#fff' : '#000',
                background: isComplete ? '#000' : 'transparent',
                borderTop: isComplete ? 'none' : '2px solid #000',
                padding: isComplete ? '3px 8px' : '4px 2px 0 2px',
                transition: 'color 0.3s ease, background 0.3s ease, border 0.3s ease, padding 0.3s ease',
                whiteSpace: 'nowrap',
            }}>
                {isComplete ? 'READY ✓' : 'LOADING'}
            </div>
        </div>
    )
}

export default Counter
