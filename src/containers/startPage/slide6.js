import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


//typical import of gsap methods
import { TimelineLite} from "gsap";

// import actions
import { changeSlide } from "../../actions/ideaInputAction";
import { UploadAnimation } from '../../assets/images/uploadAnimation';


class Slide6 extends React.Component{

    componentDidMount(){
            const endSlide = new TimelineLite()
            endSlide
            .set(".sketch .aCircle", {background:"#E6E6E6", borderColor:"#E6E6E6", transformOrigin:"50% 50%"})
            .to(".sketch .aCircle", 0.3, { transformOrigin:"50% 50%",  scale:"5" })
            .to(".sketch .aCircle", 0.2, {})
            .to('.uploadingAnim', 0.1, {display:"flex", transformOrigin:"50% 50%",  scale:0.2})
            .to('.uploadingAnim p', 0.1, {opacity:1})
            .to("#eyesUpload", 0.2, {y:-7,  onComplete: () => {endSlide.kill}})
    }

    render(){

        console.log(this.props.overAllData)
        
        return(
                /* ************************************************************************** */
                /* *********************** Upload image form html start *********************** */

                <div className="ideaElementWrapper slide6">
                    <div className="topStatusCircles">
                        
                        <div className="sCircle sketch">
                            <div className="aCircle">
                                <UploadAnimation/>
                            </div>
                        </div>
                        
                    </div>

                    <span ></span>

                </div>

                /* ************************ Upload image form html end ************************ */
                /* ************************************************************************** */
    )
}
}

const mapStateToProps = (state) => {
    return {
        overAllData : state.overAllData
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeSlide: changeSlide
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Slide6)