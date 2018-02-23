export default function(state = {
    imageArray: []
}, action){

    switch(action.type){

        // Put this in a new reducer

        case "IMAGE_ARRAY_DATA_UPDATE":{
            return [
                    ...state.imageArray,
                    action.payload
                ]
            
        }
    }
    return state
}