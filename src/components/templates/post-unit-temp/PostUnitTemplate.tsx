import * as S from './styled';
import PostUnitHeader from '@/components/organisms/post-unit/PostUnitHeader';
import PostUnitBody from '@/components/organisms/post-unit/PostUnitBody';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UnitPostAtom } from '@/recoil/atoms/UserPostsAtom';
import PostCreateComment from '@/components/organisms/post-unit/PostCreateComments';
import PostComments from '@/components/organisms/post-unit/PostComments';
import { useEffect, useState } from 'react';
import { db3 } from '@/apis/apiData';
import BOARDS from '@/apis/boards';
import { UnitPostSelector } from '@/recoil/selectors/UserPostSelector';

type ReplyType = { userName: string; comment: string; replyId: number };
interface Info {
  postId: number;
  commentId: number;
  comment: string;
  reply?: ReplyType[];
  userName: string;
}

const PostUnit = () => {
  const router = useRouter();
  const unitId = Number(router.query.id as string);

  const [getUnitComment, setUnitComment] = useState<Info[]>([]);
  const getUnitInfo = useRecoilValue(UnitPostSelector(unitId));

  const handleTest = async (id: number) => {
    BOARDS.postBoardLikeApi(id).then((res) => console.log(res));
    BOARDS.getBoardLikeApi(id).then((res) => console.log(res));
  };

  useEffect(() => {
    console.log(getUnitInfo);
    handleTest(unitId);
    setUnitComment(db3);
  }, []);

  return (
    <S.UnitContainer>
      <div>
        {/* <PostUnitHeader {...getUnitInfo[unitId]} />
        <PostUnitBody {...getUnitInfo[unitId]} /> */}
        <S.DivisionLine />
        <PostCreateComment />
        <S.DivisionLine />
        {getUnitComment
          .filter((data) => data.postId == unitId)
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

export default PostUnit;
