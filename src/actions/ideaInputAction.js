export const ideaInput = (text) => {

    // console.log('User input is : ' + text)
    return {
        type: "IDEA_ENTERED",
        payload: text
    }
}

export const changeSlide = (slideNo) => {

    // console.log('Slide number is : ' + slideNo)
    return {
        type: "SLIDE_CHANGE_INITIATED",
        payload: slideNo
    }
}

export const sketchUploaded = (imageData) => {

    // console.log('User file is : ' + imageData)
    return {
        type: "SKETCH_UPLOADED",
        payload: imageData
    }
}