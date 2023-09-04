import { useRouter } from "next/router";

const PostUnit = () => {
  const router = useRouter();
  
  return (
    <>
      <h2>{router.query.title}</h2>
      <h3>{router.query.mainText}</h3>
    </>
  )
}

export default PostUnit;