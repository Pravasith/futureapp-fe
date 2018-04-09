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
import { CourageBlack } from "../../assets/images/courageBlack"
import { Psydog } from "../../assets/images/psydog"
import { SendRocket } from "../../assets/images/sendRocket"


require("../../assets/cssFiles/journeyPage.css")

class AnonymousProvideEmail extends React.Component{

    constructor(props, context) {
        super(props, context)

        this.state = {
            displayPara : 'displayPara hide',
            isValid : false,
            count : 0,
            firstTime : true
        }

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
                                <IdeaCard/>
                            </div>
                            <div className="rightScr">
                                <div className="provideEmailScr flexColDiv">
                                    <Psydog/>
                                    <span></span>
                                    <h2>Your anonymous secret encrypted key (ASEK) will be sent to you via email. Please provide your email id. (Your email id will never be displayed in public)</h2>
                                    <span></span>
                                    <input
                                        ref="emailId"
                                        type="text"
                                        placeholder="Type your email address here"
                                        onChange={this.handleChange}
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

export default connect(mapStateToProps, matchDispatchToProps)(AnonymousProvideEmail)
