import { api } from './apiLinks'
import axios from 'axios'


export const FETCH_USER_DATA = "FETCH_USER_DATA"
export const UPDATE_USER_DATA = "UPDATE_USER_DATA"


export function fetchUserData(id) {

    

    return (dispatch) => {

        return axios.post(api.GET_USER_DATA, { id },
            {
                headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                "Content-Type": "application/json",
                
                },
                withCredentials: true
            })

        .then(res => {
            console.log("response", res)
            dispatch({
                // type: UPDATE_PROJECT_TYPE,
                type: FETCH_USER_DATA,
                payload: res.data
            })
        })
        .catch(err => {
            console.error('bad', err)
            throw err
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
                "Content-Type": "application/json",
                
                },
                withCredentials: true
            })
        .then(res => {
            console.log("response", res)
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


