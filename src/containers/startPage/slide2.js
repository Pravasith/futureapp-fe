import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Tick } from './../../assets/images/tick';

//typical import of gsap methods
import { TimelineLite} from "gsap";
import { ImgIcon } from './../../assets/images/imgIcon';

// import actions
import { ideaInput } from "../../actions/ideaInputAction";

class Slide2 extends React.Component{

    state = {
        fileName : ["Click here to upload a rough hand drawn sketch or a photo for giving a better idea."]
    }

    componentDidMount(){
        const introAnim2 = new TimelineLite()
        introAnim2
        .set('.ideaElementWrapper', {smoothOrigin:true,backgroundColor: "#C69C6D"} )
        .set('.slide2',  {smoothOrigin:true, transformOrigin:"50% 50%", scaleY:0,rotation:0.01,})
        .set(".idea",  {smoothOrigin:true,transformOrigin: "50% 50%", scale:0, opacity:0,rotation:0.01})
        .set(".sketch",  {smoothOrigin:true,transformOrigin: "50% 50%", scale:0, opacity:0,rotation:0.01})
        .set(".elaborate",  {smoothOrigin:true,transformOrigin: "50% 50%", scale:0, opacity:0,rotation:0.01})
        .set(".idea .aCircle",  {smoothOrigin:true,background:"#8CC63F",rotation:0.01})

        .to('.slide2', 0.2, {smoothOrigin:true, transformOrigin:"50% 50%", scaleY:1,rotation:0.01})
        
        .to(".idea", 0.5, {smoothOrigin:true,transformOrigin: "50% 50%", scale:1, opacity:1,rotation:0.01})
        .to(".sketch", 0.5, {smoothOrigin:true,transformOrigin: "50% 50%", scale:1, opacity:1,rotation:0.01})
        .to(".elaborate", 0.5, {smoothOrigin:true,transformOrigin: "50% 50%", scale:1, opacity:1,rotation:0.01})
        

        
        .to(".elaborate .aCircle", 0.2, {smoothOrigin:true, transformOrigin: "50% 50%", scale:0.8,rotation:0.01})
    }

    nextSlide(e){
        this.props.idea(this.props.ideaText.text, 1)
    }

    uploadHandler = (event) => {

        if(event.target.files[0]){
            console.log(event.target.files[0].name)
            this.setState({fileName: ["You've selected ",<strong key="unique">{event.target.files[0].name}</strong> , ". Click again if you want to change this."]})
            console.log(this.state.fileName)
        }
            
        
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

                        
                        
                        <input onChange={this.uploadHandler} ref="uploadLabel" style={{display:"none"}} type="file" name="uploadSketch" id="upload-sketch" accept="image/*"/>

                        <label className="uploadContainer" htmlFor="upload-sketch">
                            <div className="imgIcon" ><ImgIcon/></div>
                            <div>
                                <p>{this.state.fileName}</p>
                            </div>
                        </label>
                        {/* {console.log(this.refs.uploadLabel)} */}

                        <span></span>

                        <div className = "flexColDiv">
                            <p>For example, here’s a sketch for the pedalling washing machine :</p>
                            <img src="https://78.media.tumblr.com/5075118bf023a5b0f599a949e3813734/tumblr_n19uvekTEO1tsgjavo1_250.gif" alt=""/>
                            <span></span>

                            <div className="flexRowDiv">
                                <button 
                                onClick={() => this.nextSlide()} 
                                className="brownBtnBig">Back</button>
                                <button className="whiteBtnBig">Skip</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                /* ************************ Upload image form html end ************************ */
                /* ************************************************************************** */
    )
}
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails,
        ideaText : state.theIdeaNSlide
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        idea: ideaInput
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Slide2)