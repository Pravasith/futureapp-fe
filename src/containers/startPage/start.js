import React from "react"
 
import { Navbar } from "../../components/navbar"
import MainStatusBar from "./mainStatusBar"
import IdeaInput from "./ideaInput"
import "../../assets/cssFiles/startScreen.css"

//typical import of gsap methods
import { TimelineLite} from "gsap";

require("../../assets/cssFiles/navbar.css")

export default class Start extends React.Component{


    render(){
        return(
            <div className="screenWrapper" >
                <Navbar/>

                <div className="rightScreenContainer">
                    <div className="statusBarContainer" >
                    <MainStatusBar/>
                    </div>
                    <div className="focusScreen">
                    <IdeaInput/>
                    </div>
                </div>

            </div>
        )
    }
}

