import React from "react"


//typical import of gsap methods
import { TimelineLite } from "gsap";
import  Slide1  from "./slide1";
import { Slide2 } from "./slide2";
import { Slide3 } from './slide3';
import { Slide4 } from './slide4';
import { Slide5 } from "./slide5";
import { connect } from "react-redux";





class IdeaInput extends React.Component{

    componentDidMount(){
        this.introAnim()
    }

    componentDidUpdate(){
        this.introAnim()
    }


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// intro animation function start //////////////////////////////

    introAnim(){
        const formLoad = new TimelineLite()
        const meditate = new TimelineLite()
        const levitateBody = new TimelineLite()

        formLoad.from('.greenBgd', 0.5, {transformOrigin:"50% 50%", scale:0, opacity:0})

        const bodyUpDown = () => {
            
            levitateBody
            .to(".wholeBody", 0.5, {y:-4.5})
            .to(".wholeBody", 0.1, {y:-4.5})

            .to(".wholeBody", 0.8, {y:+0})
            .to(".wholeBody", 0.1, {y:+0 , onComplete: bodyUpDown})

        }

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

        .to("#meyes", 0.7, {transformOrigin:"50% 50%", scaleY:0.2 , onComplete: bodyUpDown}, "eyeClose")
        .from(".bulbWrapper", 0.5, { transformOrigin:"50% 50%", scale:0 , opacity: 0})
        

    }

////////////////////////////// intro animation function end //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////




    changeSlide(){

        // const slideAnim = new TimelineLite()
        // slideAnim.to('.slide1', 0.2, {transformOrigin:"0% 50%", scaleX:0, opacity:0})
        
    }


    slideContentHTML(slide){ // this function inserts slide content
        const slideAnim = new TimelineLite()
        if(slide === 1){

        // see if this works on click event   
        slideAnim.to('.slide1', 0.2, {transformOrigin:"0% 50%", scaleX:0.5})
            return(
                <Slide1/>
            )
        }

        else if(slide === 2){
            return(
               <Slide2/>
            )
        }

        else if(slide === 3){
            return(
               <Slide3/>
            )
        }

        else if(slide === 4){
            return(
               <Slide4/>
            )
        }

        else if(slide === 5){
            return(
               <Slide5/>
            )
        }
        
    }




    render(){
        return(
            
            <div className="ideaInputWrapper">

                <div className="greenWrapper">
                    
                    {this.slideContentHTML(this.props.idea.slideNo)}

                </div>

                <div className="someText">
                    <p>
                    Some info for you if you’d like to acknowledge:
                    </p><span ></span>
                    <p>
                    1. Dont worry about others stealing your ideas only you know the unique plan of action to achieve them.
                    </p><span ></span>
                    <p>
                    2. Your ideas will be not be shared with anyone until you choose to.
                    </p><span ></span>
                    <p>
                    3. In the next stage, you will have to share your ideas among the related professionals and target audience to know the feasibility of your idea.
                    </p><span ></span>
                    <p>
                    4. After that, interested professionals will start working with you. Just sign the digital contract, get people working and float it for investment.
                    </p><span ></span>
                    <p>
                    5. As Tyler Durden would say, if this is your first time here, you have to post an idea!
                    </p><span ></span>

                </div>
            </div>


           
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        idea: state.theIdeaNSlide
    }
}

export default connect (mapStateToProps)(IdeaInput)