export default function(state = {
    slideNo: 1
}, action){

    switch(action.type){
        case "IDEA_ENTERED":{
            return {
                ...state,
                slideNo: action.payload.slideNo,
                text: action.payload.text
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