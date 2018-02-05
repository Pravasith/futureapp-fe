import React from "react"

//typical import of gsap methods
import {TweenMax, Power2, TimelineLite} from "gsap";
//or get to the parts that aren't included inside TweenMax (works as of 1.19.1):
import Draggable from "gsap/Draggable";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export const WissenWhite = () => {

    const flames = new TimelineLite()

    const flame = () => {
        // flames
        // .to("#whiteFire", 0.2, {opacity:0})
        // console.log("enter")eyesTl.to("#eyes", 0.3, {transformOrigin: "50% 50%",  scaleY:0})
        flames.to(".outerPath", 0.3, {transformOrigin: "50% 100%",  scale:0.85})
        .to(".outerPath", 0.3, {transformOrigin: "50% 100%",  scale:1})
        .to(".innerPath", 0.3, {transformOrigin: "50% 100%",  scale:1},"-=0.3")
        .to(".innerPath", 0.3, {transformOrigin: "50% 100%",  scale:1.05,  onComplete: flame})

    } 
    flame()

    return (
            <svg id='whiteFire' xmlns='http://www.w3.org/2000/svg' width='15.562' height='20.65'
            viewBox='0 0 15.562 20.65'>
                <path className="outerPath" fill='#FBB03B' stroke='#FFF' strokeLinecap='round' strokeLinejoin='round'
                strokeMiterlimit='10' d='M5.711,3.758 c1.302-3.399-2.419-1.871-2.419-1.871c5.684-5.264,6.392,6.146,6.392,6.146c3.133-3.357,5.378-0.41,5.378-0.41 c-3.981-1.105-1.614,3.473-1.614,3.473c0.965,1.7,1.575,2.188,0.843,4.843c-0.733,2.657-2.831,3.479-2.831,3.479 c-0.861,0.407-1.798,0.646-2.756,0.713c0.638-0.126,3.184-0.794,2.927-3.357c-0.294-2.927-4.085-2.452-2.748-5.595 c0,0-4.191,1.147-2.03,3.729c0,0-1.311-0.172-1.834-1.147c0,0-3.191,6.014,3.397,6.385c-2.543,0.089-5.222-1.052-7.163-3.663 C-1.5,12.787,4.061,8.065,5.711,3.758z'
                />
                <path className="innerPath" fill='#FFF' stroke='#FFF' strokeLinecap='round' strokeLinejoin='round'
                strokeMiterlimit='10' d='M11.63,16.773 c-0.293-2.921-4.066-2.456-2.755-5.575c-0.014-0.002-0.027-0.004-0.042-0.006c-0.459,0.138-4.005,1.298-1.981,3.716 c0,0-1.311-0.172-1.834-1.147c0,0-2.013,3.8,0.474,5.544c0.795,0.323,1.701,0.507,2.664,0.507c0.771,0,1.505-0.118,2.175-0.33 C11.086,18.989,11.769,18.161,11.63,16.773z'
                />
            </svg>
            )
}