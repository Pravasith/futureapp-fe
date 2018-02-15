import React from 'react'

//typical import of gsap methods
import { TimelineLite} from "gsap"
import { Tick } from './../../assets/images/tick';
import { ImgIcon } from './../../assets/images/imgIcon';
import { CloseButtonTrippy } from './../../assets/images/closeButtonTrippy';

export class Slide5 extends React.Component{

    componentDidMount(){
        const introAnim = new TimelineLite()
        introAnim
        .from(".idea", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".sketch", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".elaborate", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})

        .to(".idea .aCircle", 0.2, {background:"#8CC63F"})
        .to(".sketch .aCircle", 0.2, {background:"#8CC63F"})
        
    }

    render(){
        return(
                /* ************************************************************************** */
                /* *********************** Upload image form html start *********************** */

                <div className="ideaElementWrapper slide5">
                    <div className="topStatusCircles">
                        <div className="sCircle idea">
                            <div className="aCircle">
                                <div className="tick">
                                    <Tick/>
                                </div>
                                
                            </div>
                            <p>Idea</p>
                        </div>
                        <div className="sCircle sketch">
                            <div className="aCircle">
                                <div className="tick">
                                    <Tick/>
                                </div>
                            </div>
                            <p>Sketch</p>
                        </div>
                        <div className="sCircle elaborate">
                            <div className="aCircle">
                                <div className="tick">
                                    <Tick/>
                                </div>
                            </div>
                            <p>Elaborate</p>
                        </div>
                    </div>

                    <span></span>

                    <h1>Elaborate your idea. Compare it with real life examples similar to your concept.</h1>

                    <span></span>



                    <div className="flexColDiv">
                            <form >
                                <textarea name="elaborate" id="" placeholder="Click to start typing here...&#10;Click here to start typing..For example : The washing drum should be placed on the front of the handlebars of the cycle. The rotors then get attached to the washing drum’s bottom and rotate the inner drum. The clothes, along with detergent powder is put inside the drum, the lid is closed, and the user pedals to spin the clothes!"></textarea>
                            </form>
                    </div>

                    <span></span>

                    <div className="buttonWrapper">
                            <button className="brownBtnBig">Back</button>
                            <button className="whiteBtnBig">Done</button>
                    </div>

                    
                </div>

                /* ************************ Upload image form html end ************************ */
                /* ************************************************************************** */
    )
}
}