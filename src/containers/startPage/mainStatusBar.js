import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

//typical import of gsap methods
import {TimelineLite} from "gsap";

import {statusAction} from "../../actions/statusLevelActions"
import { fetchUserData } from "../../actions/userActions"
 
class MainStatusBar extends React.Component{

    
    fillStatusBar(statusLevel){
        // Status bar animations
        const fillSBar = new TimelineLite()
        fillSBar
        .to(".statusBarContainer", 0.5, {opacity:1})
        .to(".statusBarFill", 1, {width:statusLevel*11.1111+"%"})
        let c = 0
        while( c < statusLevel ){
            fillSBar.to("#circle" + c + " .circleStatus", 0.3, {background:"#FFF", transformOrigin:"50% 50%", scale: 0.5})
            c++
        }
        fillSBar.to("#circle" + statusLevel + " .circleStatus" , 0.8, {background:"#FF7FB4"} )
        .to("#circle" + statusLevel + " p", 0.5 , {color: "#FF7FB4"})
    }

    componentDidMount(){

        // this.props.fetchUserData() // gets user data from backend
        // .then(() => {
        //     this.fillStatusBar(
        //         // Put in the level in the next line to animate 
        //         // the status bar according to that ex. 5 or 4 or 8 etc.
        //         this.props.statusBarLevel ? this.props.statusBarLevel : 1
        //     )
        // })
        // .catch((err) => this.fillStatusBar(
        //         // Put in the level in the next line to animate 
        //         // the status bar according to that ex. 5 or 4 or 8 etc.
        //         this.props.statusBarLevel ? this.props.statusBarLevel : 1
        // ))

        this.fillStatusBar(
            // Put in the level in the next line to animate 
            // the status bar according to that ex. 5 or 4 or 8 etc.
            this.props.statusBarLevel ? this.props.statusBarLevel : 1
        )

    }


    createCircles(){

        return this.props.circles.map((item) => (
            <div key={item.id} id={item.id} className="circleWrapper"
            
            // Passing onClick function to the Action STATUS_CLICKED
            onClick = {() => this.props.statusAction(this.props.userDetails.statusBarLevel, item.name)}

            >
                <div  className="circleStatus"></div>
                <div className="flexSet" >
                    <p  className="circleText">{item.name}</p>
                </div>
                
            </div>
        ))
    }

    render(){
        return(
            <div className="insideComponent" >
                <div className="circlesStatusBar">
                    <div></div>
                    {this.createCircles()}
                    <div></div>
                </div>
                <div className="mainStatusBarWrapper">
                    <div className="mainStatusBarBgd">
                        <div className="statusBarFill"></div>
                    </div>
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return(
        {
            userDetails : state.userDetails,
            circles : state.circles
        }
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            statusAction: statusAction,
            fetchUserData
        },
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(MainStatusBar)