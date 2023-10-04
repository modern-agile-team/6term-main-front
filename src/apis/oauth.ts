import axios from 'axios';

const getTokenKakao = async (code: string) => {
  const KAKAO_URL = 'https://kauth.kakao.com/oauth/token';

  try {
    const response = await axios.post(
      KAKAO_URL,
      {
        grant_type: 'authorization_code',
        client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
        redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL,
        code: code,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

const getTokenNaver = async (code: string) => {
  const NAVER_URL = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET}&code=${code}&state=test`;

  const response = await axios.post(NAVER_URL);
  return response.data;
};

export { getTokenKakao, getTokenNaver };
