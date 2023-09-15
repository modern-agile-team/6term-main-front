import PostBoard from '@/components/organisms/post-board/PostBoard';
import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';
import PostBoardFooter from '@/components/organisms/post-board/PostBoardFooter';

const PostBoardTemplate = (): JSX.Element => {
  return (
    <S.postBoardUnit>
      <div>
        <PostBoardHeader />
        <PostBoard />
        <PostBoardFooter />
      </div>
    </S.postBoardUnit>
  );
};

export default PostBoardTemplate;
