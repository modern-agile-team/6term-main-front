import PostUnitTemplate from '@/components/templates/post-unit-temp/PostUnitTemplate';
import { useRouter } from 'next/router';
import React from 'react';

const PostTitle = () => {
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

export default PostTitle;
