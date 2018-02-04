import React from 'react'



import {BarryIcon} from "../assets/images/barryIcon"
import {BankIcon} from "../assets/images/bankIcon"
import {MessageBubble} from "./barryMessageBubble"

export const Navbar = () => {

    return (
        <div className="navbarWrapper">
            <div className="navbarInnerWrapper">
                <span className="empty"></span>
                <div className="iconWrapper profile ">
                    <div className="prof-pic-wrapper">
                        <div className="pp"></div>
                    </div>
                    <p >You</p>
                </div>

                <div className="iconWrapper barry ">
                    <div className="bubbleBindToBarry">
                        <MessageBubble/>
                        <BarryIcon/>
                    </div>
                    
                    <p >Barry</p>
                </div>

                <div className="iconWrapper bank ">
                    <BankIcon/>
                    <p >Bank</p>
                </div>
            </div>
        </div>
    )
}