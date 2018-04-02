import React from "react"
 
import { Navbar } from "../../components/navbar"
import StarRating   from "../../assets/images/starRating"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"


//typical import of gsap methods
import {TimelineLite} from "gsap"
import IdeaCard from './ideaCard/ideaCard'
import { SearchIcon } from "../../assets/images/searchIcon";

require("../../assets/cssFiles/journeyPage.css")

export default class CreateCard extends React.Component{

    constructor(props, context) {
        super(props, context)
    
        this.state = {
            name: "bubble",
        }
        this.toggleClassName = this.toggleClassName.bind(this)
    }

    componentDidMount(){

    }

    toggleClassName() {
        if(this.state.name === "bubble selected")
        this.setState({name: "bubble"})

        if(this.state.name === "bubble")
        this.setState({name: "bubble selected"})
    }


    render(){

        return(


            <div className="screenWrapper" >
                <Navbar/>

                <div className="rightScreenContainer">
                    <div className="statusBarContainer" >
                    <MainStatusBar/>
                    </div>

                    <div className="focusScreen">
                        <div className="cardScreen">
                            <div className="leftScr">
                                <h2>Your Idea card</h2>
                                <IdeaCard/>
                            </div>
                            <div className="rightScr">
                                <h2>What kind of project is this?</h2>
                                <div className="searchKind">
                                    <div className="searchIcon" >
                                        <SearchIcon/>
                                    </div>
                                    <input type="textarea" placeholder="Search"/>
                                </div>
                                <div className="tagBubbles">
                                    <div className={this.state.name} onClick={() => this.toggleClassName()} >hi</div>
                                </div>
                                <NavLink to="/create-card" className="next">Next</NavLink>
                            </div>
                            
                        </div>
                    
                    </div>
                </div>

            </div>
        )
    }
}
