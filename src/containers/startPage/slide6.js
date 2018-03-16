import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'
import fs from 'fs'

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

            // this.uploadFile(this.props.overAllData)

            let tempArr = []
            let tempImgArray = []

            tempArr = tempArr.concat(this.props.overAllData.imageArray)

            // Array holding the file datas of images
            tempImgArray = tempArr.reduce((all, item, index) => {
                all[index] = item.imageData
                return all
            }, [])

            // Upload images to backend and from there to aws s3 bucket
            tempImgArray.map((item, index) => {
                const fd = new FormData()
                fd.append('image' , item , item.name)
                this.uploadFile(fd)
            })

            console.log(tempImgArray)

            // const fd = new FormData()
            // fd.append('TheShit',this.props.overAllData.imageArray[0].imageData, this.props.overAllData.imageArray[0].imageData.name)
            // // let e = fs.readFileSync(this.props.overAllData.imageArray[0].imageData)

            // console.log(fd)

            // this.uploadFile({
            //     elaboratedIdea: "blue",
            //     shortIdea: "moon",
            //     imageArray:[
            //         {
            //             imageDescription: 'yollo'
            //         },
            //         {
            //             imageData: fd
            //         }
            //     ]
            // })

            // this.uploadFile(fd)
    }

    uploadFile = (theFile) => {
        axios.post('http://localhost:8000/api/user/uploadimage', theFile, 
            {
                headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': 'image/png' || 'image/jpg' || 'image/jpeg' || 'image/gif'
                    // theFile.type
                    
                }
            })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err)
            throw err
        })
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