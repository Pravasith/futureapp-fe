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
                    <div className="container focusScreen">
                    <IdeaInput/>

                    <div className="container" >
                        <div className="row justify-content-md-center" >
                            <div className="col-md-2 shinobi">Hello</div>
                            <div className="col-md-2 shinobi">Hello</div>
                            <div className="col-md-2 shinobi">Hello</div>
                            
                        </div>
                    </div>

                    </div>

                    
                    
                </div>

            </div>
        )
    }
}

