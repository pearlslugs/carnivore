import axios from 'axios';

const userUrl = '/api/getUser/:id'
const templateUrl = 'http://localhost:3000/api/getTemplate/:id'

const getUser = (email) => {
    const request = axios.get(userUrl, email);
    return request.then(res => res.data);
}

const getTemplates = (template) => {
    const request = axios.get(templateUrl, {data: {params: {template, page: "template"}} });
    return request.then(res => res.data)
}
const getReviewsPage = (template) => {
    const request = axios.get(templateUrl, {data: {params: {template, page: "reviews"} }});
    return request.then(res => res.data)
}
export default {getTemplates, getUser, getReviewsPage}