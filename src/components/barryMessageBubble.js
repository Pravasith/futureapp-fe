import React from 'react'
import {ToolTipArrow} from '../assets/images/tooltipArrow'

export const MessageBubble = () => {

    return (
        <div className="messageBubbleWrapper">
            <div className="rectangleWrapper">
                <div className="toolTipArrow">
                    <ToolTipArrow/>
                </div>
                <div className="rectInnerWrapper">
                    <div id="bubble">
                        <div className="bubbleText">
                            <p className="barrySays">Barry says:</p>
                            <p className="barryText">Hello, I will be your assistant!</p>
                        </div>
                        
                        <button className="whiteBtn">Next</button>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}