import PostBox from "@/components/molecules/post-board/PostBox";
import SearchBox from "@/components/molecules/post-board/SearchBox";
import * as S from "./styled";
import { useState } from "react";
import { useRouter } from "next/router";

const db = [
    {
        id: 1,
        title: "adsfasdfasdfasfasfasfasfsdasdf",
        mainText: "1번 째 글안녕하ㅔ요 저는 이재진입니다. adsfasfdsdaffffffffffffffffffffffffdfasdfasdfasfasdfasfasfasdf",
        img: "url", 
        name: "이재진"
    },
    {
        id: 2,
        title: "제목입니다.",
        mainText: "2번 째 글",
        img: "url", 
        name: "이자진"
        },
    {
        id: 3,
        title: "3333",
        mainText: "3번 째 글",
        img: "url", 
        name: "이죄진"
    },
    {
        id: 4,
        title: "4444",
        mainText: "4번 째 글",
        img: "url", 
        name: "이재줴"
    }
]

export interface BoardInfo {
    isData : {
        id: number;
        title: string;
        mainText: string;
        img: string;
        name: string;
    }
}

const PostBoard = () : JSX.Element => {
    const [isData, setIsData ] = useState<BoardInfo['isData']>({id: 1, title:"", mainText: "", img: "", name:""});
    const router = useRouter();
    
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
                {db.map((data)=>{
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