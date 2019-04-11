import axios from 'axios';

const api = axios.create({
    baseURL: 'https://billiepombo.herokuapp.com'
});


export default api;
