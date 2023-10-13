import * as S from './styled';
import { useRecoilValue } from 'recoil';
import { PostListSelector } from '@/recoil/selectors/UserPostSelector';
import UnitBox from '@/components/molecules/post-board/UnitBox';
import { Board } from '@/components/veiws/AllPost';
import { useEffect } from 'react';

const PostBoards = (props: Board): JSX.Element => {
  const getList = useRecoilValue(PostListSelector);

  useEffect(() => {
    console.log(getList);
  }, []);

  return (
    <div
      style={{
        width: 1000,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {getList
        .filter((data: any) => data.main_category === props.main)
        .map((data: any) => {
          return (
            <div key={data.id}>
              <UnitBox {...data} />
            </div>
          );
        })}
    </div>
  );
};

export default PostBoards;
