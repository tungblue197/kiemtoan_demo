import axios from 'axios';


const http = axios.create({
    baseURL: 'http://103.74.122.203/kt/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default http;