import React from "react"
 
import { Navbar } from "../../components/navbar"
import MainStatusBar from "./mainStatusBar"

require("../../assets/cssFiles/navbar.css")

export default class Start extends React.Component{
    render(){
        return(
            <div className="screenWrapper" >
                <Navbar/>
                <div className="statusBarContainer" >
                <MainStatusBar/>
                </div>
                <div className="focusScreen">
                </div>
                
            </div>
        )
    }
}

