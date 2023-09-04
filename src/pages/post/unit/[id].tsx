import PostUnit from "@/components/organisms/post-board/PostUnit";
import { useRouter } from "next/router";

const PostTitle = () => {
  const router = useRouter();
  
  return (
    <>
      <PostUnit />
    </>
  )
}

export default PostTitle;