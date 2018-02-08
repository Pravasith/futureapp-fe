import React from "react"

//typical import of gsap methods
import { TimelineLite} from "gsap";


export const Bulb = () => {

    const glower = new TimelineLite()

    const glow = () => { 
        // blinks eyes every 3 seconds forever
        glower
        .set("#bgdGlow",  {transformOrigin: "50% 50%",  scale:0})
        .set("#bulbFill",  {transformOrigin: "50% 50%",  opacity:0.3})
        
        .to("#glowLines", 0.1, {opacity: "0"})
        .to("#glowLines", 1, {opacity: "0"})
        
        
        .to("#bulbFill", 0.5, {transformOrigin: "50% 50%",  opacity:1})
        .to("#bgdGlow", 0.1, {transformOrigin: "50% 50%",  scale:1})
        .to("#glowLines", 0.1, {opacity: "1"})
        .to("#glowLines", 0.5, {opacity: "1",  onComplete: glow})


        // .to("#eyes", 2.5, {transformOrigin: "50% 50%",  scaleY:1,  onComplete: eyeTween})
     }
     glow()

    return (
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="43" height="48.957"
        viewBox="0 0 43 48.957">
            <circle scale="0" opacity="0.2" fill="#FFF" cx="20.73" cy="22.486" r="20.645" id="bgdGlow"
            />
            <g id="glowLines"  opacity="0"  fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round"
            strokeMiterlimit="10">
                <line x1="8.051" y1="31.421" x2="3.4" y2="34.313" />
                <line x1="5.5" y1="22.989" x2=".5" y2="22.989" />
                <line x1="1.641" y1="12.568" x2="7.422" y2="15.333" />
                <line x1="9.118" y1="3.14" x2="11.947" y2="8.796" />
                <line x1="22.004" y1=".5" x2="21.219" y2="6.408" />
                <line x1="30.298" y1="8.796" x2="33.314" y2="3.455" />
                <line x1="35.703" y1="15.333" x2="40.732" y2="12.568" />
                <line x1="36.5" y1="22.989" x2="42.5" y2="22.989" />
                <line x1="34.068" y1="31.421" x2="39.225" y2="34.313" />
            </g>
            <path fill="#FFF" stroke="#333" strokeLinecap="round" strokeLinejoin="round"
            strokeMiterlimit="10" d="M15,39.99v-4.798 l-4.354-6.913c0,0-1.611-2.765-1.675-7.039c-0.063-4.274,3.342-7.542,3.971-7.982c0.629-0.439,3.434-3.206,8.24-3.143 c4.806,0.063,7.968,2.766,9.224,4.085c1.257,1.319,2.9,5.028,2.9,7.039c0,2.011-0.563,5.342-1.63,6.85 c-1.069,1.508-4.837,7.488-4.837,7.488l-0.124,4.409H15V39.99z"
            id="bulbFill"  opacity="0.3"  />
            <g stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
            id="bulbOutline">
                <path fill="none" d="M15,39.99v-4.798 l-4.354-6.913c0,0-1.611-2.765-1.675-7.039c-0.063-4.274,3.342-7.542,3.971-7.982c0.629-0.439,3.434-3.206,8.24-3.143 c4.806,0.063,7.968,2.766,9.224,4.085c1.257,1.319,2.9,5.028,2.9,7.039c0,2.011-0.563,5.342-1.63,6.85 c-1.069,1.508-4.837,7.488-4.837,7.488l-0.124,4.409H15V39.99z"
                />
                <path fill="none" d="M19.698,39.339 c0,0-2.765-11.229-2.849-12.987" />
                <path fill="none" d="M22.883,39.339 c0,0,2.094-10.978,2.557-12.987" />
                <polyline fill="none" points="17.279,26.478 19.447,27.873 20.746,26.216 21.219,29.285 22.548,26.216 24.161,27.302 25.115,27.122"
                />
                <path fill="#FFF" d="M15.342,42.509 c0,0,0.083-1.52,1.046-1.52c0.964,0,9.637,0,9.637,0s0.879,0.389,0.879,1.52c0,1.132-1.004,1.48-1.004,1.48h-9.679 C16.221,43.99,15.342,43.83,15.342,42.509z"
                />
                <path fill="#FFF" d="M16.147,44.99 c0,0,0.45,2,2.126,2c1.676,0,5.991,0,5.991,0s2.012-1,2.012-2H16.147z"
                />
                <path fill="#FFF" d="M18.943,46.99 c0,0,0.293,1.467,2.18,1.467c1.885,0,2.263-1.467,2.263-1.467H18.943z"
                />
            </g>
        </svg>
    )
}