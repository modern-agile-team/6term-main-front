import * as S from './styled';
import PostUnitHeader from '@/components/organisms/post-unit/PostUnitHeader';
import PostUnitBody from '@/components/organisms/post-unit/PostUnitBody';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import PostCreateComment from '@/components/organisms/post-unit/PostCreateComments';
import PostComments from '@/components/organisms/post-unit/PostComments';
import { useEffect, useState } from 'react';
import { db3 } from '@/apis/apiData';
import BOARDS from '@/apis/boards';
import { UnitPostSelector } from '@/recoil/selectors/UserPostSelector';
import Link from 'next/link';

type ReplyType = { userName: string; comment: string; replyId: number };
interface Info {
  postId: number;
  commentId: number;
  comment: string;
  reply?: ReplyType[];
  userName: string;
}

interface BoardType {
  boardId: number;
}

const PostUnitTemplate = (props: BoardType) => {
  const router = useRouter();

  const [getUnitComment, setUnitComment] = useState<Info[]>([]);
  const getUnitInfo = useRecoilValue(UnitPostSelector(props.boardId));
  // const getUnitInfo = useRecoilValueLoadable(UnitPostSelector(props.boardId));

  const handleDeleteButton = async () => {
    if (confirm('삭제하시겠습니까?')) {
      await BOARDS.boardUnitDeleteApi(props.boardId);
      alert('게시글이 삭제되었습니다.');
      router.push('/'); //이전 화면으로 돌아가는 로직을 추가예정
    }
  };

  useEffect(() => {
    setUnitComment(db3);
  }, []);

  if (!getUnitInfo) {
    return <div>Loading</div>;
  }

  return (
    <S.UnitContainer>
      <div>
        <PostUnitHeader
          userImage={getUnitInfo.userId.userImage.imageUrl}
          userId={getUnitInfo.userId.userImage.id}
          name={getUnitInfo.userId.name}
          head={getUnitInfo.head}
          boardId={props.boardId}
        />
        <PostUnitBody
          boardImages={getUnitInfo.boardImages}
          body={getUnitInfo.body}
        />
        <div>
          {getUnitInfo.unitowner && (
            <div>
              <div onClick={handleDeleteButton}>삭제버튼</div>
              <Link
                href={{
                  pathname: `/post/modify/[id]`,
                  query: {
                    id: props.boardId,
                    data: JSON.stringify(getUnitInfo),
                  },
                }}>
                수정버튼
              </Link>
            </div>
          )}
        </div>
        <S.DivisionLine />
        <PostCreateComment />
        <S.DivisionLine />
        {getUnitComment
          .filter((data) => data.postId == props.boardId)
          .map((data, idx) => {
            return (
              <div key={idx}>
                <PostComments {...data} />
              </div>
            );
          })}
      </div>
    </S.UnitContainer>
  );
};

export default PostUnitTemplate;
