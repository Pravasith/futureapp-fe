
export const selectIntroText = (text,clickCount) => {
    return {
        type: "ARROW_CLICKED",
        payload: {
            ...text,
            clickCount
        }
    }
}