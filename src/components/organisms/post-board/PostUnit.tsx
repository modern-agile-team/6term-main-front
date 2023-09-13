import * as S from './styled';
import PostUnitHeader from '@/components/molecules/post-unit/PostUnitHeader';
import PostUnitBody from '@/components/molecules/post-unit/PostUnitBody';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { UnitPostAtom } from '@/recoil/atoms/UserPostsAtom';
import PostCreateComment from '@/components/molecules/post-unit/PostCreateComments';
import PostComments from '@/components/molecules/post-unit/PostComments';
import { useEffect, useState } from 'react';
import { db3 } from '@/apis/apiData';

type ReplyType = { userName: string; comment: string; replyId: number };
interface Info {
  postId: number;
  commentId: number;
  comment: string;
  reply?: ReplyType[];
  userName: string;
}

const PostUnit = () => {
  const [getUnitInfo, setUnitInfo] = useRecoilState(UnitPostAtom);
  const [getUnitComment, setUnitComment] = useState<Info[]>([]);

  const router = useRouter();
  const unitId = Number(router.query.id as string);

  useEffect(() => {
    setUnitComment(db3);
  }, []);

  return (
    <S.UnitContainer>
      <div>
        <PostUnitHeader {...getUnitInfo[unitId]} />
        <PostUnitBody {...getUnitInfo[unitId]} />
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
