// import { BoardInfo } from "@/components/organisms/post-board/PostBoard";
// import { useCallback, useState } from "react";
// import * as S from "./styled"
// import Modal from "./Modal";
// import UserSmaple from "./UserSample";

// const PostBox = (isData : BoardInfo['isData']) : JSX.Element => {
//     const [isOpenModal, setOpenModal] = useState<boolean>(false);

//     const onClickToggleModal = useCallback(() => {
//     setOpenModal(!isOpenModal);
//     }, [isOpenModal]);

//     return (
//         <S.PostContainer>
//             <S.FlexBox flexType="column" width={55}>
//                 {isOpenModal && (
//                     <Modal onClickToggleModal={onClickToggleModal}>
//                         <UserSmaple name={isData.name} img={isData.img}/>
//                     </Modal>
//                 )}
//                 <S.DialogButton onClick={onClickToggleModal}>
//                     <S.ProfileImg src={isData.img} alt="프로필 사진"/>
//                 </S.DialogButton>
//                 <div>{isData.name}</div>
//             </S.FlexBox>
//             <S.FlexBox flexType="column" width={470}>
//                 <S.PostTitle backgroundColor="#fff" href={{
//                     pathname: `/post/title/[id]`,
//                     query: { id : isData.id },
//                 }}>
//                     {isData.title.slice(0, 20)} . . .
//                 </S.PostTitle>
//                 <S.PostTitle href={{
//                     pathname: `/post/title/[id]`,
//                     query: { id : isData.id },
//                 }}>
//                     {isData.mainText.slice(0, 20)} . . .
//                 </S.PostTitle>
//             </S.FlexBox>
//         </S.PostContainer>
//     );
// }

// export default PostBox;

import { useCallback, useState, useEffect } from "react";
import * as S from "./styled"
import Modal from "./Modal";
import UserSmaple from "./UserSample";
import { useRouter } from "next/router";
interface BoardInfo {
    isData : {
        id: number;
        title: string;
        mainText: string;
        img: string;
        name: string;
    }
}

const PostBox = (isData : BoardInfo['isData']) : JSX.Element => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    return (
        <S.PostContainer>
            <S.FlexBox flexType="column" width={55}>
                {isOpenModal && (
                    <Modal onClickToggleModal={onClickToggleModal}>
                        <UserSmaple name={isData.name} img={isData.img}/>
                    </Modal>
                )}
                <S.DialogButton onClick={onClickToggleModal}>
                    <S.ProfileImg src={isData.img} alt="프로필 사진"/>
                </S.DialogButton>
                <div>{isData.name}</div>
            </S.FlexBox>
            <S.FlexBox flexType="column" width={470}>
                <S.PostTitle href={{
                        pathname: `/post/unit/[id]`,
                        query: { 
                            id : isData.id,
                            name : isData.name,
                            title: isData.title,
                            mainText: isData.mainText,
                            img: isData.img,
                        },
                    }}>
                        <S.PostBox backgroundColor="#fff">
                        {isData.title.slice(0, 20)} . . .
                        </S.PostBox>
                        <S.PostBox >
                        {isData.mainText.slice(0, 20)} . . .
                        </S.PostBox>
                </S.PostTitle>
            </S.FlexBox>
        </S.PostContainer>
    );
}

export default PostBox;