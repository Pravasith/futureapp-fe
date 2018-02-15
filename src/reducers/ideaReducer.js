export default function(state = {
    slideNo: 1
}, action){

    switch(action.type){
        case "IDEA_ENTERED":
        return action.payload
    }
    return state
}