import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//typical import of gsap methods
import { TimelineLite } from "gsap"

import { Bulb } from './../../assets/images/bulb'
import { CourageWhite } from './../../assets/images/courageWhite'
import { Meditator } from './../../assets/images/meditator'

// import actions
import { ideaInput, changeSlide } from "../../actions/ideaInputAction"


class Slide1 extends React.Component{


    constructor(props, context) {
        super(props, context)
    
        this.state = {
            name: "ideaText blink",
            value: this.props.slideData.text
        }

        this.handleChange = this.handleChange.bind(this)
        this.toggleClassName = this.toggleClassName.bind(this)
    }

    componentDidMount() {
        this.meditationAnimation()
    }


    meditationAnimation(){

        ////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////// intro animation function start //////////////////////////////

        const meditate = new TimelineLite()

        meditate.set("#meyes",  {transformOrigin:"50% 50%", scaleY:0.2})
        .set("#bgdCircle1", {transformOrigin:"50% 50%", scale:0, opacity:0})
        .set("#bgdCircle2", {transformOrigin:"50% 50%", scale:0, opacity:0})
        .set(".leftHand", {transformOrigin:"50% 10%", rotation:130})
        .set(".rightHand", {transformOrigin:"50% 10%", rotation:-130})

        
        meditate
        .from(".wholeBody", 0.5, {transformOrigin:"50% 50%", scale:0, opacity:0})
        .to("#bgdCircle1", 0.5, {transformOrigin:"50% 50%", scale:1, opacity:1})
        .to("#bgdCircle2", 0.5, {transformOrigin:"50% 50%", scale:1, opacity:1})
        .to("#meyes", 0.7, {transformOrigin:"50% 50%", scaleY:1.1})
        .to(".leftHand", 0.5, {transformOrigin:"50% 10%", rotation:-40, x:2}, "handMove")
        .to(".rightHand", 0.5, {transformOrigin:"50% 10%", rotation:40, x:-1.2}, "handMove")
        .to(".leftLeg", 0.5, {transformOrigin:"90% 50%", rotation:5, x:-1}, "handMove")
        .to(".rightLeg", 0.5, {transformOrigin:"10% 50%%", rotation:-5, x:1}, "handMove")

        .to("#meyes", 0.7, {transformOrigin:"50% 50%", scaleY:0.2 }, "eyeClose")
        .from(".bulbWrapper", 0.5, { transformOrigin:"50% 50%", scale:0 , opacity: 0})

        ////////////////////////////// intro animation function end //////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////

    }
    

    toggleClassName() {
        this.setState({name: "ideaText"})
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    

    nextSlide(e){
        e.preventDefault()
        const slide = 2

        if(!this.refs.ideaText.value){
            this.setState({
                name: "ideaText warning"
            })

            this.refs.ideaText.placeholder = "Come on tiger, enter a random idea from your head. I'm sure you must have many there."
        }

        else{
            const moveSlide = new TimelineLite()
            moveSlide
            .to(".bulbWrapper", 0.2, {opacity:0, transformOrigin:"50% 50%", scale:0 })
            .to(".meditator", 0.2, {opacity:0, transformOrigin:"50% 50%", scale:0})
            .to(".writeHead", 0.2, {opacity:0, y:+30 })
            .to(".textInputWrapper", 0.2, {opacity:0, transformOrigin:"50% 50%", y:+40})
            .to(".slide1", 0.2, { transformOrigin:"50% 50%", scaleY:0, onComplete: passPropsToAction.bind(this) })
          
            // console.log(this.refs.ideaText.value, slide, this.props.userDetails)

            function passPropsToAction(){
                this.props.idea(this.refs.ideaText.value)
                this.props.changeSlide(slide)
            }
        }
    }

    render(){

        const highLight = new TimelineLite()
        const highLightWarn = new TimelineLite()

        function warning ()  {
            highLightWarn
            .to('.warning', 0.2, { borderColor: "#FF6C6C"})
            .to('.warning', 0.8, { borderColor: "#FFFFFF", onComplete: warning})
        }

        warning()

        function blink  ()  {
            highLight
            .to('.blink', 0.3, { borderColor: "#94E8FF"})
            .to('.blink', 0.3, { borderColor: "#FCEE21"})
            .to('.blink', 0.3, { borderColor: "#FF94F3"})
            .to('.blink', 0.3, { borderColor: "#FFFFFF", onComplete: blink})
        }

        if(this.state.name !== "ideaText warning"){
            blink()
        }

        const returnTextArea = () => {
            if(!this.props.slideData.text){
                return (
                    <textarea ref="ideaText" name="idea" className={this.state.name} onFocus={this.toggleClassName} placeholder="Click here to start typing...&#10;Example: I want to build a washing machine which runs on pedalling power."></textarea>
                )
            }

            else{
                return (
                    <textarea ref="ideaText" name="idea" className={this.state.name} onFocus={this.toggleClassName} value={this.state.value} onChange={this.handleChange}></textarea>
                )
            }
        }

        return(
        /* ************************************************************************** */
        /* *********************** enter idea form html start *********************** */
    
                <div className="ideaElementWrapper slide1">
                    <div className="bulbWrapper">
                        <Bulb/>
                    </div>

                    <div className="meditator">
                        <Meditator/>
                    </div>

                    <span ></span>

                    <div className="writeHead">
                        <h1>Write your idea in short...</h1>
                        <div className="courageIcon">
                            <p> + </p>
                            <span></span>
                            <CourageWhite/>
                            <span></span>
                            <p>  Courage </p>
                        </div>
                    
                    </div>

                    <div className="textInputWrapper">
                        <form 
                        onSubmit={(e) => this.nextSlide(e)}
                        >
                                {returnTextArea()}
                                <span></span>
                                <button className="whiteBtnBig">Next</button>
                        </form>
                    </div>
            </div>

        /* ************************ enter idea form html end ************************ */
        /* ************************************************************************** */
        )
}
}

const mapStateToProps = (state) => {
    return {
        slideData : state.theSlideData
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        idea: ideaInput,
        changeSlide: changeSlide
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Slide1)