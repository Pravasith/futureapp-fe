import React from "react"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"
 
import { Navbar } from "../../components/navbar"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"

// import { updateCardColor } from '../../actions/cardActions'

//typical import of gsap methods
import {TimelineLite} from "gsap"
import IdeaCard from './ideaCard/ideaCard'


require("../../assets/cssFiles/journeyPage.css")

class SelectCardColor extends React.Component{

    constructor(props, context) {
        super(props, context)

        this.state = {
            nextBtnClass: "nextBtn",
            color : "#333333",
            paletteClass : "paletteContainer ",
            chooseAgain : 'chooseAgain hide'
            
        }

        this.populateColors = this.populateColors.bind(this)
        this.highlightColor = this.highlightColor.bind(this)
        this.removeHighlight = this.removeHighlight.bind(this)
        this.toggleClass = this.toggleClass.bind(this)
        this.selectedColor = this.selectedColor.bind(this)
        this.nextHandler = this.nextHandler.bind(this)
    }

    componentDidMount(){
    }

    toggleClass() {
        if(this.state.paletteClass === "paletteContainer ")
        this.setState({ paletteClass : "paletteContainer hide", chooseAgain : "chooseAgain " })

        else
        this.setState({ paletteClass : "paletteContainer ", chooseAgain : "chooseAgain hide"  })
    }

    nextHandler(){
        
    }

    selectedColor(color){
        this.toggleClass()
    }

    highlightColor(idNumber,color){
        // console.log(idNumber, idNumber%5)
        const anim = new TimelineLite()
        let colNum = idNumber%5

        colNum = colNum === 0 ? 5 : colNum

        let c = 1
        let i = 1
        let j = 1

        anim.to('.color'+idNumber, 0.1, {transformOrigin:"50% 50%", scale:1.3}, 'con')
        this.setState({
            color
        })
        
        // console.log(colNum)
        while( c <= 5 ){
            // console.log(0.2*c)
            anim
            .to('.color'+ (idNumber + (5*c)), 0.1, {y: 15, transformOrigin:"50% 50%", scale:(0.25*c)}, 'con' )
            .to('.color'+ (idNumber - (5*c)), 0.1, {y: -15, transformOrigin:"50% 50%", scale:(0.25*c)}, 'con' )
            c++
        }
        while( i <= 5-colNum ){
            anim
            .to('.color'+ (idNumber + i), 0.1, {x: 15, transformOrigin:"50% 50%", scale:(0.25*i)}, 'con' )
            // .to('.color'+ (idNumber - i), 0.1, {x: -15}, 'con' )
            i++
        }
        while( j <= colNum-1 ){
            anim
            .to('.color'+ (idNumber - (j)), 0.1, {x: -15, transformOrigin:"50% 50%", scale:(0.25*j)}, 'con' )
            j++
        }
        
    }

    removeHighlight(idNumber){

        const anim1 = new TimelineLite()
        let colNum = idNumber%5

        colNum = colNum === 0 ? 5 : colNum

        let c = 1
        let i = 1
        let j = 1

        anim1.to('.color'+idNumber, 0.1, {transformOrigin:"50% 50%", scale:1}, 'con')

        
        while( c <= 5 ){
            anim1
            .to('.color'+ (idNumber + (5*c)), 0.1, {y: 0, transformOrigin:"50% 50%", scale:(1)}, 'con' )
            .to('.color'+ (idNumber - (5*c)), 0.1, {y: 0, transformOrigin:"50% 50%", scale:(1)}, 'con' )
            // .to('.color'+ (idNumber + (c)), 0.1, {x: 0}, 'con' )
            // .to('.color'+ (idNumber - (c)), 0.1, {x: 0}, 'con' )
            c++
        }
        while( i <= 5-colNum ){
            anim1
            .to('.color'+ (idNumber + i), 0.1, {x: 0, transformOrigin:"50% 50%", scale:(1)}, 'con' )
            // .to('.color'+ (idNumber - i), 0.1, {x: 0}, 'con' )
            i++
        }
        while( j <= colNum-1 ){
            anim1
            .to('.color'+ (idNumber - (j)), 0.1, {x: 0, transformOrigin:"50% 50%", scale:(1)}, 'con' )
            j++
        }

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
            return <div 
                key={"parent"+(i+1)}
                className={"outerPalette color"+(i+1)}
                onMouseOver = { () => this.highlightColor( (i+1), item ) }
                onMouseLeave = { () => this.removeHighlight( (i+1) ) }
                onClick = { () => this.selectedColor( item ) }
                >
                    <div
                        key={i+1}
                        className = {"palette "+ (i+1)}
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
                                    color = {this.state.color}

                                />
                            </div>
                            <div className="rightScr">
                                <div className={this.state.paletteClass}>
                                    <h2>Pick a color</h2>
                                    <div className="colorPalette">
                                        {this.populateColors()}
                                    </div>
                                </div>

                                <div className={this.state.chooseAgain}>
                                        <div
                                            onClick = {this.nextHandler()}
                                            className= {this.state.nextBtnClass}
                                        >Next</div>

                                        <div
                                            onClick={ () => this.toggleClass() }
                                            >
                                                <p> <strong>No, I wanna select another color</strong> </p>
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

export default connect(mapStateToProps, matchDispatchToProps)(SelectCardColor)
