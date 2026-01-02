import React from "react";

const HackWinsLogo = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer hexagon border */}
            <path
                d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
                stroke="#FDC700"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
            />

            {/* Inner glow effect */}
            <path
                d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
                stroke="#CE1126"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                filter="url(#glow)"
            />

            {/* H letter */}
            <path
                d="M 30 35 L 30 65 M 30 50 L 45 50 M 45 35 L 45 65"
                stroke="#FDC700"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* W letter */}
            <path
                d="M 52 35 L 57 65 L 62.5 45 L 68 65 L 73 35"
                stroke="#CE1126"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Glow filter definition */}
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    );
};

export default HackWinsLogo;