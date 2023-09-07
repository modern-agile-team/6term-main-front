import { useRouter } from "next/router";
import * as S from "./styled";
import PostUnitHeader from "@/components/molecules/post-unit/PostUnitHeader";
import PostUnitBody from "@/components/molecules/post-unit/PostUnitBody";

const PostUnit = () => {
  const router = useRouter();

  return (
    <S.UnitContainer>
      <div>
        <PostUnitHeader />
        <PostUnitBody />
      </div>
    </S.UnitContainer>
  )
}

export default PostUnit;