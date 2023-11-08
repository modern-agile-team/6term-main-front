// 코드 리펙토링 시 마이페이지로 이동하는 부분을 아래의 컴포넌트로 핸들링 할 예정

// import { useRouter } from 'next/router';
// import USERS from '@/apis/user';

// export const handleMypage = async () => {
//   try {
//     const userInfo = await USERS.getUserProfile();
//     const id = userInfo.id;
//     const router = useRouter();
//     router.push(`/mypage/${id}`);
//   } catch (error) {
//     console.error('유저 정보를 불러오는 중 오류가 발생했습니다.', error);
//   }
// };
