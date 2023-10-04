import { getTokenKakao, getTokenNaver } from '@/apis/oauth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as S from './styled';

interface Company {
  provider: string;
}

const SaveToken = ({ provider }: Company) => {
  const router = useRouter();

  const getToken = async () => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (provider === 'kakao') {
      const result_company = await getTokenKakao(code as string);

      window.localStorage.setItem(
        'KakaoAccessToken',
        result_company.access_token,
      );
      window.localStorage.setItem(
        'KaKaoRefreshToken',
        result_company.refresh_token,
      );
      router.push('/');
    }
    if (provider === 'naver') {
      const result_company = await getTokenNaver(code as string);
      console.log(result_company);
      window.localStorage.setItem(
        'NaverAccessToken',
        result_company.access_token,
      );
      window.localStorage.setItem(
        'NaverRefreshToken',
        result_company.refresh_token,
      );
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <S.Loading>
      <div>로딩중...</div>
    </S.Loading>
  );
};

export default SaveToken;
