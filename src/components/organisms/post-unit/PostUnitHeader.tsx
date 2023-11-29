import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as S from './styled';
import BOARDS from '@/apis/boards';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface UnitInfo {
  userImage: string;
  userId: number;
  name: string;
  head: string;
  boardId: number;
}

const PostUnitHeader = (props: UnitInfo) => {
  const router = useRouter();
  const [getLike, setLike] = useState<number>(0);
  const [likeState, setLikeState] = useState<boolean>(false);

  const getLikeApi = async (id: number) => {
    const response = await BOARDS.getBoardLikeApi(id);
    setLike(response.data.boardLikesCount);
    setLikeState(response.data.isLike);
  };

  const hanldeLikeAdd = async () => {
    const response = await BOARDS.postBoardLikeApi(props.boardId);
    setLikeState(true);
    setLike((prev) => prev + 1);
  };

  const handleLikeDel = async () => {
    const response = await BOARDS.delBoardLikeApi(props.boardId);
    setLikeState(false);
    setLike((prev) => prev - 1);
  };

  const handleProfile = async () => {
    router.push({
      pathname: `/mypage/${props.userId}`,
      query: {
        id: props.userId,
      },
    });
  };

  useEffect(() => {
    getLikeApi(props.boardId);
  }, []);

  return (
    <S.FlexBox direction="row">
      <S.ControlBox onClick={handleProfile}>
        <S.UnitWriterImg
          src={props.userImage as string}
          alt="profile"></S.UnitWriterImg>
        <div>{props.name}</div>
      </S.ControlBox>
      <S.UnitTitle>{props.head}</S.UnitTitle>
      <S.HeartInfo>
        <S.HeartBox>
          {likeState ? (
            <AiFillHeart color="#f00" onClick={handleLikeDel} size={35} />
          ) : (
            <AiOutlineHeart color="#f00" onClick={hanldeLikeAdd} size={35} />
          )}
        </S.HeartBox>
        <div style={{ fontSize: 30 }}>{getLike}</div>
      </S.HeartInfo>
    </S.FlexBox>
  );
};

export default PostUnitHeader;
