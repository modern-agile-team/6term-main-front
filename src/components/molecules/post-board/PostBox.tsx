import { useCallback, useState, useEffect } from "react";
import * as S from "./styled"
import Modal from "./Modal";
import UserSmaple from "./UserSample";
interface BoardInfo {
    isData : {
        id: number;
        title: string;
        mainText: string;
        img: string;
        name: string;
        thumbnailImg?: string;
        board: number;
    }
}

const PostBox = (isData : BoardInfo['isData']) : JSX.Element => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const [boardTitle, setBoardTitle ] = useState<string>("");

    const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    const changeBoard = () => {
        switch (isData.board) {
            case 1:
                setBoardTitle("[자유]");
                break;
            case 2:
                setBoardTitle("[멘토멘티]");
                break;
            case 3:
                setBoardTitle("[만남]");
                break;
            case 4:
                setBoardTitle("[장터]");
                break;
        }
    }

    useEffect(()=>{
        changeBoard();
    })

    return (
        <S.PostContainer>
            <S.FlexBox direction="column">
                <S.PostTitle href={{
                        pathname: `/post/unit/[id]`,
                        query: { 
                            id : isData.id,
                        },
                    }}> 
                    <S.FlexBox direction="column">
                        <S.ThumbnailImg backgroundColor="#f99"/>
                        <S.FontBox fontWeight="bold" fontSize={18}>
                            {isData.title.slice(0, 20)}
                        </S.FontBox>
                        <S.FontBox>
                            {isData.mainText.slice(0, 20)} . . .
                        </S.FontBox>
                    </S.FlexBox>
                </S.PostTitle>
                <S.FlexBox direction="row" margin="auto">
                    {isOpenModal && (
                        <Modal onClickToggleModal={onClickToggleModal}>
                            <UserSmaple name={isData.name} img={isData.img}/>
                        </Modal>
                    )}
                    <S.DialogButton onClick={onClickToggleModal}>
                        <S.ProfileImg src={isData.img} alt="프로필 사진"/>
                    </S.DialogButton>
                    <div>
                        {isData.name}
                    </div>
                    <S.BoardList>
                        {boardTitle}
                    </S.BoardList>
                </S.FlexBox>
            </S.FlexBox>
        </S.PostContainer>
    );
}

export default PostBox;