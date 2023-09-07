import { useRouter } from "next/router";
import * as S from "./styled";
import PostUnitHeader from "@/components/molecules/post-unit/PostUnitHeader";

const PostUnit = () => {
  const router = useRouter();

  return (
    <S.UnitContainer>
      <div>
        <PostUnitHeader />
        <S.MainTextContainer>
          <img style={{
            width: 300,
            height: 250,
          }} src={router.query.thumbnail} alt="2"></img>
          <div>{router.query.mainText}</div>
        </S.MainTextContainer>
      </div>
    </S.UnitContainer>
  )
}

export default PostUnit;