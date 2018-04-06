import React from "react"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"
 
import { Navbar } from "../../components/navbar"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"

import { updateProjectData } from '../../actions/cardActions'

//typical import of gsap methods
import {TimelineLite} from "gsap"
import IdeaCard from './ideaCard/ideaCard'


require("../../assets/cssFiles/journeyPage.css")

class SelectCardColor extends React.Component{

    constructor(props, context) {
        super(props, context)

        this.state = {
            nextBtnClass: "next",
            
        }

        this.populateColors = this.populateColors.bind(this)
    }

    componentDidMount(){
    }

    populateColors(){
        const colorArray = [
            "#C13E92","#FF3342","#4845BA","#29ABE2","#8CC63F",
            "#9151CE","#FF3E9A","#5E69B7","#55BFD8","#39B54A",
            "#FF94F3","#EA6581","#629DB2","#29D7FF","#00A99D",
            "#FF7F29","#FCEE21","#EFC15B","#FBB03B","#00A99D",
            "#D9E021","#998675","#F7931E","#C69C6D","#C7B299",
        ]

        return colorArray.map((item, i) => {
            return <div key={"parent"+i} className={"outerPalette color"+i}>
                <div
                    key={i}
                    className = {"palette "+ i}
                    style={{'background':item}}
                >
                </div>
            </div>
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
                                    businessType={this.state.businessType ? this.state.businessType : "Select project type"}
                                    noOfImages = {this.props.cardData.imageArray? this.props.cardData.imageArray.length : 0}
                                    idea = {this.props.cardData.shortIdea ? this.props.cardData.shortIdea : "the idea goes here"}
                                    robotName = {this.props.cardData.robotName ? this.props.cardData.robotName : "Your name"}
                                    courage = {this.props.cardData.userStatData ? this.props.cardData.userStatData.courage : 0}
                                    wisdom = {this.props.cardData.userStatData ? this.props.cardData.userStatData.wisdom : 0}
                                    nectar = {this.props.cardData.userStatData ? this.props.cardData.userStatData.nectar : 0}

                                />
                            </div>
                            <div className="rightScr">
                                <h2>Pick a color</h2>
                                <div className="colorPalette">
                                    {this.populateColors()}
                                </div>

                                <NavLink
                                    to="/create-card"
                                    className= {this.state.nextBtnClass}
                                >Next</NavLink>
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
            updateProjectData
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectCardColor)
