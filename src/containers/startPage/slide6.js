import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'
import fs from 'fs'

//typical import of gsap methods
import { TimelineLite} from "gsap";

// import actions
import { changeSlide } from "../../actions/ideaInputAction"
import { api } from '../../actions/apiLinks'


import { UploadAnimation } from '../../assets/images/uploadAnimation'

let uploadImageCount = 0
let imageURLs = []

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

            if(this.props.overAllData.imageArray.length !== 0){
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
                    fd.append('toxicData' , item , item.name + 'imageNoSeparatorX' + (index + 1))
                    this.uploadImageToBackend(fd)
                })
            }

            else
            this.makeUserDataAndPostToMongoDB([])
            
    }

    // imageFreeData

    uploadImageToBackend = (theFile) => {

        // uploads image to backend. From there 
        // the image is written to an s3 bucket

        axios.post(api.UPLOAD_IMAGE, theFile, 
            {
                headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': 'image/png' || 'image/jpg' || 'image/jpeg' || 'image/gif'                    
                },
                onUploadProgress: progressEvent => {
                    let progress = (progressEvent.loaded / progressEvent.total * 100) 
                    console.log( "Progress : " + ( progressEvent.loaded / progressEvent.total * 100 ) + '%' )
                }
            })
        .then(res => {
            uploadImageCount++
            imageURLs.push({
                url: res.data.imageURL,
                num: res.data.imageNo
            })
            if( uploadImageCount === this.props.overAllData.imageArray.length ){
                    this.makeUserDataAndPostToMongoDB(imageURLs)
            }
        })
        .catch(err => {
            console.error(err)
            throw err
        })
    }

    makeUserDataAndPostToMongoDB(imageArr){

        imageArr.sort(function(a, b){return a.num - b.num})

        let newImgData = this.props.overAllData.imageArray.reduce((all, item, index) => {
            return [
                ...all,
                {
                    "imageNumber" : index + 1,
                    "imageURL" : imageArr[index].url,
                    "imageDescription" : item.imageDescription
                }
            ]
        }, [])

        let userArr = {
            shortIdea: this.props.overAllData.shortIdea,
            elaboratedIdea: this.props.overAllData.elaboratedIdea,
            imageArray: newImgData
        }

        axios.post(api.ADD_NEW_USER, userArr, 
            {
                // headers: {
                // 'accept': 'application/json',
                // 'Accept-Language': 'en-US,en;q=0.8',
                // 'Content-Type': 'image/png' || 'image/jpg' || 'image/jpeg' || 'image/gif'                    
                // },
                onUploadProgress: progressEvent => {
                    let progress = (progressEvent.loaded / progressEvent.total * 100) 
                    console.log( "Progress : " + ( progressEvent.loaded / progressEvent.total * 100 ) + '%' )
                }
            })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err)
            throw err
        })

        

        console.log('sorted one: ', imageArr)
        console.log("imgdata: ", newImgData)
        console.log("imgdata: ", userArr)

        

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