import { BoardInfo } from "@/components/organisms/mainPageBody/MainPageBody";
import { useState } from "react";
import * as S from "./styled"

const PostBox = (isData : BoardInfo['isData']) : JSX.Element => {
    return (
        <S.PostContainer>
            <S.FlexBox flexType="column" width={55}>
                <S.ProfileImg src={`${isData.img}`} alt="프로필사진"></S.ProfileImg>
                <div>{isData.name}</div>
            </S.FlexBox>
            <S.FlexBox flexType="column" width={470}>
                <S.PostTitle>{isData.title}</S.PostTitle>
                <S.PostMainText>{isData.mainText}</S.PostMainText>
            </S.FlexBox>
        </S.PostContainer>
    );
}

export default PostBox;