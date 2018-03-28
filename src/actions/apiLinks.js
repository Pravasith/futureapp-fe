
// const API_BASE_URL = 'http://159.89.167.240:8000/'
const API_BASE_URL = 'http://localhost:8000/'
const API_PATH = 'api/'
const API_URL = API_BASE_URL + API_PATH


export const api = {
    ADD_NEW_USER: API_URL + 'user/adduser',
    UPLOAD_IMAGE: API_URL + 'user/uploadimage'
}
