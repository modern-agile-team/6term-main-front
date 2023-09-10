import * as S from "./styled";
import PostUnitHeader from "@/components/molecules/post-unit/PostUnitHeader";
import PostUnitBody from "@/components/molecules/post-unit/PostUnitBody";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { UnitPostAtom } from "@/recoil/atoms/UserPostsAtom";
import PostCreateComment from "@/components/molecules/post-unit/PostComments";


const PostUnit = () => {
  const [ getUnitInfo, setUnitInfo ] = useRecoilState(UnitPostAtom);  
  
  const router = useRouter();

  return (
    <S.UnitContainer>
      <div>
        <PostUnitHeader {...getUnitInfo[router.query.id]}/>
        <PostUnitBody {...getUnitInfo[router.query.id]} />
        <PostCreateComment />
      </div>
    </S.UnitContainer>
  )
}

export default PostUnit;