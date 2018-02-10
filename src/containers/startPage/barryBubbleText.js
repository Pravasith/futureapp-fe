import React from "react"
import {connect} from "react-redux"

//typical import of gsap methods
import {TimelineLite} from "gsap";

class BarryBubbleText extends React.Component{

    componentWillUpdate(){
        const textAnimation = new TimelineLite()
        textAnimation
        .to(".messageBubbleWrapper", 0.1, {transformOrigin:"0% 20%", scale: 1})
        .from(".barryBubbleText", 0.5, {opacity:0})
        
    }

    render(){
        if(!this.props.userStatusLevel){
            return (
                <p>I am your assitant</p>
            )
        }

        return (
            <div className="barryBubbleText">
                <p>Hello, you are still in level {this.props.userStatusLevel.currentLevel} and its not the time for {this.props.userStatusLevel.buttonData} </p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return(
        {
            userStatusLevel : state.userStatusLevelText
        }
    )
}

export default connect(mapStateToProps)(BarryBubbleText)