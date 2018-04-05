import { api } from './apiLinks'
import axios from 'axios'


export const UPDATE_PROJECT_TYPE = "UPDATE_PROJECT_TYPE"


export function updateProjectData(projectType) {
    return dispatch => {
        return axios.put(api.CREATE_NEW_CARD, projectType, 
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
            console.log("response", res)
            dispatch({
                type: UPDATE_PROJECT_TYPE,
                payload: res.data.businessType
            })
        })
        .catch(err => {
            console.error(err)
            throw err
        })

    }
}




        


