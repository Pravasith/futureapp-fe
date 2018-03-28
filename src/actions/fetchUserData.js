export const FETCH_USER_DATA = "FETCH_USER_DATA"

export function fetchUserData() {

    return (dispatch) => {
        // const apiURL = "http://159.89.167.240:8000/api/user/userdata"
        const apiURL = "http://localhost:8000/api/user/userdata"
        return fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: FETCH_USER_DATA,
                payload: data
            })
        })
    }
}