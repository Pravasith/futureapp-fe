import React from "react"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"

 
import { Navbar } from "../../components/navbar"
import { NavLink } from 'react-router-dom'
import MainStatusBar from "../startPage/mainStatusBar"

import { MemberIconSmall } from "../../assets/images/memberIconSmall"
import { ConeIcon } from "../../assets/images/coneIcon"
import { PromiseIcon } from "../../assets/images/promiseIcon";
import { MemberIconBig } from "../../assets/images/memberIconBig";
import { LinkedInSmallIcon } from "../../assets/images/socialNetworkIcons";


require("../../assets/cssFiles/teamPanel.css")

class TeamPanel extends React.Component{

    constructor(props, context) {
        super(props, context)

        this.state = {
            
        }

        
    }

    componentDidMount(){
    }

    teamLayouts = () => {

        let teamArr = [
            {
                name: 'Directors',
                members: [],
                promises : {
                    onGoing: 0,
                    delivered: 0
                }
            },
            {
                name: 'Marketing team',
                members: [],
                promises : {
                    onGoing: 0,
                    delivered: 0
                }
            },
            {
                name: 'Product development team',
                members: [],
                promises : {
                    onGoing: 0,
                    delivered: 0
                }
            },
            {
                name: 'Creative content',
                members: [],
                promises : {
                    onGoing: 0,
                    delivered: 0
                }
            },
            {
                name: 'Sales team',
                members: [],
                promises : {
                    onGoing: 0,
                    delivered: 0
                }
            },
            {
                name: 'Technology team',
                members: [],
                promises : {
                    onGoing: 0,
                    delivered: 0
                }
            },
            {
                name: 'Human resource',
                members: [],
                promises : {
                    onGoing: 0,
                    delivered: 0
                }
            },

            
        ]

        return teamArr.map((item, i) => {
                return (
                    <div className="teamCol" key={i}>
                        <div className="teamCircleAndDetails">
                            <div className="teamCircle"></div>
                            <div className="teamBubble">
                                <div className="coneToolTip">
                                    <ConeIcon/>
                                </div>
                                <div className="insideBubble">
                                    <div className="noOfMembers">
                                        <MemberIconSmall/>
                                        <p className="type2">{item.members.length}</p>
                                    </div>
                                    <span></span>
                                    <p className="type2">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            
        })
        
        
    }

    

    render(){

        return(


            <div className="screenWrapper" >
                <Navbar/>

                <div className="rightScreenContainer">
                    <div className="statusBarContainer" >
                    <MainStatusBar/>
                    </div>

                    <div className="focusScreen">
                        <div className="teamPanelWrapper">
                            <div className="teamLayout">
                                <p className="type1">These teams are default teams generated by us. Feel free to add, delete or change your team name.</p>
                                
                                <div className="teamWrap">
                                    {this.teamLayouts()}
                                </div>

                                <div className="sendBtn">+ Add team</div>
                                <span></span>
                                
                            </div>
                            <div className="teamDetails">

                                <div className="teamHeading">
                                    <div className="teamPicture">
                                    </div>
                                    <span></span>
                                    <h2>Product development team</h2>
                                    <span></span>
                                    <div className="editTeam">Edit team</div>
                                </div>

                                <div className="memberDetailWrap">
                                    <div className="teamInfo">
                                        <span></span>
                                        <div className="scheduleNewMeeting">Schedule new meeting</div>

                                        <div className="postLinkedin">
                                            <div className="linkedInIcon">
                                                <LinkedInSmallIcon/>
                                            </div>
                                            <span></span>
                                            Post opening on Linkedin
                                        </div>

                                        <span></span>

                                        <div className="memberDetails">
                                            <div className="flexRowDiv" >
                                                <MemberIconSmall/>
                                                <span></span>
                                                Members
                                            </div>
                                            <p>Pravasith Kumar, Vladimir Putin, Stan Lee, Subash Bose</p>
                                        </div>

                                        <div className="line"></div>

                                        <div className="promiseDetails">
                                            <div className="iconAndPromise" >
                                                <PromiseIcon/>
                                                <span></span>
                                                Ongoing promises : 2
                                            </div>

                                            <div className="promiseInfo">
                                                <div className="title">
                                                    <p>Finish prototyping of model X23 </p>
                                                </div>
                                                <p>Promise delivery date : 24th april 2018. (20 days left)</p>
                                                <p className="smartContracts">
                                                    2 smart contracts signed with tech team.
                                                </p>

                                                <span></span>

                                                <div className="viewContracts">
                                                    View Contracts
                                                </div>
                                                <span></span>
                                                <div className="smallLine"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="suggested">
                                        <div className="memberIconSuggested" >
                                            <MemberIconBig/>
                                            <span></span>
                                            <p>Suggested members</p>
                                        </div>

                                        <div className="allMembersWrapper">

                                            <div className="memberWrapper">
                                                <div className="picAndDetails">
                                                    <div className="picMember"></div>
                                                    <div className="memberInfo">
                                                        <p className="memberName">Pravasith</p>
                                                        <div className="memberLine"></div>
                                                        <p className="memberName">Related by</p>
                                                        <p className="relatedBy">augmented, reality, helmet, road, GPS</p>
                                                    </div>
                                                </div>
                                                <div className="joinReqBtn">Send join-team request</div>
                                            </div>

                                            <div className="memberWrapper">
                                                <div className="picAndDetails">
                                                    <div className="picMember"></div>
                                                    <div className="memberInfo">
                                                        <p className="memberName">Pravasith</p>
                                                        <div className="memberLine"></div>
                                                        <p className="memberName">Related by</p>
                                                        <p className="relatedBy">augmented, reality, helmet, road, GPS</p>
                                                    </div>
                                                </div>
                                                <div className="joinReqBtn">Send join-team request</div>
                                            </div>
                                        
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return(
        {
        }
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {

        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(TeamPanel)
