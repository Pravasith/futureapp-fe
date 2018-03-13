import React from "react"


//typical import of gsap methods
import { TimelineLite } from "gsap"

export class ZeroOneAnim extends React.Component{
    

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    componentDidMount() {

        console.log(this.getRndInteger(-30, +30))

        const assignRndPos = () => {

            let c = 0
            while( c < 15 ){
                c++
                const anim = new TimelineLite()
                anim
                .set('#zero' + c, { x: this.getRndInteger(-30, +30), opacity:0 })
                .set('#one' + c, { x: this.getRndInteger(-30, +30), opacity:0 })
            }
        }

        assignRndPos()

        

        
        function moveUp()  {
            
            let done = 0
            const anim = new TimelineLite()
            const anim2 = new TimelineLite()

            for (let c = 1; c <= 15; c++) {

                anim
                .to('#zero' + c, 0.01, { opacity: 1 }, "-=0.4")
                .to('#zero' + c, 0.8, { y: -100 }, "-=0.4")
                .to('#zero' + c, 0.01, { opacity: 0, y:0 }, "-=0.4")
                anim2
                .to('#one' + c, 0.01, { opacity: 1 }, "-=0.3")
                .to('#one' + c, 0.6, { y: -100 }, "-=0.3")
                .to('#one' + c, 0.01, { opacity: 0 , y:0, 
                    onComplete: () => {
                        done++
                        if(done >= 15){
                            moveUp()
                        }
                    }
                }, "-=0.3")
            }
        }
        moveUp()
    }

    render(){


        let arrZeros = []
        let arrOnes = []

        const gen15ZeroesOnes = () => {
            let c = 1
            while( c <= 15 ){

                arrZeros.push(<path fill="none" stroke="#999" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="15" d="M38.375,109.5 c0,1.381-1.302,2.5-2.958,2.5c-1.657,0-2.917-1.119-2.917-2.5v-4.666c0-1.381,1.26-2.5,2.917-2.5c1.656,0,2.917,1.119,2.917,2.5 L38.375,109.5z"
                id={"zero" + c}
                key = {"zero" + c}
                />)

                arrOnes.push(<polyline fill="none" stroke="#999" strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="15" points="34.063,104 35.5,102.334 35.5,112"
                id={"one" + c}
                key = {"one" + c}
                />)

                c++
            }
        }

        gen15ZeroesOnes()

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="113" viewBox="0 0 70 113">
                {arrZeros}
                {arrOnes}
            </svg>
        )

        }
    }