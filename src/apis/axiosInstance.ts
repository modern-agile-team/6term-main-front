import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.209.21.62:3000',
});

//요청 전 인터셉터
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//요청 후 인터셉터
instance.interceptors.response.use(
  (response) => {
    //요청 성공
    return response;
  },
  async (error) => {
    //요청 실패
    return Promise.reject(error);
  },
);

export default instance;
