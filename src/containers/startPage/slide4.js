import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//typical import of gsap methods
import { TimelineLite} from "gsap"
import { Tick } from './../../assets/images/tick';
import { ImgIcon } from './../../assets/images/imgIcon';
import { CloseButtonTrippy } from './../../assets/images/closeButtonTrippy';

import { sketchUploaded, imageDescriptionUpload, changeSlide, imageArrayUpdate, clearImageTempData } from '../../actions/ideaInputAction'

class Slide4 extends React.Component{



    componentDidMount(){
        const introAnim = new TimelineLite()
        introAnim
        .from(".idea", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".sketch", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})
        .from(".elaborate", 0.5, {transformOrigin: "50% 50%", scale:0, opacity:0})

        .to(".idea .aCircle", 0.2, {background:"#8CC63F"})
        .to(".elaborate .aCircle", 0.2, {transformOrigin: "50% 50%", scale:0.8})


        // ACTION to create imageArray or push image data into imageArray
        this.props.imageArrayUpdate(
            this.props.theSlideData.image.fileData,
            this.props.theSlideData.image.imageDescription
        )


        // console.log(this.props.overAllData)

        // this.refs.tets.innerHTML= this.props.overAllData.imageArray[0].imageDescription
    }

    
    backHandler(){
        // this.props.passImageDesc(undefined)
        // this.props.passSketch(undefined)

        this.props.clearImageTempData()

        // the next line changes the state by triggering an action IDEA_ENTERED
        // containing the function ideaInputAction which takes in parameters:
        // 1st: the idea text, 2nd: the slide number to be displayed.
        this.props.changeSlide(2)
    }


    render(){
        
        // the following check expression in the next imageArray definition
        // is because components render 2 times before action (in compDidMou)
        // and after the action changes the state. First time there is no
        // this.props.overAllData.imageArray
        const imageArray = this.props.overAllData.imageArray ? this.props.overAllData.imageArray : []
        // console.log(this.props.overAllData.imageArray)


        const makeImagesDivs = () => (
            
            imageArray.map((item, index) => (
                <div key = { "div" + index }>
                    <section 
                        className="trippyCloseBtn"
                        onClick={() => imageArray.splice(index,1)}
                        >
                        <CloseButtonTrippy/>
                    </section>
                    <img 
                        id = { "image" + index }
                        key = { index }
                        src = "https://s-media-cache-ak0.pinimg.com/originals/f8/66/8a/f8668ab07bfc537ec7ff9c08f1bbdab0.gif"
                        alt = ""
                    />
                </div>
            ))
                
        )

        // next code block puts images inside the divs made above
        if(imageArray.length > 0){
            imageArray.map((item, index) => {
                const reader = new FileReader()
                reader.onloadend = () => {
                    // this.refs.image0.src = reader.result
                    document.getElementById('image' + index).src = reader.result     
                }
                reader.readAsDataURL(
                    item.imageData
                )
            })
        }
        

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
                                <p> Click here to upload more pictures if you’d like to.</p>
                            </div>
                    </div>

                    <span></span>
                    <span></span>

                    <div className="imagesWrapper">
                        <div className="flexRowDiv">
                            <div className="imagesHolder">
                                {makeImagesDivs()}
                            </div>
                        </div>
                    </div>

                    
                    <span></span>
                    <span></span>

                    <div className="buttonWrapper">
                            <button 
                                className="brownBtnBig"
                                onClick={this.backHandler.bind(this)}
                            >Back</button>
                            <button className="whiteBtnBig">Next</button>
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
        overAllData : state.overAllData
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        passImageDesc: imageDescriptionUpload,
        passSketch: sketchUploaded,
        changeSlide: changeSlide,
        imageArrayUpdate: imageArrayUpdate,
        clearImageTempData: clearImageTempData
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Slide4)