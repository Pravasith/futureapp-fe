
// const API_BASE_URL = 'http://159.89.167.240:8000/'
const API_BASE_URL = 'http://localhost:8000/'
const API_PATH = 'api/'
const API_URL = API_BASE_URL + API_PATH


export const api = {
    CREATE_NEW_CARD: API_URL + 'card/newcard',
    GET_CARD_DATA: API_URL + 'card/get-card-data',
    DELETE_CARD_DATA : API_URL + 'card/delete-card',
    USER_DATA: API_URL + 'user/userdata',
    GET_USER_DATA : API_URL + 'user/getuserdata',
    REGISTER_LINKEDIN_USER : API_URL + 'user/login-linkedin-user',
    REGISTER_GOOGLE_USER : API_URL + 'user/login-google-user',
    PROJECT_TYPES: API_URL + 'appData/businesstypes',
    UPLOAD_IMAGE: API_URL + 'card/uploadimage',
    UPDATE_COLOR: API_URL + 'card/update-color'
}
