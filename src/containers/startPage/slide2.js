import React from 'react'
import { Tick } from './../../assets/images/tick';


//typical import of gsap methods
import { TimelineLite} from "gsap";
import { ImgIcon } from './../../assets/images/imgIcon';


export class Slide2 extends React.Component{

    componentDidMount(){
        const introAnim = new TimelineLite()
        introAnim
        .from(".idea", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".sketch", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".elaborate", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})

        .to(".idea .aCircle", 0.1, {background:"#8CC63F"})
        .to(".elaborate .aCircle", 0.2, {transformOrigin: "50% 50%", scale:0.8})
    }

    render(){
        return(
                /* ************************************************************************** */
                /* *********************** Upload image form html start *********************** */

                <div className="ideaElementWrapper slide2">
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

                    <div className="uploadContent">
                        <h1>Upload a rough sketch (optional)</h1>
                        <div className="uploadContainer">
                            <div className="imgIcon" ><ImgIcon/></div>
                            <div>
                                <p>Click here to upload a rough hand drawn sketch or a photo for giving a better idea.</p>
                            </div>
                        </div>
                        <span></span>
                        <div>
                            <p>For example, here’s a sketch for the pedalling washing machine :</p>
                            <img src="https://78.media.tumblr.com/tumblr_maevq98CDH1ruztjzo1_500.gif" alt=""/>
                            <span></span>
                            <button className="whiteBtnBig">Next</button>
                        </div>
                    </div>
                </div>

                /* ************************ Upload image form html end ************************ */
                /* ************************************************************************** */
    )
}
}