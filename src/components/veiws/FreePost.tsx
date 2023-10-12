import PostBoardTemplates from '../templates/post-temp/PostTemplates';

export interface BoardNumber {
  number: number;
}

const FreePost = () => {
  return (
    <div>
      {/*자유게시판*/}
      <PostBoardTemplates number={1} />
    </div>
  );
};

export default FreePost;
