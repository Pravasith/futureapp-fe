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

export const sketchUploaded = (fileData) => {

    // console.log('User file is : ' + imageData)
    return {
        type: "SKETCH_UPLOADED",
        payload: fileData
    }
}

export const imageDescriptionUpload = (imageDescription) => {

    // console.log('User file is : ' + imageData)
    return {
        type: "IMAGE_DESCRIPTION_ADDED",
        payload: imageDescription
    }
}

let imageNumber = 0

export const imageArrayUpdate = (imageData, imageDescription) => {
    
    imageNumber++

    // console.log('User file is : ' + imageData)
    return {
        type: "IMAGE_ARRAY_DATA_UPDATE",
        payload: {
            imageData,
            imageNumber,
            imageDescription
        }
    }
}

export const clearImageTempData = () => {

    // console.log('User file is : ' + imageData)
    return {
        type: "CLEAR_IMAGE_TEMP_DATA",
        payload: undefined
    }
}