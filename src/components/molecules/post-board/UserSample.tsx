import * as S from './styled';
import { CgProfile } from 'react-icons/cg';

interface User {
  name: string;
  img?: string | undefined | null;
}

const UserSmaple = (props: User) => {
  return (
    <div>
      {props.img === null || props.img === undefined ? (
        <CgProfile />
      ) : (
        <img src={`${props.img}`} />
      )}
      <div>이름 : {props.name}</div>
    </div>
  );
};

export default UserSmaple;
