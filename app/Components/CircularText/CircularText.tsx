import React from 'react';

interface CircularTextProps {
    text?: string;
    size?: number;
    className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
    text = "REHAM SHIPL • FRONTEND DEVELOPER • ",
    size = 250,
    className = ""
}) => {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <style>
                {`
                    @keyframes slow-spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .animate-slow-spin {
                        animation: slow-spin 20s linear infinite;
                    }
                `}
            </style>
            <svg
                width={size}
                height={size}
                viewBox="0 0 595 595"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full animate-slow-spin"
            >
                <defs>
                    <path id="circlePath" d="M 297.5, 297.5 m -220, 0 a 220,220 0 1,1 440,0 a 220,220 0 1,1 -440,0" />
                </defs>

                {/* Outer Border Circle */}
                <circle cx="297.5" cy="297.5" r="290" stroke="#4F52BE" strokeWidth="4" fill="none" />

                {/* Inner Blue Circle */}
                <circle cx="297.5" cy="297.5" r="190" fill="#4F52BE" />

                <text fill="#E5E2D6" fontSize="58" fontWeight="bold" letterSpacing="0.1em">
                    <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                        {text}
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default CircularText;
