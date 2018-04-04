
// const userData = 
//     {
//         id: 1,
//         username: "roronoazoro",
//         aliasname: "Roronoa Zoro",
//         hobbies: ["sword-playing","exercising","boxing"],
//         statusBarLevel: 1,
//         profPicUrl: "https://otaku-w9pxf76zfsktmx3e.stackpathdns.com/wp-content/uploads/2017/07/97f687b32a47575659f8bda17ca4e3fa-zoro-roronoa-monkey.jpg",
//     }


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

// export default function(){
//     return userData
// }