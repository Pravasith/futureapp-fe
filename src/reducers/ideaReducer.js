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

        case "SKETCH_UPLOADED":{
            return {
                ...state,
                imageData: action.payload
            }
        }
    }
    return state
}