import React from "react"
 
import { Navbar } from "../../components/navbar"
import MainStatusBar from "../startPage/mainStatusBar"
import businesses from "../../reducers/journeyReducers"
import Confetti from "../../assets/images/confetti"
import { NectarBlackBig } from "../../assets/images/nectarBlack-Big"

//typical import of gsap methods
import {TimelineLite} from "gsap";


require("../../assets/cssFiles/navbar.css")
require("../../assets/cssFiles/journeyPage.css")

export default class JourneyBegins extends React.Component{

    componentDidMount(){
        const anim = new TimelineLite()
        anim
        .from('.congratsBigWrapper', 0.2, {opacity:0})
        .from('.congratsSmallWrapper', 0.5, {opacity:0})
        .from('.nectarAnim', 0.3, {})
        .from('.nectarAnim', 0.3, {opacity:0})
        .to('.innerNecFill', 1, {width: "100%"})
        .to('.outerNecFill', 0, {display: "none"})
        .to('.plusNec', 0, {display:"flex"})
        .to('.letsGo', 0.8, {})
        .from('.letsGo', 0.3, {opacity:0})

    }


    render(){

        console.log(businesses)

        return(
            <div className="screenWrapper" >
                <Navbar/>

                <div className="rightScreenContainer">
                    <div className="statusBarContainer" >
                    <MainStatusBar/>
                    </div>
                    <div className="journeyScreen">
                        {/* <h1>Thanks for your input Chikki! We'll get back to you on whatsapp soon:P</h1> */}
                        {/* <h1>Thanks for your input Chikki! We'll get back to you soon :P</h1> */}

                        <div className="congratsBigWrapper">
                            <div>
                                <Confetti/>
                            </div>

                            <span></span>

                            <div className="congratsSmallWrapper">
                                <h2>Congrats, you are now entering the next phase</h2>
                                <span></span>
                                <div className="pinkSquares flexColDiv">
                                    <div className="pinkSquare"></div>
                                    <div className="emptySquare"></div>
                                    <div className="pinkSquare"></div>
                                </div>
                                <span></span>
                                <h2 className="rightH2">Team Building</h2>
                            </div>                            
                        </div>

                        

                        <div className="nectarAnim">
                            <NectarBlackBig/>
                            <span></span>
                            <div className="outerNecFill">
                                <div className="innerNecFill">

                                </div>
                                
                            </div>
                            <h2 className="plusNec" >+15 Nectar</h2>
                        </div>

                        

                        <button className="letsGo">Let's go!</button>


                    </div>

                    
                    
                </div>

            </div>
        )
    }
}
