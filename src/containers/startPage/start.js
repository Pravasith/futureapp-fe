import React from "react"
 
import { Navbar } from "../../components/navbar"

require("../../assets/cssFiles/navbar.css")

export default class Start extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
            </div>
        )
    }
}

