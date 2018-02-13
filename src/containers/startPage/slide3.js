import React from 'react'

//typical import of gsap methods
import { TimelineLite} from "gsap"
import { Tick } from './../../assets/images/tick';

export class Slide3 extends React.Component{

    componentDidMount(){
        const introAnim = new TimelineLite()
        introAnim
        .from(".idea", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".sketch", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".elaborate", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})

        .to(".idea .aCircle", 0.2, {background:"#8CC63F"})
        .to(".elaborate .aCircle", 0.2, {transformOrigin: "50% 50%", scale:0.8})
    }

   

    render(){
        return(
                /* ************************************************************************** */
                /* *********************** Image description form html start *********************** */

                <div className="ideaElementWrapper slide3">
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

                    <span ></span>
                    <span ></span>

                    <div className="uploadContent">
                        <h1>Give a short description to this image.(optional)</h1>
                        <span></span>
                        <div className="flexRowDiv">
                            <div>
                                <img id="imageA" src="https://78.media.tumblr.com/tumblr_maevq98CDH1ruztjzo1_500.gif" alt=""/>
                            </div>
                            <span></span>
                            <form >
                                <textarea name="imageDesc" id="" placeholder="Click to start typing here...&#10;For example : This picture shows how the machines work."></textarea>
                            </form>
                            
                        </div>
                        <span></span>
                        <span></span>
                        <div className="flexRowDiv">
                                <button className="brownBtnBig">Back</button>
                                <button className="whiteBtnBig">Next</button>
                        </div>
                    </div>
                </div>

                /* ************************ Image description form html end ************************ */
                /* ************************************************************************** */
    )
}
}