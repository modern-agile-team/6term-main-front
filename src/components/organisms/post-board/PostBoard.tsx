// import PostBox from "@/components/molecules/post-board/PostBox";
// import SearchBox from "@/components/molecules/post-board/SearchBox";
// import * as S from "./styled";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import { db } from "@/apis/dammyDate";
// export interface BoardInfo {
//     isData : {
//         id: number;
//         title: string;
//         mainText: string;
//         img: string;
//         name: string;
//     }
// }

// const PostBoard = () : JSX.Element => {
//     const [isData, setIsData ] = useState<BoardInfo['isData']>({id: 1, title:"", mainText: "", img: "", name:""});
//     const router = useRouter();
    
//     const handleCreateButton = () : void => {
//         router.push("/post/create");
//     }

//     return (
//         <>
//             <div>
//                 <div style={{
//                     display:"flex",
//                     width: 550,
//                     paddingRight: 10,
//                     paddingLeft: 10,
//                 }}>
//                     <S.PostBoardTitle>게시판 이름</S.PostBoardTitle>
//                     <S.CreatePostButton onClick={handleCreateButton}>글쓰기</S.CreatePostButton>
//                 </div>
//                 {db.map((data)=>{
//                     return (
//                         <div key={data.id }>
//                             <PostBox {...data}/>
//                         </div>
//                     )
//                 })} 
//             </div>
//             <SearchBox />
//         </>
//     );
// };

// export default PostBoard;

import PostBox from "@/components/molecules/post-board/PostBox";
import SearchBox from "@/components/molecules/post-board/SearchBox";
import * as S from "./styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { UserPostsAtom } from "@/recoil/atoms/UserPostsAtom";

const PostBoard = () : JSX.Element => {
    const router = useRouter();
    const [isData, setIsDate ] = useRecoilState(UserPostsAtom);
    
    const handleCreateButton = () : void => {
        router.push("/post/create");
    }

    return (
        <>
            <div>
                <div style={{
                    display:"flex",
                    width: 550,
                    paddingRight: 10,
                    paddingLeft: 10,
                }}>
                    <S.PostBoardTitle>게시판 이름</S.PostBoardTitle>
                    <S.CreatePostButton onClick={handleCreateButton}>글쓰기</S.CreatePostButton>
                </div>
                {isData.map((data)=>{
                    return (
                        <div key={data.id }>
                            <PostBox {...data}/>
                        </div>
                    )
                })} 
            </div>
            <SearchBox />
        </>
    );
};

export default PostBoard;