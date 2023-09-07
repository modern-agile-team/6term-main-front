import PostBox from "@/components/molecules/post-board/PostBox";
import SearchBox from "@/components/molecules/post-board/SearchBox";
import { useRouter } from "next/router";
import * as S from "./styled";
import { useRecoilState } from "recoil";
import { UnitPostAtom, UserPostsAtom } from "@/recoil/atoms/UserPostsAtom";

const PostBoard = () : JSX.Element => {
    const router = useRouter();
    const [ isData, setIsDate ] = useRecoilState(UserPostsAtom);
    
    const handleCreateButton = () : void => {
        router.push("/post/create");
    }

    return (
        <S.postBoardUnit>
            <div>
                <div style={{
                    display:"flex",
                    width: 1000,
                    //s.flexBox사용하도록
                }}>
                    <S.PostBoardTitle>게시판 이름</S.PostBoardTitle>
                    <SearchBox />
                    <S.CreatePostButton onClick={handleCreateButton}>글쓰기</S.CreatePostButton>
                </div>
                <div style={{
                    width: 1000,
                    display:"flex",
                    flexDirection:"row",
                    flexWrap: "wrap",
                }}>
                    {/* {isData.filter((data)=>data.board === 3).map((data)=>{
                        return (
                            <div key={data.id }>
                                <PostBox {...data}/>
                            </div>
                        )
                    })} */}
                    {isData.map((data)=>{
                        return (
                            <div key={data.id}>
                                <PostBox {...data} />     
                            </div>
                        )
                    })}
                </div>
            </div>
        </S.postBoardUnit>
    );
};

export default PostBoard;