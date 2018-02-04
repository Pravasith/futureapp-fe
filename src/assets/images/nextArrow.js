import React from "react"

export const NextArrow = () => {

    return (
        <svg id='next' xmlns='http://www.w3.org/2000/svg' width='30.572' height='30.572'
        viewBox='0 0 30.572 30.572'>
            <radialGradient id='SVGID_arrowNext_' cx='15.286' cy='15.286' r='15.286' gradientUnits='userSpaceOnUse'>
                <stop offset='0' stopColor='#fff' />
                <stop offset='1' stopColor='#fff' stopOpacity='0' />
            </radialGradient>
            <circle opacity='.16' fill='url(#SVGID_arrowNext_)' cx='15.286' cy='15.286' r='15.286'
            />
            <polygon fill='none' stroke='#FFF' strokeLinecap='round' strokeLinejoin='round'
            strokeMiterlimit='10' points='10.286,8.786 10.286,21.786 21.786,15.286'
            />
        </svg>
    )
}