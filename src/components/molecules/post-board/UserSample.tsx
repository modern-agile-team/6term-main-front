import * as S from './styled';
import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface User {
  name: string;
  img?: string | undefined | null;
}

const UserSmaple = (props: User) => {
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [isFriendAdded, setIsFriendAdded] = useState(false);
  const router = useRouter();

  const handleAddFriend = () => {
    setIsAddingFriend(true);
  };

  const handleConfirmAddFriend = () => {
    setIsAddingFriend(false);
    setIsFriendAdded(true);
  };

  const handleCancelAddFriend = () => {
    setIsAddingFriend(false);
    setIsFriendAdded(false);
    // 이 부분은 이미 친구가 돼있는 상태에서
    // 다시 '친구 추가' 버튼이 활성화 되므로,
    // 이후 이에 관한 로직을 추가해야하는 필요성이 있음.
  };

  const handleGoMyPage = () => {
    setIsFriendAdded(false);
    router.push('/mypage');
  };

  return (
    <div>
      {props.img === null || props.img === undefined ? (
        <CgProfile />
      ) : (
        <img src={`${props.img}`} />
      )}
      <div>이름 : {props.name}</div>
      {!isAddingFriend && !isFriendAdded && (
        <div onClick={handleAddFriend}>친구 추가</div>
      )}
      {isAddingFriend && (
        <div>
          <p>{props.name}님을 친구로 추가하시겠습니까?</p>
          <button onClick={handleConfirmAddFriend}>확인</button>
          <button onClick={handleCancelAddFriend}>취소</button>
        </div>
      )}
      {isFriendAdded && (
        <div>
          <p>
            {props.name} 님이 친구로 추가되었습니다. 목록을 확인하시겠습니까?
          </p>
          <button onClick={handleGoMyPage}>확인</button>
          <button onClick={handleCancelAddFriend}>취소</button>
        </div>
      )}
    </div>
  );
};

export default UserSmaple;
