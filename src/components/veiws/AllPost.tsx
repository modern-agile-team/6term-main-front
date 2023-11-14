import PostBoardTemplates from '../templates/post-temp/PostTemplates';

export interface Board {
  main?: string;
}

const AllPost = () => {
  return (
    <div>
      {/* 전체 게시판 */}
      <PostBoardTemplates main="전체" />
    </div>
  );
};

export default AllPost;
