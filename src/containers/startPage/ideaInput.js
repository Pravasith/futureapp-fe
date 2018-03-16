import React from "react"


//typical import of gsap methods
import { TimelineLite } from "gsap";
import Slide1 from "./slide1";
import Slide2 from "./slide2";
import Slide3 from './slide3';
import Slide4 from './slide4';
import Slide5 from "./slide5";
import Slide6 from "./slide6";

import { connect } from "react-redux";

class IdeaInput extends React.Component{

    componentDidMount(){
        const formLoad = new TimelineLite()
        formLoad.from('.greenBgd', 0.5, {transformOrigin:"50% 50%", scale:0, opacity:0})
    }



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

        else if(slide === 6){
            return(
               <Slide6/>
            )
        }
        
    }




    render(){
        return(
            
            <div className="ideaInputWrapper">

                <div className="greenWrapper">
                    
                    {this.slideContentHTML(this.props.idea.slideNo)}
                    {/* {this.slideContentHTML(2)} */}

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
                    3. In the next stage, you can share your ideas among the related professionals to discuss and make them join your team.
                    </p><span ></span>
                    <p>
                    4. After that, interested professionals will start working REMOTELY with you (either for money, equity or for passion). Just sign the digital contract, get people working and float it for investment.
                    </p><span ></span>
                    <p>
                    5. You don't have to be a professional in a field to write ideas or build online companies here. But you need to be smart enough to get professionals work with/for you.
                    </p><span ></span>
                    <p>
                    6. As Tyler Durden would say, if this is your first time here, you have to post an idea!
                    </p><span ></span>

                </div>
            </div>


           
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        idea: state.theSlideData
    }
}

export default connect (mapStateToProps)(IdeaInput)