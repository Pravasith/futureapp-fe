import { api } from './apiLinks'
import axios from 'axios'


export const FETCH_USER_DATA = "FETCH_USER_DATA"
export const UPDATE_USER_DATA = "UPDATE_USER_DATA"


export function fetchUserData() {

    return (dispatch) => {
        // const apiURL = "http://159.89.167.240:8000/api/user/userdata"
        const apiURL = api.USER_DATA
        // const apiURL = "http://localhost:8000/api/user/userdata"
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

export function registerNewUser(userdata) {
    return dispatch => {
        return axios.post(api.USER_DATA, userdata, 
            {
                headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                "Content-Type": "application/json"
                }
                // onUploadProgress: progressEvent => {
                //     let progress = (progressEvent.loaded / progressEvent.total * 100) 
                //     console.log( "Progress : " + ( progressEvent.loaded / progressEvent.total * 100 ) + '%' )
                // }
            })
        .then(res => {
            // console.log("response", res)
            dispatch({
                // type: UPDATE_PROJECT_TYPE,
                type: UPDATE_USER_DATA,
                payload: res.data
            })
        })
        .catch(err => {
            console.error('bad', err)
            throw err
        })

    }
}


