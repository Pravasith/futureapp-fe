import React from "react"
import { Uploader } from "./uploader";
import { ZeroOneAnim } from "./zeroOneAnimation";

export const UploadAnimation = () => {


    return (
            <div className="uploadingAnim">
                <ZeroOneAnim/>
                <Uploader/>
                <p><strong>Uploading your data</strong></p>
                <span></span>
            </div>
    )
}