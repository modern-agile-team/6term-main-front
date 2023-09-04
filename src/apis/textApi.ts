import axios from "axios"

const TestApi = () =>{
    try {
        const res = axios.get('url');
        return res;
    } catch(err) {
        return Promise.reject(err);
    }
};