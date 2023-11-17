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
import { CommentDeleteAtom, CommentLoadAtom } from '@/recoil/atoms/CommentAtom';
import useRecoilCacheRefresh from '@/hooks/useRecoilCaheRefresh';
import COMMENTS from '@/apis/comments';

export type UserType = {
  name: string;
  userImage: {
    id: number;
    imageUrl: string;
  };
};

export interface CommentInfo {
  id: number;
  content: string;
  commentowner: boolean;
  user: UserType;
  reComment: any[];
}
interface BoardType {
  boardId: number;
}

const PostUnitTemplate = (props: BoardType) => {
  const router = useRouter();

  const [getUnitComment, setUnitComment] = useState<CommentInfo[]>([]);
  const [getCreateComment, setCreateComment] = useRecoilState(CommentLoadAtom);
  const getUnitInfo = useRecoilValue(UnitPostSelector(props.boardId));
  const refresh = useRecoilCacheRefresh(UnitPostSelector(props.boardId));
  const getCommentDelId = useRecoilValue(CommentDeleteAtom);
  const [tempDelArr, setTempDelArr] = useState<CommentInfo[]>([]);

  const handleDeleteButton = async () => {
    if (confirm('삭제하시겠습니까?')) {
      await BOARDS.boardUnitDeleteApi(props.boardId);
      alert('게시글이 삭제되었습니다.');
      router.push('/'); //이전 화면으로 돌아가는 로직을 추가예정
    }
  };

  //댓글 불러오기 api호출
  const getCommentListAll = async (id: number) => {
    const response = await COMMENTS.getListAllCommentApi(id);
    setUnitComment(response);
    refresh();
  };

  //mount시 댓글 불러오기
  useEffect(() => {
    getCommentListAll(props.boardId);
  }, []);

  //댓글 추가시 새로고침하지 않고, 값 추가
  useEffect(() => {
    if (getCreateComment.content.length !== 0) {
      setUnitComment((prev) => [...prev, getCreateComment]);
    }
  }, [getCreateComment]);

  //댓글 삭제시 새로고침하지 않고, 값 삭제
  useEffect(() => {
    setTempDelArr([]);
    getUnitComment
      .filter((prev) => {
        return prev.id !== getCommentDelId;
      })
      .map((data) => {
        setTempDelArr((prev) => [...prev, data]);
      });
  }, [getCommentDelId]);

  //댓글 삭제 시 실행되는 로직

  useEffect(() => {
    setUnitComment(tempDelArr);
  }, [tempDelArr]);

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
        <PostCreateComment id={props.boardId} />
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
