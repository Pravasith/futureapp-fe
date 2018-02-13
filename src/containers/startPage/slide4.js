import React from 'react'

//typical import of gsap methods
import { TimelineLite} from "gsap"
import { Tick } from './../../assets/images/tick';

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

                    
                </div>

                /* ************************ Upload image form html end ************************ */
                /* ************************************************************************** */
    )
}
}