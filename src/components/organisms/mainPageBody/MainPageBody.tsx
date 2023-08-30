import PostBox from "@/components/molecules/postBoard/PostBox";
import SearchBox from "@/components/molecules/postBoard/SearchBox";
import { useState } from "react";

const db = [
    {
        id: 1,
        title: "adsfasdfasdfasfasfasfasfsdasdf",
        mainText: "1번 째 글",
        img: "url", 
        name: "이재진"
    },
    {
        id: 2,
        title: "제목입니다.",
        mainText: "2번 째 글",
        img: "url", 
        name: "이재진"
        },
    {
        id: 3,
        title: "3333",
        mainText: "3번 째 글",
        img: "url", 
        name: "이재진"
    },
    {
        id: 4,
        title: "4444",
        mainText: "4번 째 글",
        img: "url", 
        name: "이재진"
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

const MainPageBody = () : JSX.Element => {
    const [isData, setIsData ] = useState<BoardInfo['isData']>({id: 1, title:"", mainText: "", img: "", name:""});
    return (
        <>
            <SearchBox />
            <div>
                <div>게시판 이름</div>
                <button>글쓰기</button>
                {db.map((data)=>{
                    return (
                        <div key={data.id }>
                            <PostBox {...data}/>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default MainPageBody;