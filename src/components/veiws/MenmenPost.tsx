import PostBoardTemplates from '../templates/post-temp/PostTemplates';

export interface BoardNumber {
  number: number;
}

const MenmenPost = () => {
  return (
    <div>
      {/*멘토멘티게시판*/}
      <PostBoardTemplates number={2} />
    </div>
  );
};

export default MenmenPost;
