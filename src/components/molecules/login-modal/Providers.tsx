import * as dotenv from 'dotenv';
import * as S from './styled';
import Image from 'next/image';
import naverImg from '../../../../public/naverImg.png';
import kakaoImg from '../../../../public/kakaoImg.png';

dotenv.config();

export const Naver = () => {
  const naverLogin = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}&state=${process.env.NEXT_PUBLIC_NAVER_STATE}`;
  };

  return (
    <S.ProviderBox>
      <Image
        src="https://ma6-main.s3.ap-northeast-2.amazonaws.com/ma6_main_images/naverImg.png"
        alt="네이버로그인"
        onClick={naverLogin}
        height={50}
        width={183}
      />
    </S.ProviderBox>
  );
};

export const Kakao = () => {
  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;
  };
  return (
    <S.ProviderBox>
      <Image
        src="https://ma6-main.s3.ap-northeast-2.amazonaws.com/ma6_main_images/kakaoImg.png"
        alt="카카오로그인"
        width={183}
        height={50}
        onClick={kakaoLogin}
      />
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
