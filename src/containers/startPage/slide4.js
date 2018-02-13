import React from 'react'

//typical import of gsap methods
import { TimelineLite} from "gsap"
import { Tick } from './../../assets/images/tick';
import { ImgIcon } from './../../assets/images/imgIcon';
import { CloseButtonTrippy } from './../../assets/images/closeButtonTrippy';

export class Slide4 extends React.Component{

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
                /* *********************** Upload image form html start *********************** */

                <div className="ideaElementWrapper slide4">
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
                    <span></span>

                    <div className="uploadContainer">
                            <div className="imgIcon" ><ImgIcon/></div>
                            <div>
                                <p>Click here to upload more pictures if you’d like to.</p>
                            </div>
                    </div>

                    <span></span>
                    <span></span>

                    <div className="flexRowDiv">
                        <div className="imagesHolder">
                            <div>
                                <section className="trippyCloseBtn">
                                    <CloseButtonTrippy/>
                                </section>
                                <img src="https://78.media.tumblr.com/b0232362ec738734c20952e42cd233a7/tumblr_nsiuxw8onI1uns5mzo1_400.gif" alt=""/>
                            </div>
                            <div>
                                <section className="trippyCloseBtn">
                                    <CloseButtonTrippy/>
                                </section>
                                <img id="imageA" src="https://78.media.tumblr.com/tumblr_maevq98CDH1ruztjzo1_500.gif" alt=""/>
                            </div>
                            <div>
                                <section className="trippyCloseBtn">
                                    <CloseButtonTrippy/>
                                </section>
                                <img src="http://instameme.co/content/uploads/images/December2015/hipster-gif-animation.gif" alt=""/>
                            </div>
                            <div>
                                <section className="trippyCloseBtn">
                                    <CloseButtonTrippy/>
                                </section>
                                <img id="imageA" src="http://i.giftrunk.com/c6knzq.gif" alt=""/>
                            </div>
                            <div>
                                <section className="trippyCloseBtn">
                                    <CloseButtonTrippy/>
                                </section>
                                <img src="https://s-media-cache-ak0.pinimg.com/originals/f8/66/8a/f8668ab07bfc537ec7ff9c08f1bbdab0.gif" alt=""/>
                            </div>
                            <div>
                                <section className="trippyCloseBtn">
                                    <CloseButtonTrippy/>
                                </section>
                                <img src="https://78.media.tumblr.com/2adc481fff54ed9e8d7e5efe3086aeee/tumblr_o4kjh68soN1uaundno1_500.gif" alt=""/>
                            </div>
                            <div>
                                <section className="trippyCloseBtn">
                                    <CloseButtonTrippy/>
                                </section>
                                <img src="https://78.media.tumblr.com/5075118bf023a5b0f599a949e3813734/tumblr_n19uvekTEO1tsgjavo1_250.gif" alt=""/>
                            </div>
                            
                        
                        </div>
                            
                    </div>
                    <span></span>
                    <span></span>

                    <div className="buttonWrapper">
                            <button className="brownBtnBig">Back</button>
                            <button className="whiteBtnBig">Next</button>
                    </div>

                    
                </div>

                /* ************************ Upload image form html end ************************ */
                /* ************************************************************************** */
    )
}
}