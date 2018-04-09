import React from "react"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"
 
import { Navbar } from "../../components/navbar"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"

import { updateCardColor } from '../../actions/cardActions'

//typical import of gsap methods
import {TimelineLite} from "gsap"
import IdeaCard from './ideaCard/ideaCard'
import { CourageBlack } from "../../assets/images/courageBlack";


require("../../assets/cssFiles/journeyPage.css")

class AnonymousOrNot extends React.Component{

    constructor(props, context) {
        super(props, context)

        this.state = {            
        }
    }

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

                    <div className="focusScreen">
                        <div className="cardScreen">
                            <div className="leftScr">
                                <h2>Your Idea card</h2>
                                <IdeaCard/>
                            </div>
                            <div className="rightScr">
                                <div className="anonymousOrNotWrapper">
                                    <h2>Do you wanna stay Anonymous?</h2>

                                    

                                    <div className="flexRowDiv">
                                        
                                        <span></span>
                                        <CourageBlack/>
                                        <span></span>
                                        <p>+</p>
                                        <p>15</p>
                                        <span></span>
                                        <p>Courage points if you choose to use your real name</p>
                                    </div>

                                    <span></span>

                                    <div className="info flexColDiv">
                                        <h1>Things to acknowledge if you choose to stay anonymous</h1>
                                        <span></span>
                                        <p>Anonymous mode is for people who don't wanna tell their friends about their start-up here until the start-up reaches it's milestones</p>
                                        <span></span>
                                        <p>No one will know that you are running your business here except us. We will e-mail you a secret key to this account. Keep it safe and secure at all times!</p>
                                        <span></span>
                                        <p>The people who are going to work remotely on your idea won’t know your actual name. You will be known as {this.props.cardData.robotName} </p>
                                        <span></span>
                                        <p>You can claim your business with the secret key at anytime by choosing ‘Onymous’ option later. </p>
                                    </div>

                                    <span></span>
                                    <span></span>

                                    <div className="theButtons">
                                        <NavLink 
                                            className="yesBtn"
                                            to="/anonymous-provide-email"
                                        >Yes, make me anonymous</NavLink>

                                        <div className="noBtn">No, use my real name</div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return(
        {
            cardData : state.updatedCardData
        }
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            updateCardColor
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(AnonymousOrNot)
