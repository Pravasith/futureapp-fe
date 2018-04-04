
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