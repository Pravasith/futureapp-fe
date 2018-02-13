import React from 'react'

export const CloseButtonTrippy = () => {

    return (

        <svg xmlns="http://www.w3.org/2000/svg" width="21.25" height="21.25" viewBox="0 0 21.25 21.25">
        <g id="trippyCloseBtn">
            <linearGradient id="SVGID_1_Trippy" gradientUnits="userSpaceOnUse" y1="10.625"
            x2="21.25" y2="10.625" gradientTransform="rotate(45.001 10.625 10.625)">
                <stop offset="0" stopColor="#ff94f3" />
                <stop offset="1" stopColor="#94e8ff" />
            </linearGradient>
            <circle fill="#333" stroke="url(#SVGID_1_Trippy)" strokeWidth="2" strokeMiterlimit="10"
            cx="10.625" cy="10.625" r="9.625" />
        </g>
        <g id="rotateSticks" fill="none" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" strokeMiterlimit="10">
            <line stroke="#FF94F3" x1="6.827" y1="7.188" x2="14.452" y2="14.813" />
            <line stroke="#94E8FF" x1="14.452" y1="7.188" x2="6.827" y2="14.813" />
        </g>
    </svg>
    )
}