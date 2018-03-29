import React from "react"
 
import { Navbar } from "../../components/navbar"
import StarRating   from "../../assets/images/starRating"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"


//typical import of gsap methods
import {TimelineLite} from "gsap"
import IdeaCard from './ideaCard/ideaCard'

require("../../assets/cssFiles/journeyPage.css")

export default class CreateCard extends React.Component{

    componentDidMount(){

    }


    render(){

        return(


            <div className="screenWrapper" >
                <Navbar/>

                <div className="rightScreenContainer">
                    <div className="statusBarContainer" >
                    <MainStatusBar/>
                    </div>

                    <div className="cardScreen">
                        <div className="leftScr">
                            <h2>Your Idea card</h2>
                            <IdeaCard/>
                        </div>
                        <div className="rightScr">
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }
}
