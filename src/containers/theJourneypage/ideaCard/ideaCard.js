import React from "react"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import StarRating from '../../../assets/images/starRating'
import { ImgIcon } from "../../../assets/images/imgIcon";
import { PsyBill } from "../../../assets/images/psybill";
import { AnonymousAvatar } from "../../../assets/images/anonymousAvatar";
import { CourageBlack } from "../../../assets/images/courageBlack";
import { WissenBlack } from "../../../assets/images/wissenBlack";
import { NectarBlack } from "../../../assets/images/nectarBlack";

import { getCardData } from "../../../actions/cardActions"


require("../../../assets/cssFiles/ideaCard.css")

class IdeaCard extends React.Component{

    constructor(props, context) {
        super(props, context)

        this.state = {
            businessType : this.props.cardData.ideaType ? this.props.cardData.ideaType : "Select project type",
            noOfImages : this.props.cardData.imageArray? this.props.cardData.imageArray.length : 0,
            idea : this.props.cardData.shortIdea ? this.props.cardData.shortIdea : "the idea goes here",
            robotName : this.props.cardData.robotName ? this.props.cardData.robotName : "Your name",
            courage : this.props.cardData.userStatData ? this.props.cardData.userStatData.courage : 0,
            wisdom : this.props.cardData.userStatData ? this.props.cardData.userStatData.wisdom : 0,
            nectar : this.props.cardData.userStatData ? this.props.cardData.userStatData.nectar : 0,
            color : this.props.cardData.cardColor ? this.props.cardData.cardColor : "#333333",
            profilePicture : this.props.cardData.profilePicture ? this.props.cardData.profilePicture : "https://i.pinimg.com/originals/5f/58/0c/5f580c8bc800617cc9c51f5204f7afb8.jpg",
        }
    }

    componentDidMount(){
        let username = {
            robotName : localStorage.getItem('username')
        }

        this.props.getCardData(username)
        .then(() => {
            this.setState({
                businessType : this.props.cardData.ideaType ? this.props.cardData.ideaType : "Select project type",
                noOfImages : this.props.cardData.imageArray? this.props.cardData.imageArray.length : 0,
                idea : this.props.cardData.shortIdea ? this.props.cardData.shortIdea : "the idea goes here",
                robotName : this.props.cardData.robotName ? this.props.cardData.robotName : "Your name",
                courage : this.props.cardData.userStatData ? this.props.cardData.userStatData.courage : 0,
                wisdom : this.props.cardData.userStatData ? this.props.cardData.userStatData.wisdom : 0,
                nectar : this.props.cardData.userStatData ? this.props.cardData.userStatData.nectar : 0,
                color : this.props.cardData.cardColor ? this.props.cardData.cardColor : "#333333",
                profilePicture : this.props.cardData.profilePicture ? this.props.cardData.profilePicture : "https://i.pinimg.com/originals/5f/58/0c/5f580c8bc800617cc9c51f5204f7afb8.jpg",
            })
        })
        .catch((err) => {
            console.error(err)
        }) 
    }


    render(){

        return(
                <div className="ideaCard">
                    <div className="ideaUpperWrap">

                        <p 
                            className="ideaType"
                            style={{'color' : this.props.color ? this.props.color : this.state.color }}
                            >{this.props.businessType ? this.props.businessType : this.state.businessType }</p>
                        <p >{this.props.idea ? this.props.idea : this.state.idea }</p>
                        <div className="starRating">
                            <div className="endsInRow">
                                <StarRating color = {"#94E8FF"} />
                                <div className="imagesQw">
                                    <ImgIcon/>
                                    <p>{this.props.noOfImages ? this.props.noOfImages : this.state.noOfImages }</p>
                                </div>
                            </div>
                            <p id = "ratingData">Not rated yet</p>
                        </div>
                        <div className="psycoinData">
                            <PsyBill/>
                            <p>0 psybills raised</p>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur ad</p> */}
                        </div>
                        <p>No one remote-working currently</p>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur ad</p> */}
                        <p>No open remote work positions</p>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur ad</p> */}

                    </div>
                    <div className="nameAndAvatar">
                        
                        
                        <div 
                            className="avatar"
                            style={{'borderColor': this.props.color ? this.props.color : this.state.color}}
                            >
                                <AnonymousAvatar/>
                                <img src={this.props.profilePicture ? this.props.profilePicture : this.state.profilePicture} alt=""/>
                        </div>
                        <div 
                            className="backLine"
                            style={{background: this.props.color ? this.props.color : this.state.color}}
                        >
                        </div>
                        <div 
                            className="userNameTemp"
                            style={{background: this.props.color ? this.props.color : this.state.color}}
                            >
                                <p>{ this.props.robotName ? this.props.robotName : this.state.robotName}</p>
                        </div>
                        <div className="responseRate">
                            <p>Response rate</p>
                            <p>8/10</p>
                        </div>
                    </div>
                    <div className="creds">
                        <div className="credWrap">
                            <CourageBlack/>
                            <p>{this.props.courage ? this.props.courage : this.state.courage }</p>
                        </div>
                        <div className="credWrap">
                            <WissenBlack/>
                            <p>{this.props.wisdom ? this.props.wisdom : this.state.wisdom }</p>
                        </div>
                        <div className="credWrap">
                            <NectarBlack/>
                            <p>{this.props.nectar ? this.props.nectar : this.state.nectar }</p>
                        </div>
                    </div>
                </div>
        )
    }
}


function mapStateToProps(state){
    return(
        {
            cardData : state.updatedCardData
        }
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            getCardData
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(IdeaCard)
