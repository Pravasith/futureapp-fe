import { api } from './apiLinks'
import axios from 'axios'


export const UPDATE_PROJECT_TYPE = "UPDATE_PROJECT_TYPE"
export const UPDATE_CARD_DATA = "UPDATE_CARD_DATA"


export function updateProjectData(projectTypeAndName) {
    return dispatch => {
        return axios.put(api.CREATE_NEW_CARD, projectTypeAndName, 
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
                type: UPDATE_CARD_DATA,
                payload: res.data
            })
        })
        .catch(err => {
            console.error(err)
            throw err
        })

    }
}

export function postDataToMongoDB(imageArr, overAllData) {
    return dispatch => {
        // posts the data to mongodb. 

    imageArr.sort(function(a, b){return a.num - b.num})

    let newImgData = overAllData.imageArray.reduce((all, item, index) => {
        // console.log("image desc =" , item.imageDescription)
        const imageDetailsObject = {
            "imageNumber" : index + 1,
            "imageURL" : imageArr[index].url,
            "imageDescription" : item.imageDescription === '' ? "No description provided" : item.imageDescription
        }
        return [
            ...all,
            imageDetailsObject
        ]
    }, [])

    let userArr = {
        shortIdea: overAllData.shortIdea,
        elaboratedIdea: overAllData.elaboratedIdea,
        imageArray: newImgData
    }

    return axios.post(api.CREATE_NEW_CARD, userArr, 
        {
            headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': 'application/json'                   
            },
            onUploadProgress: progressEvent => {
                let progress = (progressEvent.loaded / progressEvent.total * 100) 
                console.log( "Progress : " + ( progressEvent.loaded / progressEvent.total * 100 ) + '%' )
            }
        })
    .then(res => {
        dispatch({
            type: UPDATE_CARD_DATA,
            payload: res.data
        })
        
    })
    .catch(err => {
        console.error(err)
        throw err
    })

    }
}





        


