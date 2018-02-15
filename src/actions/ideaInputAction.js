export const ideaInput = (text, slideNo) => {

    console.log('User input is : ' + text, slideNo)
    return {
        type: "IDEA_ENTERED",
        payload: {
            text,
            slideNo
        }
    }
}