import * as S from "./styled";
import PostUnitHeader from "@/components/molecules/post-unit/PostUnitHeader";
import PostUnitBody from "@/components/molecules/post-unit/PostUnitBody";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { UnitPostAtom } from "@/recoil/atoms/UserPostsAtom";
import PostCreateComment from "@/components/molecules/post-unit/PostCreateComments";
import PostComments from "@/components/molecules/post-unit/PostComments";
import { useEffect, useState } from "react";
import { db3 } from "@/apis/apiData";

interface Info {
  postId: number;
  comment: string;
  reply?: {
    userName: string;
    comment: string;
  }[];
  userName: string;
}

const PostUnit = () => {
  const [ getUnitInfo, setUnitInfo ] = useRecoilState(UnitPostAtom);  
  const [ getUnitComment, setUnitComment ] = useState<Info[]>([]);

  const router = useRouter();
  const unitId = Number(router.query.id as string);

  useEffect(()=>{
    setUnitComment(db3);
  },[]);

  useEffect(()=>{
    console.log(getUnitComment)
  })

  return (
    <S.UnitContainer>
      <div>
        <PostUnitHeader {...getUnitInfo[unitId]}/>
        <PostUnitBody {...getUnitInfo[unitId]} />
        <PostCreateComment />
        {getUnitComment.filter((data)=>data.postId === unitId).map((data, idx)=>{
          return (
            <div key={idx}>
              <PostComments {...data}/>
            </div>
          )
        })}
      </div>
    </S.UnitContainer>
  )
}

export default PostUnit;