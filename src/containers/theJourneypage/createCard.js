import React from "react"
 
import { Navbar } from "../../components/navbar"
import StarRating   from "../../assets/images/starRating"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"


//typical import of gsap methods
import {TimelineLite} from "gsap";
import { ImgIcon } from "../../assets/images/imgIcon";
import { PieCoin } from "../../assets/images/piecoin";

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
                            <div className="ideaCard">
                                <p>Software Product</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="starRating">
                                    <div className="endsInRow">
                                        <StarRating color = {"#94E8FF"} />
                                        <div className="images">
                                            <ImgIcon/>
                                            <p>1</p>
                                        </div>
                                    </div>
                                    <p>Not rated yet</p>
                                </div>
                                <div className="piecoinData">
                                    <PieCoin/>
                                    <p>0 piecoins raised</p>
                                </div>
                                <p>No one remotely working currently</p>
                                <p>No open remote work positions</p>
                            </div>
                        </div>
                        <div className="rightScr">
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }
}
