import * as S from './styled';
import { CgProfile } from 'react-icons/cg';

interface User {
  name: string;
  img?: string | undefined;
}

const UserSmaple = ({ name, img }: User): JSX.Element => {
  return (
    <div>
      <CgProfile />
      <div>이름 : {name}</div>
    </div>
  );
};

export default UserSmaple;
