
// const API_BASE_URL = 'http://159.89.167.240:8000/'
const API_BASE_URL = 'http://localhost:8000/'
const API_PATH = 'api/'
const API_URL = API_BASE_URL + API_PATH


export const api = {
    CREATE_NEW_CARD: API_URL + 'card/newcard',
    USER_DATA: API_URL + 'user/userdata',
    PROJECT_TYPES: API_URL + 'appData/businesstypes',
    UPLOAD_IMAGE: API_URL + 'card/uploadimage'
}
