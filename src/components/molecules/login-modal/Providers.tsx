import * as dotenv from 'dotenv';
import * as S from './styled';
import Image from 'next/image';
import naverImg from '../../../../public/naverImg.png';
import kakaoImg from '../../../../public/kakaoImg.png';

dotenv.config();

export const Naver = () => {
  const naverLogin = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=${process.env.NEXT_PUBLIC_NAVER_STATE}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}`;
  };
  return (
    <S.ProviderBox>
      <Image
        src={naverImg}
        alt="네이버로그인"
        onClick={naverLogin}
        width={183}
      />
    </S.ProviderBox>
  );
};

export const Kakao = () => {
  const kakaoLogin = () => {};
  return (
    <S.ProviderBox>
      <Image src={kakaoImg} alt="카카오로그인" onClick={kakaoLogin} />
    </S.ProviderBox>
  );
};

export const Facebook = () => {
  return (
    <S.ProviderBox>
      <button>페이스북 로그인</button>
    </S.ProviderBox>
  );
};
