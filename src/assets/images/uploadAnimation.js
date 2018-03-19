import React from "react"
import { Uploader } from "./uploader";
import { ZeroOneAnim } from "./zeroOneAnimation";

export const UploadAnimation = () => {


    return (
            <div className="uploadingAnim">
                <div className="outerSlider">
                    <div className="innerSlider"></div>
                </div>
                
                <ZeroOneAnim/>
                <Uploader/>
                <p><strong>Uploading your data</strong> (please be patient. May take a while.)</p>
                <span></span>
                    
                
            </div>
    )
}