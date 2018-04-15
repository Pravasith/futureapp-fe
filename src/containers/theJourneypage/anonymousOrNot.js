import React from "react"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import axios from 'axios'
 
import { Navbar } from "../../components/navbar"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"

import { getCardData, deleteCardData } from '../../actions/cardActions'
import { registerLinkedInUser, registerGoogleUser } from '../../actions/userActions'
import { crack } from '../.././config'

//typical import of gsap methods
import {TimelineLite} from "gsap"
import IdeaCard from './ideaCard/ideaCard'
import { CourageBlack } from "../../assets/images/courageBlack";

const nacl = require('tweetnacl')
nacl.util = require('tweetnacl-util')


require("../../assets/cssFiles/journeyPage.css")

class AnonymousOrNot extends React.Component{

    constructor(props, context) {
        super(props, context)

        this.state = {
            cardData : null,
        }
    }

    componentDidMount(){
        let username = {
            robotName : localStorage.getItem('username')
        }

        this.props.getCardData(username)
        .then(() => {


            if(localStorage.getItem('loginThrough') === 'linkedin'){
                this.props.registerLinkedInUser(this.props.cardData)
                .then(() => {
                    localStorage.setItem('id', this.props.createUser._id)
                    // let robotname = this.
                    // this.props.deleteCardData(robotname)
                    // decrypt data
                    // use cardsData inplace of encrypted data string
                    // Decodes Base-64 encoded string and returns Uint8Array of bytes.
                    let key = nacl.util.decodeBase64(crack)
                    let rawData = nacl.secretbox.open(nacl.util.decodeBase64(this.props.createUser.cardsData), nacl.util.decodeBase64(this.props.createUser.encryptedKey), key)
                    let decryptedData = JSON.parse(nacl.util.encodeUTF8(rawData))

                    if( Object.keys(decryptedData[0]).length === 0 && decryptedData[0].constructor === Object ){}

                    else
                    {
                        this.setState({
                            cardData : {...decryptedData[0]},
                        })
                    }
                })
                .catch(e => console.error(e))
            }

            if(localStorage.getItem('loginThrough') === 'google'){
                this.props.registerGoogleUser(this.props.cardData)
                .then(() => {
                    localStorage.setItem('id', this.props.createUser._id)
                    // this.props.deleteCardData(robotname)
                    // decrypt data
                    // use cardsData inplace of encrypted data string
                    // Decodes Base-64 encoded string and returns Uint8Array of bytes.
                    let key = nacl.util.decodeBase64(crack)
                    let rawData = nacl.secretbox.open(nacl.util.decodeBase64(this.props.createUser.cardsData), nacl.util.decodeBase64(this.props.createUser.encryptedKey), key)
                    let decryptedData = JSON.parse(nacl.util.encodeUTF8(rawData))

                    if( Object.keys(decryptedData[0]).length === 0 && decryptedData[0].constructor === Object ){}

                    else
                    {
                        this.setState({
                            cardData : {...decryptedData[0]},
                        })
                    }
                })
                .catch(e => console.error(e))
            }


            
        })
        .catch((err) => {
            console.error(err)
        }) 
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
                                <IdeaCard
                                    businessType={this.state.cardData ? this.state.cardData.ideaType : "Loading your project type"}
                                    noOfImages = {this.state.cardData ? this.state.cardData.imageArray.length : 0}
                                    idea = {this.state.cardData ? this.state.cardData.shortIdea : "Loading your idea"}
                                    robotName = {this.state.cardData ? this.state.cardData.robotName : "Just a min"}
                                    courage = {this.state.cardData ? this.state.cardData.userStatData.courage : 0}
                                    wisdom = {this.state.cardData ? this.state.cardData.userStatData.wisdom : 0}
                                    nectar = {this.state.cardData ? this.state.cardData.userStatData.nectar : 0}
                                    color = {this.state.cardData ? this.state.cardData.cardColor : "#333333"}
                                
                                />
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
            cardData : state.updatedCardData,
            createUser : state.createUser
        }
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            getCardData,
            registerLinkedInUser,
            registerGoogleUser,
            deleteCardData
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(AnonymousOrNot)
