import PostTemplate from '../templates/post-temp/PostTemplate';

export interface Board {
  main: string;
}

const AllPost = () => {
  return (
    <div>
      {/* 전체 게시판 */}
      <PostTemplate />
    </div>
  );
};

export default AllPost;
