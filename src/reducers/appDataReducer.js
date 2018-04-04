
export default function(state = []
        , action){

    switch(action.type){
        case "FETCH_PROJECT_TYPES":
        return action.payload

        case "ADD_PROJECT_TYPE":
        return action.payload
    }

    return state
}

