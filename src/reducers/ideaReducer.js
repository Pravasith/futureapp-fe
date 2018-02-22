export default function(state = {
    slideNo: 1
}, action){

    switch(action.type){
        case "IDEA_ENTERED":{
            return {
                ...state,
                text: action.payload
            }
        }

        case "SLIDE_CHANGE_INITIATED":{
            return {
                ...state,
                slideNo: action.payload
            }
        }

        // case "SKETCH_UPLOADED":{
        //     return {
        //         ...state,
        //         imageData: action.payload
        //     }
        // }

        case "SKETCH_UPLOADED":{
            return {
                ...state,
                image: {
                    fileData: action.payload
                }
            }
        }

        case "IMAGE_DESCRIPTION_ADDED":{
            return {
                ...state,
                image: {
                    ...state.image,
                    imageDescription: action.payload
                }
            }
        }

    }
    return state
}