import { useRouter } from "next/router";

const PostTitle = () => {
  const router = useRouter();
  
  return (
    <>
      <h2>id : {router.query.id}</h2>
      <h3>제목 누르고 들어오면 나오는 페이지</h3>
    </>
  )
}

export default PostTitle;