import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.209.21.62:3000',
});

//토큰 만료 여부 판단
const isTokenExpired = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const result = await instance.get(`/auth/kakao/logout`, {
      headers: {
        access_token: accessToken,
      },
    });
    return result.data.accessToken;
  } catch (err) {
    Promise.reject(err);
  }
};

//토근 갱신
const reNewToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const response = await instance.get(`auth/new-access-token`, {
    headers: {
      refresh_token: refreshToken,
    },
  });
  localStorage.setItem('accessToken', response.data.accessToken);
};

//요청 전 인터셉터
instance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      config.headers['access_token'] = accessToken;
      config.headers['refreshtoken'] = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//요청 후 인터셉터
instance.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      console.log('404 error');
    }
    return response;
  },
  async (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      if (isTokenExpired() !== undefined) await reNewToken();

      const accessToken = localStorage.getItem('accessToken');

      error.config.headers = {
        access_token: accessToken,
      };

      // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
      const response = await axios.request(error.config);
      return response;
    }
    return Promise.reject(error);
    // return error;
  },
);

export default instance;
