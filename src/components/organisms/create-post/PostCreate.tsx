import * as S from "./styled";
import { BsFillFileEarmarkImageFill } from "react-icons/bs" ;
const PostCreate = () => {
  return (
    <S.CreatPostContainer>
      <div>
        <S.CreatePostTitle>
          <S.FontSize>제목</S.FontSize>
          <S.InputBox type="text" placeholder="제목입력"></S.InputBox>
        </S.CreatePostTitle>
        <div>
          <S.FlexBox direction="row" side="5px 0px 5px 0px">
            <S.FontSize>본문</S.FontSize>
            <div>본문 네비바</div>
          </S.FlexBox>
          <S.CreatePostBody
            placeholder="본문 입력"></S.CreatePostBody>
        </div>
        <div>
          <S.FontSize>사진</S.FontSize>
          <S.AddImageContainer>
            <BsFillFileEarmarkImageFill size={24} />
            <S.UrlUI>사진 url들어올 곳</S.UrlUI>
            <S.ButtonUI>사진추가</S.ButtonUI>
          </S.AddImageContainer>
        </div>
        <S.FlexBox side="25px 0px 10px 0px">
          <S.ButtonUI>올리기</S.ButtonUI>        
        </S.FlexBox>
      </div>
    </S.CreatPostContainer>
  );
};

export default PostCreate;
