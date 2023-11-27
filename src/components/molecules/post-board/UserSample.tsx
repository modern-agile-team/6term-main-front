import { useRouter } from 'next/router';
import * as S from './styled';
import { CgProfile } from 'react-icons/cg';
import AddFriend from '../add-friend/AddFriend';

interface User {
  name: string;
  img?: string | undefined | null;
  id: number;
}

const UserSmaple = (props: User) => {
  const router = useRouter();

  const handleProfile = () => {
    router.push({
      pathname: `/mypage/${props.id}`,
      query: {
        id: props.id,
      },
    });
  };
  return (
    <div>
      {props.img === null || props.img === undefined ? (
        <CgProfile />
      ) : (
        <S.ThumbnailImg img={`${props.img}`} />
      )}
      <div>이름 : {props.name}</div>
      <div onClick={handleProfile}>프로필 이동</div>
      <AddFriend name={props.name} userId={props.id} />
    </div>
  );
};

export default UserSmaple;
