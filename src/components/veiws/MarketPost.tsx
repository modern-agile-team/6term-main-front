import PostBoardTemplates from '../templates/post-temp/PostTemplates';

export interface BoardNumber {
  number: number;
}

const MarketPost = () => {
  return (
    <div>
      {/*장터게시판*/}
      <PostBoardTemplates number={4} />
    </div>
  );
};

export default MarketPost;
