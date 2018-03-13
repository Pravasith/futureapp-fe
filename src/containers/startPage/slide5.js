import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//typical import of gsap methods
import { TimelineLite} from "gsap"
import { Tick } from './../../assets/images/tick';
import { ImgIcon } from './../../assets/images/imgIcon';
import { CloseButtonTrippy } from './../../assets/images/closeButtonTrippy';

import { changeSlide, imageArrayUpdate, elaborateTextadd, finalIdeaUpdate } from '../../actions/ideaInputAction'
import { Uploader } from '../../assets/images/uploader';
import { UploadAnimation } from '../../assets/images/uploadAnimation';


class Slide5 extends React.Component{

    constructor(props, context) {
        super(props, context)
    
        this.state = {
            name: "decriptionText blink",
            value: this.props.overAllData.elaboratedIdea // initially undefined
        }

        this.handleChange = this.handleChange.bind(this)
        this.toggleClassName = this.toggleClassName.bind(this)
    }

    toggleClassName(){
        this.setState({name: "decriptionText blink"})
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    componentDidMount(){
        const introAnim = new TimelineLite()
        introAnim
        .from(".idea", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".sketch", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".elaborate", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})

        .to(".idea .aCircle", 0.2, {background:"#8CC63F"})

        if(this.props.overAllData){
            // check if sketch is uploaded
            if(this.props.overAllData.imageArray.length !== 0){
                introAnim
                .to(".sketch .aCircle", 0.2, {background:"#8CC63F"})
            }
            else
            introAnim.to(".sketch .aCircle", 0.2, {borderColor:"#a5a5a5"})
        }
        else
        introAnim.to(".sketch .aCircle", 0.2, {borderColor:"#a5a5a5"})

    }

    backHandler(){
            this.props.elaborateTextadd(this.refs.descriptionText.value)

///////////// check if sketch is uploaded start //////////////////////////////////////////////
            if(this.props.overAllData){
                if(this.props.overAllData.imageArray.length !== 0){
                    // the next line changes the state by triggering an action IDEA_ENTERED
                    // containing the function ideaInputAction which takes in parameters:
                    // 1st: the idea text, 2nd: the slide number to be displayed.
                    this.props.changeSlide(4)
                }
                else{
                    this.props.changeSlide(2)
                }
            }

            else
            this.props.changeSlide(2)
///////////// check if sketch is uploaded end //////////////////////////////////////////////
    }

    nextHandler(){
        if(!this.refs.descriptionText.value){
            this.setState({
                name: "descriptionText warning"
            })
            this.refs.descriptionText.placeholder = "You have to elaborate your idea. Just see a few examples and come back."
        }

        else{
            // adds elaborate idea to overAllData reducer
            this.props.elaborateTextadd(this.refs.descriptionText.value)
            // adds short idea to overAllData reducer
            this.props.finalIdeaUpdate(this.props.theSlideData.text)

            const endSlide = new TimelineLite()
            endSlide
            .to('.headerClass', 0.2, {transformOrigin: "50% 50%", scale: 0})
            .to('.textAreaClass', 0.2, {transformOrigin: "50% 50%", scale: 0})
            .to('.buttonWrapper', 0.2, {transformOrigin: "50% 50%", scale: 0})

            
            .set('.headerClass',  {display: "none"})
            .set('.textAreaClass',  {display: "none"})
            .set('.buttonWrapper',  {display: "none"})
            .set('.topStatusCircles', {y: -86})
            .to('.topStatusCircles', 0.5, {transformOrigin: "50% 50%", y: 0})
            .to('.topStatusCircles', 0.5, {})
           
            .set(".elaborate .aCircle", {background:"#8CC63F"})
            .to(".elaborate p", 0.2, {opacity:0})
            .to(".sketch p", 0.2, {opacity:0})
            .to(".idea p", 0.2, {opacity:0})
            .to(".aCircle .tick", 0.2, {opacity:0})

            .to(".idea", 0.2, {x:"100%", opacity:0}, "slideIntoMid")
            .to(".elaborate", 0.2, {x:"-100%", opacity:0}, "slideIntoMid")
            .set(".sketch .aCircle", {background:"#E6E6E6", borderColor:"#E6E6E6", transformOrigin:"50% 50%", onComplete: () => {this.props.changeSlide(6)}})
            
            // .to(".sketch .aCircle", 0.3, { transformOrigin:"50% 50%",  scale:"5" })
            // .to(".sketch .aCircle", 0.2, {})
            // .to('.uploadingAnim', 0.1, {display:"flex", transformOrigin:"50% 50%",  scale:"0.2"})
            // .to('.uploadingAnim p', 0.1, {opacity:1})
            // .to("#eyesUpload", 0.2, {y:-7,  onComplete: () => {this.props.changeSlide(6)}})

            
            
        }
    }


    returnTextArea = () => {

        if(!this.props.overAllData.elaboratedIdea){
            return(
                <textarea
                    ref = "descriptionText"
                    className = { this.state.name }
                    onFocus = { this.toggleClassName }
                    name="elaborate"
                    placeholder="Click to start typing here...&#10;For example : Just like google glass, you should be able to see projections in front of your eye. Using augmented reality technology, the user should be able to see a google map navigation in a little box on a corner in his eye view while riding his bike.">
                </textarea>
            )
        }

        

        else{
            return(
                <textarea
                    ref = "descriptionText"
                    className = { this.state.name }
                    onChange = { this.handleChange }
                    onFocus = { this.toggleClassName }
                    value={this.state.value}
                    name="elaborate"
                    placeholder="Don't give up, you! Actions make things possible. Type a few lines describing your idea. You can choose to be anonymous later if you want.">
                </textarea>
            )
        }
        
    }

    render(){

        const highLight = new TimelineLite()
        const highLightWarn = new TimelineLite()

        function warning ()  {
            highLightWarn
            .to('.warning', 0.2, { borderColor: "#FF6C6C"})
            .to('.warning', 0.8, { borderColor: "#FFFFFF", onComplete: warning})
        }

        warning()

        function blink  ()  {
            highLight
            .to('.blink', 0.3, { borderColor: "#94E8FF"})
            .to('.blink', 0.3, { borderColor: "#FCEE21"})
            .to('.blink', 0.3, { borderColor: "#FF94F3"})
            .to('.blink', 0.3, { borderColor: "#FFFFFF", onComplete: blink})
        }

        if(this.state.name !== "descriptionText warning"){
            blink()
        }

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
                                <UploadAnimation/>
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

                    <h1 className="headerClass" >Elaborate your idea. Compare it with real life examples similar to your concept.</h1>

                    <span></span>

                  



                    <div className="flexColDiv textAreaClass">
                            <form >
                                {this.returnTextArea()}
                            </form>
                    </div>

                    <span></span>

                    <div className="buttonWrapper">
                            <button 
                                className="brownBtnBig"
                                onClick = { this.backHandler.bind(this) }
                                >Back
                            </button>
                            <button
                                className="whiteBtnBig"
                                onClick = { this.nextHandler.bind(this) }
                                >Done
                            </button>
                    </div>
                </div>

                /* ************************ Upload image form html end ************************ */
                /* ************************************************************************** */
    )
}
}

const mapStateToProps = (state) => {
    return {
        theSlideData : state.theSlideData,
        overAllData: state.overAllData
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeSlide: changeSlide,
        imageArrayUpdate: imageArrayUpdate,
        elaborateTextadd: elaborateTextadd,
        finalIdeaUpdate: finalIdeaUpdate
    }, dispatch)
}

export default connect( mapStateToProps, matchDispatchToProps)(Slide5)