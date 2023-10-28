import { useRouter } from 'next/router';

const UserPage = () => {
  const router = useRouter();
  return (
    <div>
      <div>유저 아이디 : </div>
      <div>{router.query.id}</div>
    </div>
  );
};

export default UserPage;
