
export function userDetailReducer(state = {
        statusBarLevel: 1,
    }, action){

    switch(action.type){
        case "FETCH_USER_DATA":
        return {
            ...state,
            ...action.payload
        }

    }
    return state
}

export function createUser(state = {
    }, action){

switch(action.type){
    case "UPDATE_USER_DATA":
    return {
        ...state,
        ...action.payload
    }

}
return state
}
