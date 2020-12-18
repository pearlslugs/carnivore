import axios from 'axios';

const userUrl = '/api/getUser/:id'
const emailUrl = 'api/send-email'
const templateUrl = 'http://localhost:3000/api/getTemplate/:id'

const getUser = (email) => {
    const request = axios.get(userUrl, email);
    return request.then(res => res.data);
}

const getPage = (template, page) => {
    const request = axios.get(templateUrl, {data: {params: {template, page: page}} });
    return request.then(res => res.data)
}

const sendEmail = (emailObject) => {
    const request = axios.post(emailUrl, emailObject)
    return request.then(res => res.data)
}

export default {getPage, sendEmail}