import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';
import PostBoardFooter from '@/components/organisms/post-board/PostBoardFooter';
import { BoardNumber } from '@/components/veiws/FreePost';
import PostBoards from '@/components/organisms/post-board/PostBoards';

const PostBoardTemplates = (props: BoardNumber): JSX.Element => {
  return (
    <S.postBoardUnit>
      <div>
        <PostBoardHeader />
        <PostBoards number={props.number} />
        <PostBoardFooter />
      </div>
    </S.postBoardUnit>
  );
};

export default PostBoardTemplates;
