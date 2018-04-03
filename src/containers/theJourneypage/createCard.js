import React from "react"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"
 
import { Navbar } from "../../components/navbar"
import StarRating   from "../../assets/images/starRating"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"





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
            bubblenames
        }
        this.toggleClassName = this.toggleClassName.bind(this)
    }

    componentDidMount(){

    }

    toggleClassName(num) {

        // console.log(this.state.bubblenames[num])

        if(this.state.bubblenames[num] === "bubble " + num)
        {
            this.state.bubblenames
            .map((item, i) => {
                if(i === num)
                this.state.bubblenames[i] = "bubble selected " + i

                else
                this.state.bubblenames[i] = "bubble " + i
            })
        }
        
        this.setState({ 
            bubblenames:  [...this.state.bubblenames] 
        })

        
    }

    returnProjectKinds(){
        return this.props.businessTypes
        .map((item, index) => (
            <div key={index} className={this.state.bubblenames[index]} onClick={() => this.toggleClassName(index)} >{item}</div>
        ))
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
                                    {this.returnProjectKinds()}
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

function mapStateToProps(state){
    return(
        {
            businessTypes : state.businessTypes
        }
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {

        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateCard)
