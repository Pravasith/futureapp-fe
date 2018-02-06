import React from "react"

//typical import of gsap methods
import {TimelineLite} from "gsap";

export const CourageWhite = () => {

    const courage = new TimelineLite()
    // Setting initial values
    courage.set("#courageWhite", {rotation: 0, transformOrigin:"50% 50%"})

    const courageSpin = () => {
        // flames
        // .to("#whiteFire", 0.2, {opacity:0})
        // console.log("enter")eyesTl.to("#eyes", 0.3, {transformOrigin: "50% 50%",  scaleY:0})
        courage.to("#courageWhite", 0.5, {rotation: 360, transformOrigin: "50% 50%",  scale:0.85})
        .to("#courageWhite", 0, {rotation: 0,transformOrigin: "50% 50%",  scale:0.85})
        .to("#courageWhite", 0.1, {rotation: 0,transformOrigin: "50% 50%",  scale:1})
        .to("#courageWhite", 0.5, {rotation: 0,transformOrigin: "50% 50%",  scale:1, onComplete:courageSpin})
        

    } 
    courageSpin()

    return (
            <svg id="courageWhite" xmlns="http://www.w3.org/2000/svg" width="21.057" height="21.057"
            viewBox="0 0 21.057 21.057">
                <polygon fill="#FFFF00" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10" points="13.163,13.016 20.557,10.352 12.872,7.848 10.35,0.5 7.977,8.14 0.5,10.707 7.996,13.035 10.705,20.557"
                />
            </svg>
            )
}