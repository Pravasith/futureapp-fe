export const ideaInput = (text, slideNo) => {

    // console.log('User input is : ' + text, slideNo)
    return {
        type: "IDEA_ENTERED",
        payload: {
            text,
            slideNo
        }
    }
}

export const sketchUploaded = (imageData) => {

    console.log('User file is : ' + imageData)
    return {
        type: "SKETCH_UPLOADED",
        payload: imageData
    }
}