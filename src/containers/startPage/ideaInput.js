import React from "react"
import { Bulb } from "../../assets/images/bulb";



export default class IdeaInput extends React.Component{
    render(){
        return(
            <div className="ideaInputWrapper">
                <div className="greenBgd">
                    <div>
                        <Bulb/>
                    </div>
                </div>
                {/* <div className="someText">
                </div> */}
            </div>
        )
    }
}