import AUTHS from '@/apis/oauth';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useRouter } from 'next/router';
import { useDarkMode } from '@/hooks/useDarkMod';
import { themeState } from '@/recoil/atoms/ThemeStateAtom';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';

const MyPageUserSetting = () => {
  const [provider, setProvider] = useState('');
  const setLoginState = useSetRecoilState(LoginStateAtom);
  const router = useRouter();
  const [_, toggleTheme] = useDarkMode();
  const [theme] = useRecoilState(themeState);

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
        <S.UserAccountBox onClick={handleUnlinkMenber}>
          회원탈퇴
        </S.UserAccountBox>
      </div>
    </S.SettingContainer>
  );
};

export default MyPageUserSetting;
