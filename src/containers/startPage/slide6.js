import React from 'react'
import { Redirect } from 'react-router'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'
import fs from 'fs'

//typical import of gsap methods
import { TimelineLite} from "gsap";

// import actions
import { changeSlide } from "../../actions/ideaInputAction"
import {postDataToMongoDB } from '../../actions/cardActions'
import { api } from '../../actions/apiLinks'


import { UploadAnimation } from '../../assets/images/uploadAnimation'

let uploadImageCount = 0
let imageURLs = []

class Slide6 extends React.Component{

    state = {
        redirect : false
    }

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

                tempImgArray.map((item, index) => {
                    const fd = new FormData()
                    fd.append('toxicData' , item , item.name + 'imageNoSeparatorX' + (index + 1))
                    this.uploadImageToBackend(fd)
                })
            }

            else
            // this.makeCardDataAndPostToMongoDB([])
            this.props.postDataToMongoDB([], this.props.overAllData)
            .then(() => {
                this.setState({ redirect: true })
            })
            .catch(err => {
                console.error(err)
                throw err
            })
            
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
                // onUploadProgress: progressEvent => {
                //     let progress = (progressEvent.loaded / progressEvent.total * 100) 
                //     console.log( "Progress : " + ( progressEvent.loaded / progressEvent.total * 100 ) + '%' )
                // }
            })
        .then(res => {
            uploadImageCount++
            imageURLs.push({
                url: res.data.imageURL,
                num: res.data.imageNo
            })
            if( uploadImageCount === this.props.overAllData.imageArray.length ){
                    // this.makeCardDataAndPostToMongoDB(imageURLs)
                    this.props.postDataToMongoDB(imageURLs, this.props.overAllData)
                    .then(() => {
                        this.setState({ redirect: true })
                    })
                    .catch(err => {
                        console.error(err)
                        throw err
                    })

            }
        })
        .catch(err => {
            console.error(err)
            throw err
        })
    }


    // makeCardDataAndPostToMongoDB(imageArr){

    //     // posts the data to mongodb. 

    //     imageArr.sort(function(a, b){return a.num - b.num})

    //     let newImgData = this.props.overAllData.imageArray.reduce((all, item, index) => {
    //         // console.log("image desc =" , item.imageDescription)
    //         const imageDetailsObject = {
    //             "imageNumber" : index + 1,
    //             "imageURL" : imageArr[index].url,
    //             "imageDescription" : item.imageDescription === '' ? "No description provided" : item.imageDescription
    //         }
    //         return [
    //             ...all,
    //             imageDetailsObject
    //         ]
    //     }, [])

    //     let userArr = {
    //         shortIdea: this.props.overAllData.shortIdea,
    //         elaboratedIdea: this.props.overAllData.elaboratedIdea,
    //         imageArray: newImgData
    //     }

    //     axios.post(api.CREATE_NEW_CARD, userArr, 
    //         {
    //             headers: {
    //             'accept': 'application/json',
    //             'Accept-Language': 'en-US,en;q=0.8',
    //             'Content-Type': 'application/json'                   
    //             },
    //             onUploadProgress: progressEvent => {
    //                 let progress = (progressEvent.loaded / progressEvent.total * 100) 
    //                 console.log( "Progress : " + ( progressEvent.loaded / progressEvent.total * 100 ) + '%' )
    //             }
    //         })
    //     .then(res => {
    //         console.log("MONGODATA", res)
    //         this.setState({ redirect: true })
            
    //     })
    //     .catch(err => {
    //         console.error(err)
    //         throw err
    //     })

    // }

    render(){

        // console.log(this.props.overAllData)

        const { redirect } = this.state

        if (redirect) {
            return <Redirect to='/journeybegins'/>;
        }
        
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
        overAllData : state.overAllData,
        updatedCardData: state.updatedCardData
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeSlide: changeSlide,
        postDataToMongoDB
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Slide6)