const initialState = {
    text: "Hi, I am Barry. Keep clicking the next button.",
    clickCount: 1,
    sliderWidth: "1em"
}

export default function(state=initialState, action){
    switch(action.type){
        case "ARROW_CLICKED":
            return action.payload
            break
    }
    return state
}