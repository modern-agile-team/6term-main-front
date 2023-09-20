import PostBoardTemplates from '../templates/post-temp/PostTemplates';

export interface BoardNumber {
  number: number;
}

const MeetingPost = () => {
  return (
    <div>
      {/*만남게시판*/}
      <PostBoardTemplates number={3} />
    </div>
  );
};

export default MeetingPost;
