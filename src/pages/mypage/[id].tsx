import React from 'react';
import { useRouter } from 'next/router';

const UserPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <div>
      <div>유저 아이디 : {userId}</div>
    </div>
  );
};

export default UserPage;
