import axios from 'axios'
import { api } from './apiLinks'


export const ADD_PROJECT_TYPE = "ADD_PROJECT_TYPE"
export const FETCH_PROJECT_TYPES = "FETCH_PROJECT_TYPES"


export function fetchProjectTypes() {
    return (dispatch) => {
        // const apiURL = "http://159.89.167.240:8000/api/appData/businesstypes"
        const apiURL = api.PROJECT_TYPES
        // const apiURL = "http://localhost:8000/api/appData/businesstypes"
        return fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: FETCH_PROJECT_TYPES,
                payload: data
            })
        })
    }
}



export function addProjectType(data) {
    return dispatch => {
        return axios.put(api.PROJECT_TYPES, data, 
            {
                headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                "Content-Type": "application/json"
                },
                onUploadProgress: progressEvent => {
                    let progress = (progressEvent.loaded / progressEvent.total * 100) 
                    console.log( "Progress : " + ( progressEvent.loaded / progressEvent.total * 100 ) + '%' )
                }
            })
        .then(res => {
            console.log("res" , res)
            dispatch({
                type: ADD_PROJECT_TYPE,
                payload: res
            })
        })
        .catch(err => {
            console.error(err)
            throw err
        })

    }

}



