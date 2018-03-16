// let API_BASE_URL = 'http://139.59.2.213:8888/';
const API_BASE_URL = 'http://localhost:8000/';
const API_PATH = 'api/';
const API_URL = API_BASE_URL + API_PATH;


export const api = {
    REGISTER_USER: API_URL + 'user/adduser',
    UPLOAD_IMAGE: API_URL + 'user/uploadimage'
}
