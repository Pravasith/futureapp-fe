
export function updateProjectType(state = {
    ideaType: null,
}, action){

switch(action.type){
    case "UPDATE_PROJECT_TYPE":
    return {
        ...state,
        ideaType: action.payload
    }

}
return state
}

export function updatedCardData(state = {
}, action){

switch(action.type){
    case "UPDATE_CARD_DATA":
    return action.payload

}
return state
}


