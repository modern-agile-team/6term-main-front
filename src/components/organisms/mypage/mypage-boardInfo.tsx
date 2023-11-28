import USERS from '@/apis/user';
import { UserType } from '@/components/templates/mypage/MypageTemplate';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface BoardInfo {
  data: {
    id: number;
    head: string;
    body: string;
    main: string;
    sub: string;
  }[];
}

const MyPageBoardInfo = ({ id }: UserType) => {
  const router = useRouter();
  const [boardInfo, setBoardInfo] = useState<BoardInfo['data']>();

  const getUserBoards = async () => {
    const response = await USERS.getUserBoardsApi(id);
    setBoardInfo(response);
  };

  const handleBoardUnit = (unitId: number) => {
    router.push({
      pathname: `/post/unit/${unitId}`,
      query: {
        boardId: unitId,
      },
    });
  };

  const handleCreatePost = () => {
    router.push({
      pathname: `/post/create`,
    });
  };

  useEffect(() => {
    getUserBoards();
  }, [id]);

  useEffect(() => {
    console.log(boardInfo);
  });
  return (
    <S.UserOwnBoardContainer>
      <S.TitleBox>
        <S.TitleChlidren>게시글 정보</S.TitleChlidren>
        <S.CreatePostBox onClick={handleCreatePost}>글쓰기</S.CreatePostBox>
      </S.TitleBox>
      <S.UserOwnBoardContainer>
        {boardInfo &&
          boardInfo.map((data) => {
            return (
              <S.BoardUnitBox onClick={() => handleBoardUnit(data.id)}>
                <div>{data.head.slice(0, 20)}</div>
              </S.BoardUnitBox>
            );
          })}
      </S.UserOwnBoardContainer>
    </S.UserOwnBoardContainer>
  );
};

export default MyPageBoardInfo;
