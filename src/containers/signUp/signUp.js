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
            usernameText : null,
            userNameClass : 'usernameText hide',
            usernameIsValid : false,

            userEmailText : null,
            userEmailClass : 'emailText hide',
            userEmailIsValid : false,

            passwordText : null,
            passwordClass : 'passwordText hide',
            passwordIsValid : false,

            confirmPasswordText : '',
            confirmPasswordClass : 'confirmPasswordText hide',
            confirmPasswordIsValid : false,

            checkingForTheFirstTime: false
        }

        this.validateUsername = this.validateUsername.bind(this)
        this.validatePassword = this.validatePassword.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.validateConfirmPassword = this.validateConfirmPassword.bind(this)

    }

    validateAndSubmit = () => {
        if(this.state.usernameIsValid && this.state.userEmailIsValid && this.state.passwordIsValid && this.state.confirmPasswordIsValid)
        {
            console.log("yes")
        }
    }

    validateUsername(e){
        let theInput = e.target

        let nameRegex = /^[a-zA-Z0-9\-]+$/
        let validUsername = theInput.value.match(nameRegex)
        if(validUsername === null ){
            this.setState({
                usernameText: "Please keep in mind. Only alphabets A-Z, a-z, numbers 0-9 and '-' (hyphen) are  acceptable.",
                userNameClass: 'usernameText',
                usernameIsValid: false
            })
            theInput.focus()
        }

        else if(validUsername !== null && theInput.value.length < 6){
            this.setState({
                usernameText: "Please keep in mind. Username should contain atleast 6 characters.",
                userNameClass: 'usernameText',
                usernameIsValid: false
            })
        }

        else{
            this.setState({
                usernameText: null,
                userNameClass: 'usernameText hide',
                usernameIsValid: true
            })   
        }
    }

    validateEmail(e){

        let theInput = e.target.value
        let nameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        let validEmail = nameRegex.test(theInput)
        if (!validEmail) {
            this.setState({
                userEmailText: "Please keep in mind, the email address has to be valid",
                userEmailClass: 'emailText',
                userEmailIsValid: false
            })
        }

        else if(validEmail && theInput.includes('.')){
            this.setState({
                userEmailText: null,
                userEmailClass: 'emailText hide',
                userEmailIsValid: true
            })
        }

        else{
            this.setState({
                userEmailText: "Please keep in mind, the email address has to be valid",
                userEmailClass: 'emailText',
                userEmailIsValid: false
            })
        }
    }

    validatePassword(e){
        let theInput = e.target.value
        
        if(theInput.length < 6){
            this.setState({
                passwordText: "Please keep in mind, the password has to be atleast 6 characters long.",
                passwordClass: 'passwordText',
                passwordIsValid: false
            })

        }
        else{
            this.setState({
                passwordText: null,
                passwordClass: 'passwordText hide',
                passwordIsValid: true
            })

        }
        
    }

    validateConfirmPassword(e){
        let theInput = e.target.value
        if(theInput !== this.refs.password.value){
            this.setState({
                confirmPasswordText: "Keep in mind, both passwords should match",
                confirmPasswordClass: 'confirmPasswordText',
                confirmPasswordIsValid: false
            })

        }
        else{
            this.setState({
                confirmPasswordText: null,
                confirmPasswordClass: 'confirmPasswordText hide',
                confirmPasswordIsValid: true
            })

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
                                        onChange={this.validateUsername}
                                    />
                                    <p 
                                        className = {this.state.userNameClass} 
                                    > { this.state.usernameText } </p>
                                    <span></span>
                                    <input
                                        ref="emailId"
                                        type="text"
                                        placeholder="Type your email address here"
                                        onChange={this.validateEmail}
                                    />
                                    <p 
                                        className = {this.state.userEmailClass}
                                    > { this.state.userEmailText } </p>
                                    <span></span>
                                    <input
                                        ref="password"
                                        type="password"
                                        placeholder="Type your password here"
                                        onChange={this.validatePassword}
                                    />
                                    <p 
                                        className = {this.state.passwordClass}
                                    > { this.state.passwordText } </p>
                                    <span></span>
                                    <input
                                        ref="confirmPassword"
                                        type="password"
                                        placeholder="Type your password again"
                                        onChange={this.validateConfirmPassword}
                                    />
                                    <p 
                                        className = {this.state.confirmPasswordClass}
                                    > { this.state.confirmPasswordText } </p>
                                    <span></span>

                                    <div 
                                    className="sendBtn"
                                    onClick={() => this.validateAndSubmit()}
                                    
                                    >Go</div>
                                </div>

                                <div className="orSplit"><h2>OR</h2></div>

                                <div className="socialNetworksForm">
                                    <h2>Click one of the buttons below to sign up through social networking sites</h2>
                                    <div className="facebookConnect flexRowDiv">
                                        <div className="fbIcon">
                                            <FacebookIcon/>
                                        </div>
                                        <span></span>
                                        <div className="socialNetworkText">Connect with Facebook</div>
                                    </div>
                                    <div className="googleConnect flexRowDiv">
                                        <div className="googleIcon">
                                            <GoogleIcon/>
                                        </div>
                                        <span></span>
                                        <div className="socialNetworkText">Connect with Google</div>
                                    
                                    </div>
                                    <div className="linkedInConnect flexRowDiv">
                                        <div className="linkedInIcon">
                                            <LinkedInIcon/>
                                        </div>
                                        <span></span>
                                        <div className="socialNetworkText">Connect with LinkedIn</div>
                                    
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