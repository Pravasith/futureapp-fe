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
                        <p>I will be your assistant</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}