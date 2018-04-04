import axios from 'axios'
import { api } from './apiLinks'


export const ADD_PROJECT_TYPE = "ADD_PROJECT_TYPE"


export function addProjectType(data) {
    return dispatch => {
        return axios.post(api.PROJECT_TYPES, data, 
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

