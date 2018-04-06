import React from "react"


import StarRating from '../../../assets/images/starRating'
import { ImgIcon } from "../../../assets/images/imgIcon";
import { PsyBill } from "../../../assets/images/psybill";
import { AnonymousAvatar } from "../../../assets/images/anonymousAvatar";
import { CourageBlack } from "../../../assets/images/courageBlack";
import { WissenBlack } from "../../../assets/images/wissenBlack";
import { NectarBlack } from "../../../assets/images/nectarBlack";


require("../../../assets/cssFiles/ideaCard.css")

export default class IdeaCard extends React.Component{

    componentDidMount(){

    }


    render(){

        return(
                <div className="ideaCard">
                    <div className="ideaUpperWrap">

                        <p className="ideaType" >{this.props.businessType}</p>
                        <p >{this.props.idea}</p>
                        <div className="starRating">
                            <div className="endsInRow">
                                <StarRating color = {"#94E8FF"} />
                                <div className="imagesQw">
                                    <ImgIcon/>
                                    <p>{this.props.noOfImages}</p>
                                </div>
                            </div>
                            <p id = "ratingData">Not rated yet</p>
                        </div>
                        <div className="psycoinData">
                            <PsyBill/>
                            {/* <p>0 psybills raised</p> */}
                            <p>Lorem ipsum dolor sit amet, consectetur ad</p>
                        </div>
                        {/* <p>No one remote-working currently</p> */}
                        <p>Lorem ipsum dolor sit amet, consectetur ad</p>
                        {/* <p>No open remote work positions</p> */}
                        <p>Lorem ipsum dolor sit amet, consectetur ad</p>

                    </div>
                    <div className="nameAndAvatar">
                        
                        
                        <div 
                            className="avatar"
                            style={{'borderColor':this.props.color}}
                            >
                                <AnonymousAvatar/>
                        </div>
                        <div 
                            className="backLine"
                            style={{background: this.props.color}}
                        >
                        </div>
                        <div 
                            className="userNameTemp"
                            style={{background: this.props.color}}
                            >
                                <p>{this.props.robotName}</p>
                        </div>
                        <div className="responseRate">
                            <p>Response rate</p>
                            <p>8/10</p>
                        </div>
                    </div>
                    <div className="creds">
                        <div className="credWrap">
                            <CourageBlack/>
                            <p>{this.props.courage}</p>
                        </div>
                        <div className="credWrap">
                            <WissenBlack/>
                            <p>{this.props.wisdom}</p>
                        </div>
                        <div className="credWrap">
                            <NectarBlack/>
                            <p>{this.props.nectar}</p>
                        </div>
                    </div>
                </div>
        )
    }
}
