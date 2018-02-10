import React from "react"
import { Bulb } from "../../assets/images/bulb"
import { Meditator } from "../../assets/images/meditator";

//typical import of gsap methods
import { TimelineLite} from "gsap";
import { CourageWhite } from "../../assets/images/courageWhite";



export default class IdeaInput extends React.Component{

    componentDidMount(){
        
        this.introAnim()
    }
    

////// animation function start /////////////////////////////////////////////////////////

    introAnim(){
        const meditate = new TimelineLite()
        const levitateBody = new TimelineLite()

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


////// animation function end /////////////////////////////////////////////////////////


    render(){
        return(
            


            <div className="ideaInputWrapper">

                <div className="greenWrapper">
                    <div className="greenBgd">
                        <div className="bulbWrapper">
                            <Bulb/>
                        </div>
                        <div>
                            <Meditator/>
                        </div>
                        <div className="writeHead">
                            <h1>Write your idea in short...</h1>
                            <div className="courageIcon">
                                <p> +  </p>
                                <span></span>
                                <CourageWhite/>
                                <span></span>
                                <p>  Courage </p>
                                
                            </div>
                            
                        </div>
                        <div className="textInputWrapper">
                            <form action="/">
                                    
                                    <textarea name="idea" placeholder="Click here to start typing...&#10;Example: I want to build a washing machine which runs on pedalling power."></textarea>
                                    <br/>

                                    <button className="whiteBtnBig">Next</button>
                            </form>
                        </div>
                    </div>
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