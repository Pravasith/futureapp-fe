import React from "react"
import {connect} from "react-redux"
 
class MainStatusBar extends React.Component{

    createCircles(){
        return this.props.circles.map((item) => (
            <div  className="circleWrapper">
                <div className="circleStatus"></div>
                <p className="circleText">{item.name}</p>
            </div>
        ))
    }

    render(){
        return(
            <div className="statusBarContainer">
                <div className="circlesStatusBar">
                   {this.createCircles()}
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

export default connect(mapStateToProps)(MainStatusBar)