import * as S from "./styled";
import PostUnitHeader from "@/components/molecules/post-unit/PostUnitHeader";
import PostUnitBody from "@/components/molecules/post-unit/PostUnitBody";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { UnitPostAtom } from "@/recoil/atoms/UserPostsAtom";
import { useState, useEffect } from "react";


const PostUnit = () => {
  const [ getUnitInfo, setUnitInfo ] = useRecoilState(UnitPostAtom);  
  
  const router = useRouter();

  return (
    <S.UnitContainer>
      <div>
        <PostUnitHeader {...getUnitInfo[router.query.id]}/>
        <PostUnitBody {...getUnitInfo[router.query.id]} />
      </div>
    </S.UnitContainer>
  )
}

export default PostUnit;