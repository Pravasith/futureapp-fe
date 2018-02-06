import React from 'react'
import {ToolTipArrow} from '../assets/images/tooltipArrow'
import {CloseButton} from '../assets/images/closeButton'
import {WissenBlack} from '../assets/images/wissenBlack'
import {CourageBlack} from '../assets/images/courageBlack'
import {WissenWhite} from '../assets/images/wissenWhite'
import {CourageWhite} from '../assets/images/courageWhite'
import {NectarBlack} from '../assets/images/nectarBlack'
import {NectarWhite} from '../assets/images/nectarWhite'
import BarryBubbleText from '../containers/startPage/barryBubbleText';


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
                            <div className="barryText"><BarryBubbleText/></div>
                        </div>
                        <button className="whiteBtn">Next</button>
                    </div>
                    <div className="closeButton">
                        <CloseButton/>
                    </div>
                    <WissenBlack/>
                    <CourageBlack/>
                    <WissenWhite/>
                    <CourageWhite/>
                    <NectarBlack/>
                    <NectarWhite/>
                </div>
                
            </div>
        </div>
        
        
    )
}