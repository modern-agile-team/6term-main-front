import PostBoard from '@/components/organisms/post-board/PostBoard';
import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';

const PostBoardTemplate = (): JSX.Element => {
  return (
    <S.postBoardUnit>
      <div>
        <PostBoardHeader />
        <PostBoard />
      </div>
    </S.postBoardUnit>
  );
};

export default PostBoardTemplate;
