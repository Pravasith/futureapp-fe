import React from "react"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"
 
import { Navbar } from "../../components/navbar"
import StarRating   from "../../assets/images/starRating"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"

import { addProjectType, fetchProjectTypes } from "../../actions/appData"
import { updateProjectData } from '../../actions/cardActions'

//typical import of gsap methods
import {TimelineLite} from "gsap"
import IdeaCard from './ideaCard/ideaCard'
import { SearchIcon } from "../../assets/images/searchIcon";

require("../../assets/cssFiles/journeyPage.css")

class CreateCard extends React.Component{

    constructor(props, context) {
        super(props, context)

        const bubblenames = this.props.businessTypes
        .map((item, i) => 'bubble ' + i)

        this.state = {
            businessTypesArr: this.props.businessTypes,
            bubblenames,
            businessType: undefined,
            nextBtnClass: "next"
        }
        this.highlightSelectedBubble = this.highlightSelectedBubble.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addBusinessType = this.addBusinessType.bind(this)
        this.nextHandler = this.nextHandler.bind(this)
    }

    componentDidMount(){
        this.props.fetchProjectTypes()
        .then(() => this.setState({
            businessTypesArr: this.props.businessTypes,
            bubblenames: this.props.businessTypes
            .map((item, i) => 'bubble ' + i),
            businessType: undefined,
            nextBtnClass: "next"
        }))
    }

    nextHandler(){
        if(this.state.businessType){
            this.props.updateProjectData({
                businessType: this.state.businessType,
                // robotName: this.
            })
            .then(() => console.log(this.props.projectType))
            .catch(e => console.log(e))
        }
    }

    addBusinessType(){
            // add a check here, where admin verifies the data and
            // then only updates the backend db with the value
            // console.log(this.refs.addBusinessType.value)
            if(this.refs.addBusinessType.value !== '' && this.refs.addBusinessType.value !== 'doesnt start with a space')
            this.setState({
                businessType: this.refs.addBusinessType.value,
                nextBtnClass: "letSee next"
            })

            this.props.addProjectType({
                businessType: this.refs.addBusinessType.value
            })
            .then(() => {
                this.props.fetchProjectTypes()
                .then(() => {
                    this.setState({
                        businessTypesArr: this.props.businessTypes,
                        bubblenames: this.props.businessTypes
                        .map((item, i) => 'bubble ' + i),
                        // businessType: undefined
                    })
                })
            })
            
            
    }

    handleChange(e){

        // console.log(e.target.value)

        searchForType = searchForType.bind(this)

        function searchForType(theString){
            this.setState({
                businessTypesArr: [...this.props.businessTypes
                    .map( item => item.toLowerCase() )
                    .filter((item, index) => {
                        return item.indexOf(theString) !== -1
                    })]
            })
        }

        new Promise(function(resolve, reject) {
            resolve(searchForType(e.target.value))
        })
        .then(() => {
            // console.log(this.state.businessTypesArr)
            // if(this.state.businessType)
            this.highlightSelectedBubble(this.state.businessType)
        })
    }


    highlightSelectedBubble(name) {

            if(name && name!==""){
                let theIndex = (this.state.businessTypesArr
                    .map( item => item.toLowerCase() )
                    .indexOf(name.toLowerCase()))
        
                // toggle classname start
                if(this.state.bubblenames[theIndex] === "bubble " + theIndex)
                {
                    this.state.bubblenames
                    .sort()
                    .map((item, i) => {
                        if(i === theIndex){
                            this.state.bubblenames[i] = "bubble selected " + i
                            this.setState({ 
                                businessType:  this.state.businessTypesArr[i],
                                nextBtnClass: "letSee next"
                            })
                        }
                        else
                        this.state.bubblenames[i] = "bubble " + i
                    })
                }
                
                this.setState({ 
                    bubblenames:  [...this.state.bubblenames] 
                })
            }

            else{
                this.state.bubblenames
                .sort()
                .map((item, i) => {
                    this.state.bubblenames[i] = "bubble " + i
                })
                this.setState({ 
                    bubblenames:  [...this.state.bubblenames] 
                })
            }
        
        // toggle classname end
    }

    returnProjectKinds(array){
        let tempArr = array
        .map((item, index) => (
            <div 
                key={index}
                className={this.state.bubblenames[index]}
                onClick={() => this.highlightSelectedBubble(item)}
            >{item}</div>
        ))

        return tempArr
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
                                <IdeaCard businessType={this.state.businessType} />
                            </div>
                            <div className="rightScr">
                                <h2>What kind of project is this?</h2>
                                <div className="searchKind">
                                    <div className="searchIcon" >
                                        <SearchIcon/>
                                    </div>
                                    <input 
                                        type="textarea"
                                        placeholder="Search"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="tagBubbles">
                                    {this.returnProjectKinds(this.state.businessTypesArr)}
                                </div>
                                <h1>Don’t find the right kind above? Type it below and click add</h1>
                                <div className="addProjectKind">
                                    <input
                                        ref="addBusinessType"
                                        type="text"
                                        placeholder="Type here and add the project kind"
                                        onChange={this.handleChange}
                                    />
                                    <div 
                                        className="addButton"
                                        onClick = {this.addBusinessType}
                                    >+ Add</div>
                                </div>
                                

                                <div 
                                    // to="/create-card"
                                    className= {this.state.nextBtnClass}
                                    onClick={this.nextHandler}
                                >Next</div>
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
            businessTypes : state.businessTypes,
            userDetails : state.userDetails,
            projectType : state.updateProjectType
        }
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            fetchProjectTypes,
            addProjectType,
            updateProjectData
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateCard)
