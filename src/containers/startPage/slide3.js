import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import actions
import { changeSlide, imageDescriptionUpload, imageArrayUpdate, sketchUploaded } from "../../actions/ideaInputAction";

//typical import of gsap methods
import { TimelineLite} from "gsap"
import { Tick } from './../../assets/images/tick';

class Slide3 extends React.Component{

    constructor(props, context) {
        super(props, context)
    
        this.state = {
            name: "imageText blink",
            value: this.props.theSlideData.image.imageDescription ? this.props.theSlideData.image.imageDescription : undefined
        }

        this.handleChange = this.handleChange.bind(this)
    }

    toggleClassName() {
        if(this.state.name === "imageText blink")
        this.setState({name: "imageText"})

        else
        this.setState({name: "imageText blink"})
    }

    componentDidMount(){
        const introAnim = new TimelineLite()
        introAnim
        .from(".idea", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".sketch", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".elaborate", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})

        .to(".idea .aCircle", 0.2, {background:"#8CC63F"})
        .to(".elaborate .aCircle", 0.2, {transformOrigin: "50% 50%", scale:0.8})


        const reader = new FileReader()

        reader.onloadend = () => {
            
            this.refs.sketch.src = reader.result
            // this.refs.nextButton.innerHTML = "Next"
        }

        reader.readAsDataURL(this.props.theSlideData.image.fileData)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        this.toggleClassName()
    }

    backHandler() {
        this.props.passImageDesc(this.refs.imageDesc.value)
        console.log(this.refs.imageDesc.value)
        // the next line changes the state by triggering an action IDEA_ENTERED
        // containing the function ideaInputAction which takes in parameters:
        // 1st: the idea text, 2nd: the slide number to be displayed.
        this.props.changeSlide(2)
    }

    nextHandler() {
        this.props.passImageDesc(this.refs.imageDesc.value)

        

        // the next line changes the state by triggering an action IDEA_ENTERED
        // containing the function ideaInputAction which takes in parameters:
        // 1st: the idea text, 2nd: the slide number to be displayed.
        this.props.changeSlide(4)
    }

    render(){

        const highLight = new TimelineLite()

        function blink  ()  {
            highLight
            .to('.blink', 0.3, { borderColor: "#94E8FF"})
            .to('.blink', 0.3, { borderColor: "#FCEE21"})
            .to('.blink', 0.3, { borderColor: "#FF94F3"})
            .to('.blink', 0.3, { borderColor: "#FFFFFF", onComplete: blink})
        }

        
        blink()

        const returnTextArea = () => {
            if(!this.props.theSlideData.image.imageDescription){
                return (
                    <textarea
                        ref="imageDesc"
                        name="imageDesc"
                        className={this.state.name}
                        onFocus={this.toggleClassName.bind(this)}
                        // onBlur={this.toggleClassName.bind(this)}
                        placeholder="Click to start typing here...&#10;For example : This picture shows how the machines work."
                        >
                    </textarea>
                )
            }

            else{
                return (
                    <textarea 
                        ref="imageDesc"
                        name="imageDesc"
                        className={this.state.name}
                        onFocus={this.toggleClassName.bind(this)}
                        // onBlur={this.toggleClassName.bind(this)}
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Click to start typing here...&#10;For example : This picture shows how the machines work."
                        >
                    </textarea>
                )
            }
        }

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
                        <h1 >Give a short description to this image.(optional)</h1>
                        <span></span>
                        <div className="flexRowDiv">
                            <div>
                                <img ref="sketch" id="imageA" src="https://78.media.tumblr.com/tumblr_maevq98CDH1ruztjzo1_500.gif" alt=""/>
                            </div>
                            <span></span>
                            <form >
                                {returnTextArea()}
                                {/* <textarea 
                                    ref="imageDesc" 
                                    name="imageDesc" 
                                    id="" 
                                    placeholder="Click to start typing here...&#10;For example : This picture shows how the machines work."
                                    onChange={this.handleChange}
                                >
                                </textarea> */}
                            </form>
                            
                        </div>
                        <span></span>
                        <span></span>
                        <div className="flexRowDiv">
                                <button 
                                    className="brownBtnBig"
                                    onClick={this.backHandler.bind(this)}
                                >Back</button>
                                <button 
                                    className="whiteBtnBig"
                                    onClick={this.nextHandler.bind(this)}
                                >Next</button>
                        </div>
                    </div>
                </div>

                /* ************************ Image description form html end ************************ */
                /* ************************************************************************** */
    )
}
}

const mapStateToProps = (state) => {
    return {
        theSlideData : state.theSlideData,
        overAllData : state.overAllData
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        passImageDesc: imageDescriptionUpload,
        changeSlide: changeSlide,
        imageArrayUpdate: imageArrayUpdate
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Slide3)