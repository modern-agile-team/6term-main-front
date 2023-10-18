import { useRouter } from 'next/router';
import PostUnitTemplate from '../templates/post-unit-temp/PostUnitTemplate';
import { useEffect, useState } from 'react';

const UnitPost = () => {
  const router = useRouter();

  return (
    <div>
      <PostUnitTemplate boardId={Number(router.query.id)} />
    </div>
  );
};

export default UnitPost;
