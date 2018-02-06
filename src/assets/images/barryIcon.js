import React from "react"

//typical import of gsap methods
import { TimelineLite} from "gsap";


export const BarryIcon = () => {

    const eyesTl = new TimelineLite()

    const eyeTween = () => { 
        // blinks eyes every 3 seconds forever
        eyesTl.to("#eyes", 0.3, {transformOrigin: "50% 50%",  scaleY:0})
        .to("#eyes", 0.3, {transformOrigin: "50% 50%",  scaleY:1})
        .to("#eyes", 2.5, {transformOrigin: "50% 50%",  scaleY:1,  onComplete: eyeTween})
     }
     eyeTween()

    return (
                < svg className="barryIcon"  xmlns='http://www.w3.org/2000/svg' width='35.703' height='40.041'
                viewBox='0 0 29.703 36.041'>
                    <ellipse fill='#FFF' stroke='#00123F' strokeMiterlimit='10' cx='14.852'
                    cy='18.02' rx='14.352' ry='17.521' id='face' />
                    <g id='eyes' fill='#00123F' stroke='#00123F' strokeLinecap='round' strokeLinejoin='round'
                    strokeMiterlimit='10'>
                        <ellipse cx='8.538' cy='16.947' rx='1.81' ry='1.073' />
                        <ellipse cx='21.702' cy='16.947' rx='1.81' ry='1.073' />
                    </g>
                </svg>
    )
}