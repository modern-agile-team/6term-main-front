import AUTHS from '@/apis/oauth';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useRouter } from 'next/router';

const MyPageUserSetting = () => {
  const [provider, setProvider] = useState('');
  const setLoginState = useSetRecoilState(LoginStateAtom);
  const router = useRouter();

  const handleUnlinkMenber = async () => {
    if (confirm('계정을 정말로 삭제하시겠습니까?')) {
      await AUTHS.unlinkMemberApi(provider);
      await AUTHS.deleteAccountUserApi();
      setLoginState(false);
      router.push('/');
    }
  };

  useEffect(() => {
    const tempProvider = localStorage.getItem('provider');
    tempProvider && setProvider(tempProvider);
  }, []);

  return (
    <S.SettingContainer>
      <div>
        <S.SettingBox>환경설정</S.SettingBox>
        <hr />
        <S.DarkModBox>
          <S.SunMod></S.SunMod>
          <S.DarkMod></S.DarkMod>
        </S.DarkModBox>
        <S.UserAccountBox onClick={handleUnlinkMenber}>
          회원탈퇴
        </S.UserAccountBox>
      </div>
    </S.SettingContainer>
  );
};

export default MyPageUserSetting;
