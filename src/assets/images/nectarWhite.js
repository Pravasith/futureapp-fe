import React from "react"

//typical import of gsap methods
import {TweenMax, Power2, TimelineLite} from "gsap";
//or get to the parts that aren't included inside TweenMax (works as of 1.19.1):
import Draggable from "gsap/Draggable";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export const NectarWhite = () => {

    const bubble = new TimelineLite()

    const bubbles = () => {
        // set initial
        bubble.set("#leftCircle1", {transformOrigin: "50% 50%",  scale:1, opacity:0})
        .set("#leftCircle2", {transformOrigin: "50% 50%",  scale:1, opacity:0})
        .set("#rightCircle", {transformOrigin: "50% 50%",  scale:1, opacity:0})

        bubble.set("#leftCircle1White", {opacity:1})
        .to("#leftCircle1White", 0.5, {transformOrigin: "50% 50%",  scale:1.5, y:-10})
        .set("#leftCircle1White", {opacity:0, scale:1, y:0})
        .set("#rightCircleWhite", {opacity:1}, "-=0.25")
        .to("#rightCircleWhite", 0.5, {transformOrigin: "50% 50%",  scale:1.5, y:-10}, "-=0.25")
        .set("#rightCircleWhite", {opacity:0, scale:1, y:0})
        .set("#leftCircle2White", {opacity:1, scale:1, y:0}, "-=0.25")
        .to("#leftCircle2White",0.5, {opacity:1, scale:1.5, y:-10}, "-=0.25")
        .set("#leftCircle2White", {opacity:0, scale:1, y:0})
        .to("#rightCircleWhite", 1, {transformOrigin: "50% 50%",  scale:1.5,  onComplete: bubbles})

    } 
    bubbles()

    return (
            <svg xmlns="http://www.w3.org/2000/svg" width="15.011" height="21.083"
            viewBox="0 0 15.011 21.083">
                <g id="flask" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10">
                    <path fill="#FF88FF" d="M0.502,9.083 v8.179c0,0-0.183,3.321,2.552,3.321c1.295,0,2.555,0,3.532,0c1.087,0,1.822,0,1.822,0c1.061,0,2.03,0,3.469,0 c2.924,0,2.625-3.321,2.625-3.321V9.083"
                    />
                    <path fill="none" d="M0.502,7.083v10.179 c0,0-0.183,3.321,2.552,3.321c1.295,0,2.555,0,3.532,0c1.087,0,1.822,0,1.822,0c1.061,0,2.03,0,3.469,0 c2.924,0,2.625-3.321,2.625-3.321V7.083"
                    />
                </g>
                <circle opacity="0" fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10" cx="5.585" cy="15.917" r="1.417" id="leftCircle1White"
                />
                <circle opacity="0" fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10" cx="5.585" cy="15.917" r="1.417" id="leftCircle2White"
                />
                <circle opacity="0" fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10" cx="10.585" cy="15.917" r="1.417" id="rightCircleWhite"
                />
            </svg>
            )
}