import React from "react"

//typical import of gsap methods
import {TimelineLite} from "gsap";

export const NectarBlackBig = () => {

    const bubble = new TimelineLite()

    const bubbles = () => {
        // set initial
        bubble.set("#leftCircle1", {transformOrigin: "50% 50%",  scale:1, opacity:0})
        .set("#leftCircle2", {transformOrigin: "50% 50%",  scale:1, opacity:0})
        .set("#rightCircle", {transformOrigin: "50% 50%",  scale:1, opacity:0})

        bubble.set("#leftCircle1Black", {opacity:1})
        .to("#leftCircle1Black", 0.5, {transformOrigin: "50% 50%",  scale:1.5, y:-10})
        .set("#leftCircle1Black", {opacity:0, scale:1, y:0})
        .set("#rightCircleBlack", {opacity:1}, "-=0.25")
        .to("#rightCircleBlack", 0.5, {transformOrigin: "50% 50%",  scale:1.5, y:-10}, "-=0.25")
        .set("#rightCircleBlack", {opacity:0, scale:1, y:0})
        .set("#leftCircle2Black", {opacity:1, scale:1, y:0}, "-=0.25")
        .to("#leftCircle2Black",0.5, {opacity:1, scale:1.5, y:-10}, "-=0.25")
        .set("#leftCircle2Black", {opacity:0, scale:1, y:0})
        .to("#rightCircleBlack", 1, {transformOrigin: "50% 50%",  scale:1.5,  onComplete: bubbles})

    } 
    bubbles()

    return (
            <svg xmlns="http://www.w3.org/2000/svg" width="30.022" height="42.166"
            viewBox="0 0 15.011 21.083">
                <g id="flask" stroke="#333" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10">
                    <path fill="#FF88FF" d="M0.502,9.083 v8.179c0,0-0.183,3.321,2.552,3.321c1.295,0,2.555,0,3.532,0c1.087,0,1.822,0,1.822,0c1.061,0,2.03,0,3.469,0 c2.924,0,2.625-3.321,2.625-3.321V9.083"
                    />
                    <path fill="none" d="M0.502,7.083v10.179 c0,0-0.183,3.321,2.552,3.321c1.295,0,2.555,0,3.532,0c1.087,0,1.822,0,1.822,0c1.061,0,2.03,0,3.469,0 c2.924,0,2.625-3.321,2.625-3.321V7.083"
                    />
                </g>
                <circle opacity="0" fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10" cx="5.585" cy="15.917" r="1.417" id="leftCircle1Black"
                />
                <circle opacity="0" fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10" cx="5.585" cy="15.917" r="1.417" id="leftCircle2Black"
                />
                <circle opacity="0" fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10" cx="10.585" cy="15.917" r="1.417" id="rightCircleBlack"
                />
            </svg>
            )
}