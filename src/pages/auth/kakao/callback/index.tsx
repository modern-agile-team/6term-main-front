import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectUri = () => {
  const router = useRouter();
  useEffect(() => {
    //axios요청 code를 넘겨줌
    const code = new URL(window.location.href).searchParams.get('code');
    //요청 성공시 router("/");
  });

  return (
    <div>
      <div>로그인 중 입니다.</div>
    </div>
  );
};

export default RedirectUri;
