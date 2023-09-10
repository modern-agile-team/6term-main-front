import * as S from "./styled";

const PostCreateComment = () => {
    return (
        <S.CommentContainer>
            <div>댓글 작성</div>
            <S.CreateCommentBox>
                <S.FlexBox>
                    <div>프로필사진</div>
                    <div>이름</div>
                </S.FlexBox>
                <S.FlexBox>
                    <S.CommentInputBox placeholder="댓글을 작성해 보세요."></S.CommentInputBox>
                    <S.CreateCommentButton>등록</S.CreateCommentButton>
                </S.FlexBox>
            </S.CreateCommentBox>
        </S.CommentContainer>
    );
}

export default PostCreateComment;