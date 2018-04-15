import React from "react"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import axios from 'axios'
 

import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'

import { Navbar } from "../../components/navbar"
import MainStatusBar from "../startPage/mainStatusBar"

import { registerNewUser, fetchUserData } from '../../actions/userActions'
import { getCardData, deleteCardData } from '../../actions/cardActions'


//typical import of gsap methods
import {TimelineLite} from "gsap"
import IdeaCard from '../theJourneypage/ideaCard/ideaCard'
import { ShakeHands } from "../../assets/images/shakeHands";
import { GoogleIcon, LinkedInIcon } from "../../assets/images/socialNetworkIcons";

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

            confirmPasswordText : null,
            confirmPasswordClass : 'confirmPasswordText hide',
            confirmPasswordIsValid : false,

            checkingForTheFirstTime: false,

            redirect : false
        }

        this.validateUsername = this.validateUsername.bind(this)
        this.validatePassword = this.validatePassword.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.validateConfirmPassword = this.validateConfirmPassword.bind(this)

        
        

    }

    validateAndSubmit = () => {
        if(this.state.usernameIsValid && this.state.userEmailIsValid && this.state.passwordIsValid && this.state.confirmPasswordIsValid)
        {
            
            const theData = {
                username : this.refs.userName.value,
                password : this.refs.pWord.value,
                emailId : this.refs.emailAddress.value,
                cardsArray : [{...this.props.cardData}],
            }

            let robotname = {
                robotName : localStorage.getItem('username')
            }

            // console.log(robotname)

            this.props.registerNewUser(theData)
            .then(() => {
                if(this.props.createUser.itsTaken && this.props.createUser.exists === 'Someone has already taken the username'){
                    // console.log(this.props.createUser.exists)
                    this.setState({
                        usernameText: this.props.createUser.exists,
                        userNameClass: 'usernameText',
                        usernameIsValid: false
                    })
                }

                if(this.props.createUser.itsTaken && this.props.createUser.exists === 'Someone has already taken the email'){
                    // console.log(this.props.createUser.exists)
                    this.setState({
                        userEmailText: this.props.createUser.exists,
                        userEmailClass: 'usernameText',
                        userEmailIsValid: false,
                    })
                }

                if(!this.props.createUser.itsTaken){
                    
                    this.props.fetchUserData(this.props.createUser._id)
                    .then(() => {
                        localStorage.setItem("id", this.props.userDetails._id)
                        localStorage.setItem("loginThrough", 'form')
                        // this.props.deleteCardData(robotname)
                        .then(() => this.setState({ redirect: true }))
                    })
                    .catch((err) => console.error(err))
                }
                
            })
            .catch((err) => console.error(err))
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
        if(theInput !== this.refs.pWord.value){
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
        let username = {
            robotName : localStorage.getItem('username')
        }

        this.props.getCardData(username)
        .then(() => {
            this.props.cardData
        })
        .catch((err) => {
            console.error(err)
        }) 
    }

    // handleLinkedin = () => {

    //       axios.post('http://localhost:8000/api/user/login-linkedin-user', {cardsArray : [this.props.cardData]},  {
    //         headers: {
    //             'accept': 'application/json',
    //             'Accept-Language': 'en-US,en;q=0.8',
    //             "Content-Type": "application/json",
    //             },
    //             withCredentials: true
    //       })
    //       .then(response => console.log(response))
    //       .catch(e => console.error(e))
        
    // }




    render(){

        const { redirect } = this.state

        if (redirect) {
            return <Redirect to='/anonymous-or-not'/>
        }


        return(
            <div className="screenWrapper" >
                <Navbar/>

                <div className="rightScreenContainer">
                    <div className="statusBarContainer" >
                    <MainStatusBar  />
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
                                        ref="emailAddress"
                                        type="text"
                                        placeholder="Type your email address here"
                                        onChange={this.validateEmail}
                                    />
                                    <p 
                                        className = {this.state.userEmailClass}
                                    > { this.state.userEmailText } </p>
                                    <span></span>
                                    <input
                                        ref="pWord"
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
                                    
                                    <div 
                                        className="googleConnect flexRowDiv"
                                        onClick = {() => {
                                            localStorage.setItem("loginThrough", 'google')
                                            window.open('http://localhost:8000/knock/google')
                                        }}
                                        >
                                        <div className="googleIcon">
                                            <GoogleIcon/>
                                        </div>
                                        <span></span>
                                        <div className="socialNetworkText">Connect with Google</div>
                                    </div>

                                    <div
                                        className="linkedInConnect flexRowDiv"
                                        onClick = {() => {
                                            localStorage.setItem("loginThrough", 'linkedin')
                                            window.open('http://localhost:8000/knock/linkedin')
                                        }}
                                        >
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
            cardData : state.updatedCardData,
            createUser : state.createUser,
            userDetails : state.userDetails
        }
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            registerNewUser,
            fetchUserData,
            getCardData,
            deleteCardData
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp)
