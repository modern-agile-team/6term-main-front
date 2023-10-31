import React from 'react';
import { useRouter } from 'next/router';
import PostUnitTemplate from '../templates/post-unit-temp/PostUnitTemplate';

const UnitPost = () => {
  const router = useRouter();

  return (
    <div>
      <React.Suspense fallback={<h1>loading</h1>}>
        {router.isReady && (
          <PostUnitTemplate boardId={Number(router.query.boardId)} />
        )}
      </React.Suspense>
    </div>
  );
};

export default UnitPost;
