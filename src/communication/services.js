import axios from 'axios';

const userUrl = '/api/getUser/:id'
const templateUrl = 'http://localhost:3000/api/getTemplate/:id'

const getUser = (email) => {
    const request = axios.get(userUrl, email);
    return request.then(res => res.data);
}

const getTemplates = (id) => {
    const request = axios.get(`${templateUrl}/${id}`);
    return request.then(res => res.data);
}

export default {getTemplates, getUser}