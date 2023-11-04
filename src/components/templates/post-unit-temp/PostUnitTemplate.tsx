import * as S from './styled';
import PostUnitHeader from '@/components/organisms/post-unit/PostUnitHeader';
import PostUnitBody from '@/components/organisms/post-unit/PostUnitBody';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import PostCreateComment from '@/components/organisms/post-unit/PostCreateComments';
import PostComments from '@/components/organisms/post-unit/PostComments';
import { useEffect, useState } from 'react';
import BOARDS from '@/apis/boards';
import { UnitPostSelector } from '@/recoil/selectors/UserPostSelector';
import Link from 'next/link';
import { commentDummy } from '@/apis/dummy';
import { CommentDeleteAtom, CommentLoadAtom } from '@/recoil/atoms/CommentAtom';

// type ReplyType = { userName: string; comment: string; replyId: number };
// interface Info {
//   postId: number;
//   commentId: number;
//   comment: string;
//   reply?: ReplyType[];
//   userName: string;
// }
export type UserType = {
  name: string;
  userImage: {
    id: number;
    userId: number;
    imageUrl: string;
  };
};
export interface CommentInfo {
  commentId: number;
  content: string;
  commentOwner: boolean;
  userId: UserType;
}
interface BoardType {
  boardId: number;
}

const PostUnitTemplate = (props: BoardType) => {
  const router = useRouter();

  const [getUnitComment, setUnitComment] = useState<CommentInfo[]>([]);
  const [getCreateComment, setCreateComment] = useRecoilState(CommentLoadAtom);
  const getUnitInfo = useRecoilValue(UnitPostSelector(props.boardId));
  const getCommentDelId = useRecoilValue(CommentDeleteAtom);

  const handleDeleteButton = async () => {
    if (confirm('삭제하시겠습니까?')) {
      await BOARDS.boardUnitDeleteApi(props.boardId);
      alert('게시글이 삭제되었습니다.');
      router.push('/'); //이전 화면으로 돌아가는 로직을 추가예정
    }
  };

  useEffect(() => {
    setUnitComment(commentDummy);
    console.log(getUnitComment);
  }, []);

  useEffect(() => {
    if (getCreateComment.content !== '')
      setUnitComment((prev) => [...prev, getCreateComment]);
  }, [getCreateComment]);

  useEffect(() => {
    getUnitComment
      .filter((prev) => {
        prev.commentId !== getCommentDelId;
      })
      .map((data) => {
        console.log(data);
        setUnitComment([data]);
      });
  }, [getCommentDelId]);

  if (!getUnitInfo) {
    return <div>Loading</div>;
  }

  return (
    <S.UnitContainer>
      <div>
        <PostUnitHeader
          userImage={getUnitInfo.userId.userImage.imageUrl}
          userId={getUnitInfo.userId.userImage.userId}
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
        <S.ComponentHeader>댓글</S.ComponentHeader>
        {getUnitComment.map((data, idx) => {
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
