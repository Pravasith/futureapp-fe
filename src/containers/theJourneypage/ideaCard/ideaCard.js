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
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="starRating">
                            <div className="endsInRow">
                                <StarRating color = {"#94E8FF"} />
                                <div className="imagesQw">
                                    <ImgIcon/>
                                    <p>1</p>
                                </div>
                            </div>
                            <p>Not rated yet</p>
                        </div>
                        <div className="psycoinData">
                            <PsyBill/>
                            <p>0 psybills raised</p>
                        </div>
                        <p>No one remotely working currently</p>
                        <p>No open remote work positions</p>

                    </div>
                    <div className="nameAndAvatar">
                        
                        <div className="avatar">
                            <AnonymousAvatar/>
                        </div>
                        <div className="backLine"></div>
                        <div className="userNameTemp">
                            <p>real.vengeance</p>
                        </div>
                        <div className="responseRate">
                            <p>Response rate</p>
                            <p>8/10</p>
                        </div>
                    </div>
                    <div className="creds">
                        <div className="credWrap">
                            <CourageBlack/>
                            <p>233</p>
                        </div>
                        <div className="credWrap">
                            <WissenBlack/>
                            <p>135</p>
                        </div>
                        <div className="credWrap">
                            <NectarBlack/>
                            <p>313</p>
                        </div>
                    </div>
                </div>
        )
    }
}
