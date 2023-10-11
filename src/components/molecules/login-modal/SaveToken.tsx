import AUTH from '@/apis/oauth';
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

    const result = await AUTH.getToken(provider, code as string);
    localStorage.setItem('accessToken', result.accessToken);
    localStorage.setItem('refreshToken', result.refreshToken);
  };

  useEffect(() => {
    getToken().then((res) => console.log(res));
  }, []);

  return (
    <S.Loading>
      <div>로딩중...</div>
    </S.Loading>
  );
};

export default SaveToken;
