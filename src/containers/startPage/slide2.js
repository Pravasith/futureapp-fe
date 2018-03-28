import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Tick } from './../../assets/images/tick';

//typical import of gsap methods
import { TimelineLite} from "gsap";
import { ImgIcon } from './../../assets/images/imgIcon';

// import actions
import { changeSlide, sketchUploaded } from "../../actions/ideaInputAction";


class Slide2 extends React.Component{

    state = {
        fileName : ["Click here to upload a rough hand drawn sketch or a photo for giving a better idea."],
        realFile : this.props.theSlideData.image ? this.props.theSlideData.image.fileData : undefined,
        inCount : 0,
        isImageUploaded : false
    }

    componentDidMount(){
        const introAnim2 = new TimelineLite()
        introAnim2
        // .set('.slide2',  {smoothOrigin:true, transformOrigin:"50% 50%", scaleY:0,rotation:0.01,})
        .set(".idea",  {smoothOrigin:true,transformOrigin: "50% 50%", scale:0, opacity:0,rotation:0.01})
        .set(".sketch",  {smoothOrigin:true,transformOrigin: "50% 50%", scale:0, opacity:0,rotation:0.01})
        .set(".elaborate",  {smoothOrigin:true,transformOrigin: "50% 50%", scale:0, opacity:0,rotation:0.01})
        .set(".idea .aCircle",  {smoothOrigin:true,background:"#8CC63F",rotation:0.01})

        // .to('.slide2', 0.2, {smoothOrigin:true, transformOrigin:"50% 50%", scaleY:1,rotation:0.01})
        
        .to(".idea", 0.5, {smoothOrigin:true,transformOrigin: "50% 50%", scale:1, opacity:1,rotation:0.01})
        .to(".sketch", 0.5, {smoothOrigin:true,transformOrigin: "50% 50%", scale:1, opacity:1,rotation:0.01})
        .to(".elaborate", 0.5, {smoothOrigin:true,transformOrigin: "50% 50%", scale:1, opacity:1,rotation:0.01})
        
        .to(".elaborate .aCircle", 0.2, {smoothOrigin:true, transformOrigin: "50% 50%", scale:0.8,rotation:0.01})

        if(this.props.theSlideData.image){
            this.uploadHandler(this.props.theSlideData.image.fileData)
        }
    }

    prevSlide(e){

        // the next line changes the state by triggering an action IDEA_ENTERED
        // containing the function ideaInputAction which takes in parameters:
        // 1st: the idea text, 2nd: the slide number to be displayed.
        this.props.changeSlide(1)
        
        if(this.state.realFile){

            // Passing file data(image) to the action so that it is available
            // as props via the reducer 'ideaReducer'
            this.props.passSketchData(this.state.realFile)
        }
    }

    nextSlide(e){
        
        

        if(this.state.isImageUploaded === true){
            // the next line changes the state by triggering an action IDEA_ENTERED
            // containing the function ideaInputAction which takes in parameters:
            // 1st: the idea text, 2nd: the slide number to be displayed.
            this.props.changeSlide(3)

            // Passing file data(image) to the action so that it is available
            // as props via the reducer 'ideaReducer'
            this.props.passSketchData(this.state.realFile)
        }

        else{
            // the next line changes the state by triggering an action IDEA_ENTERED
            // containing the function ideaInputAction which takes in parameters:
            // 1st: the idea text, 2nd: the slide number to be displayed.
            this.props.changeSlide(5)
        }
    }

    changeHandler = (event) => {
        
        // console.log("theFile: " + event.target.files[0].name)
        this.uploadHandler(event.target.files[0])

        this.setState({
            isImageUploaded : true
        })
    }

    uploadHandler = (theFile) => {
        if(theFile){

            // const theFile = theFile
            const reader = new FileReader()

            reader.onloadend = () => {
                
                this.refs.sketch.src = reader.result
                this.refs.sketchText.innerHTML = "Here's your image"
                this.refs.nextButton.innerHTML = "Next"
            }

           let tempArr = []
           

            if( this.props.theSlideData.image && this.state.inCount < 1 ){
                // reader.readAsDataURL(this.props.theSlideData.image.fileData)
                reader.readAsDataURL(this.state.realFile)
                // tempArr = this.props.theSlideData.image.fileData.name.split('')
                tempArr = this.state.realFile.name.split('')

                this.setState({
                    inCount : 1,
                    isImageUploaded : true
                })
            }

            else{
                 reader.readAsDataURL(theFile)
                 tempArr = theFile.name.split('')
            }

            
            let fileNameArr = []
            if(tempArr.length > 16){
                for (let index = 0; index < 5; index++) {
                 fileNameArr.push(tempArr[index])
                }

                for (let index = 0; index < 4; index++) {
                 fileNameArr.push('.') 
                }

                for (let index = tempArr.length-6 ; index < tempArr.length; index++) {
                 fileNameArr.push(tempArr[index])
                }

                
            }

            else{
                fileNameArr = tempArr
                
            }

            this.setState({
                fileName: ["You've selected ",<strong key="unique">{fileNameArr}</strong> , ". Click again if you want to change this."],
                realFile: theFile
            })
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

                        <span></span>
                        
                        <input onChange={this.changeHandler} ref="uploadLabel" style={{display:"none"}} type="file" name="uploadSketch" id="upload-sketch" accept="image/*"/>

                        <label className="uploadContainer" htmlFor="upload-sketch">
                            <div className="imgIcon" ><ImgIcon/></div>
                            <div>
                                <p>{this.state.fileName}</p>
                            </div>
                        </label>
                        {/* {console.log(this.refs.uploadLabel)} */}

                        <span></span>

                        <div className = "flexColDiv">
                            <p ref="sketchText" >For example, here’s a sketch for the augmented reality helmet idea :</p>
                            <img ref="sketch" src="https://s3.ap-south-1.amazonaws.com/images-use-live/niceimage.jpeg" alt=""/>
                            <span></span>

                            <div className="flexRowDiv">
                                <button 
                                    onClick={() => this.prevSlide()} 
                                    className="brownBtnBig">
                                    Back
                                </button>
                                <button
                                    onClick={() => this.nextSlide()}
                                    ref="nextButton" className="whiteBtnBig">
                                    Skip
                                </button>
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
        theSlideData : state.theSlideData
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeSlide: changeSlide,
        passSketchData: sketchUploaded
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Slide2)