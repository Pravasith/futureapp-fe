export const statusAction = (currentLevel, buttonData) => {
    // console.log('you clicked on :' + buttonData)
    return {
        type: "STATUS_CLICKED",
        payload: {
            buttonData,
            currentLevel 
        }
    }
}