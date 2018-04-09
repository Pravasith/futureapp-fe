import React from "react"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"
 
import { Navbar } from "../../components/navbar"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"



//typical import of gsap methods
import {TimelineLite} from "gsap"
import IdeaCard from '../theJourneypage/ideaCard/ideaCard'
import { ShakeHands } from "../../assets/images/shakeHands";
import { FacebookIcon, GoogleIcon, LinkedInIcon } from "../../assets/images/socialNetworkIcons";

import '../../assets/cssFiles/signUp.css'





class SignUp extends React.Component{

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
                        <div className="signUpWrapper">

                            <div className="topHeading">
                                <div className="shakeHand">
                                    <ShakeHands/>
                                </div>
                                <span></span>
                                <h2>Now sign up and lets enter the team selection portal. You can also choose to be anonymous after this if you want to.</h2>
                            </div>
                            
                            <div className="formsX flexRowDiv">
                                <div className="leftForm">

                                    <h2>Either fill this form</h2>
                                    <input
                                        ref="userName"
                                        type="text"
                                        placeholder="Type your username here"
                                        // onChange={this.handleChange}
                                    />
                                    <p 
                                        // className = {this.state.displayPara} 
                                    >Please enter a valid email id</p>
                                    <span></span>
                                    <input
                                        ref="emailId"
                                        type="text"
                                        placeholder="Type your email address here"
                                        // onChange={this.handleChange}
                                    />
                                    <p 
                                        // className = {this.state.displayPara} 
                                    >Please enter a valid email id</p>
                                    <span></span>
                                    <input
                                        ref="password"
                                        type="text"
                                        placeholder="Type your password here"
                                        // onChange={this.handleChange}
                                    />
                                    <p 
                                        // className = {this.state.displayPara} 
                                    >Please enter a valid email id</p>
                                    <span></span>
                                    <input
                                        ref="confirmPassword"
                                        type="text"
                                        placeholder="Type your password again"
                                        // onChange={this.handleChange}
                                    />
                                    <p 
                                        // className = {this.state.displayPara} 
                                    >Please enter a valid email id</p>
                                    <span></span>

                                    <div className="sendBtn">Go</div>
                                </div>

                                <div className="orSplit"><h2>OR</h2></div>

                                <div className="socialNetworksForm">
                                    <h2>Click one of the buttons below to sign up through social networking sites</h2>
                                    <div className="facebookConnect flexRowDiv">
                                        <div className="fbIcon">
                                            <FacebookIcon/>
                                        </div>
                                        <span></span>
                                        <div className="socialNetworkText">Connect with facebook</div>
                                    </div>
                                    <div className="googleConnect flexRowDiv">
                                        <div className="googleIcon">
                                            <GoogleIcon/>
                                        </div>
                                        <span></span>
                                        <div className="socialNetworkText">Connect with google</div>
                                    
                                    </div>
                                    <div className="linkedInConnect flexRowDiv">
                                        <div className="linkedInIcon">
                                            <LinkedInIcon/>
                                        </div>
                                        <span></span>
                                        <div className="socialNetworkText">Connect with linked</div>
                                    
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
            // updateCardColor
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp)
