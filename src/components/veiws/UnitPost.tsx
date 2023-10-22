import { useRouter } from 'next/router';
import PostUnitTemplate from '../templates/post-unit-temp/PostUnitTemplate';

const UnitPost = () => {
  const router = useRouter();

  return (
    <div>
      <PostUnitTemplate boardId={Number(router.query.boardId)} />
    </div>
  );
};

export default UnitPost;
