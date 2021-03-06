import React from "react"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import { crack } from '../.././config'

import { Navbar } from "../../components/navbar"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"

import { updateCardColor } from '../../actions/cardActions'
import { fetchUserData } from '../../actions/userActions'

//typical import of gsap methods
import {TimelineLite} from "gsap"
import IdeaCard from './ideaCard/ideaCard'
import { CourageBlack } from "../../assets/images/courageBlack"
import { Psydog } from "../../assets/images/psydog"
import { SendRocket } from "../../assets/images/sendRocket"

const nacl = require('tweetnacl')
nacl.util = require('tweetnacl-util')

require("../../assets/cssFiles/journeyPage.css")

class AnonymousProvideEmail extends React.Component{

    constructor(props, context) {
        super(props, context)

        this.state = {
            displayPara : 'displayPara hide',
            isValid : false,
            count : 0,
            firstTime : true,
            cardData : null,
            userData : null,
            
        }

        this.props.fetchUserData(localStorage.getItem('id'))
        .then(() => {

            this.refs.emailId.value = this.props.userDetails.emailId
            // decrypt data
            // use cardsData inplace of encrypted data string
            // Decodes Base-64 encoded string and returns Uint8Array of bytes.
            let key = nacl.util.decodeBase64(crack)
            let rawData = nacl.secretbox.open(nacl.util.decodeBase64(this.props.userDetails.cardsData), nacl.util.decodeBase64(this.props.userDetails.encryptedKey), key)
            let decryptedData = JSON.parse(nacl.util.encodeUTF8(rawData))
            console.log(decryptedData) 

            if( Object.keys(decryptedData[0]).length === 0 && decryptedData[0].constructor === Object ){}

            else
            this.setState({
                cardData : {...decryptedData[0]},
                userData : this.props.userDetails
            })
        })

        this.handleChange = this.handleChange.bind(this)
        this.checkAndSend = this.checkAndSend.bind(this)
        
    }

    checkAndSend(email){

        this.setState({count: 0, firstTime: false})
        if(this.state.isValid){
            console.log(email)
        }

        else
        this.setState({ displayPara : "displayPara " })
    }

    componentDidMount(){
    }


    handleChange(e){

        let theEmail = e.target.value

        var rea = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        var x = rea.test(theEmail)
        if (!x) {
            // console.log('Type Your valid Email');
            this.setState({ isValid : false })
        }

        if(x && theEmail.includes('.')){
            this.setState({ isValid : true })
            this.setState({ displayPara : "displayPara hide" })
        }
        
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
                                <div className="provideEmailScr flexColDiv">
                                    <Psydog/>
                                    <span></span>
                                    <h2>Your anonymous secret encrypted key (ASEK) will be sent to you via email. Is this your email id?</h2>
                                    <span></span>
                                    <input
                                        ref="emailId"
                                        type="text"
                                        placeholder="Type your email address here"
                                        onChange={this.handleChange}
                                        // value={this.state.email}
                                    />
                                    <p className = {this.state.displayPara} >Please enter a valid email id</p>
                                    <span></span>
                                    <div 
                                        className="sendButton"
                                        onClick = {() => this.checkAndSend(this.refs.emailId.value)}
                                        >
                                        <div><SendRocket/></div>
                                        <span></span>
                                        
                                        <div>Send</div>
                                        
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
            userDetails :state.userDetails
        }
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            fetchUserData
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(AnonymousProvideEmail)
