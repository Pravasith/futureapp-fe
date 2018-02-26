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

    // console.log('User file is : ' + fileData)
    return {
        type: "SKETCH_UPLOADED",
        payload: fileData
    }
}

export const imageDescriptionUpload = (imageDescription) => {

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

    return {
        type: "CLEAR_IMAGE_TEMP_DATA",
        payload: undefined
    }
}

export const deleteImageDataFromArray = (updatedArray) => {

    return {
        type: "IMAGE_ARRAY_ITEM_DELETE",
        payload: updatedArray
    }
}

export const elaborateTextadd = (elaboratedIdeaText) => {

    return {
        type: "IDEA_ELABORATE_TEXT_ADDED",
        payload: elaboratedIdeaText
    }
}

export const finalIdeaUpdate = (shortIdeaText) => {

    return {
        type: "IDEA_UPDATED_FINAL_SLIDE",
        payload: shortIdeaText
    }
}