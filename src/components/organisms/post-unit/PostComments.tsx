import { useEffect, useState } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import * as S from './styled';
import UserIcon from '@/components/common/UserIcon';
import { reCommentDummy } from '@/apis/dummy';
import { CommentInfo } from '@/components/templates/post-unit-temp/PostUnitTemplate';
import useModal from '@/hooks/useModal';
import PostReComment from './PostReComment';
import Modal from '@/components/molecules/post-board/Modal';
import { CommentDeleteAtom, CommentLoadAtom } from '@/recoil/atoms/CommentAtom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import COMMENTS from '@/apis/comments';

export interface ReCommentInfo {
  // reCommentId: number;
  reComment: {
    reComment: string;
    reCommentOwner: boolean;
    userId: {
      name: string;
      userImage: {
        // id: number;
        // userId: number;
        imageUrl: string;
      };
    };
  }[];
}

const PostComments = (commentData: CommentInfo) => {
  const { isOpenModal, handleModal } = useModal();
  const [isCheckToken, setCheckToken] = useState(false);
  const [getReComment, setReComment] = useState<ReCommentInfo['reComment']>([]);
  const setCommentDelId = useSetRecoilState(CommentDeleteAtom);
  const [isCommentModify, setIsCommemtModify] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [modifyComment, setModifyComment] = useState('');

  const checkToken = () => {
    const token = window.localStorage.getItem('accessToken');
    token !== undefined ? setCheckToken(true) : setCheckToken(false);
  };

  const reCommentApi = () => {
    //commentId로 요청보내서 get받아오기
    setReComment(reCommentDummy.reComment);
  };

  //댓글 삭제 핸들러
  const handleDelComment = async () => {
    handleModal();
    if (confirm('댓글을 삭제하시겠습니까?')) {
      if (commentData.commentId) {
        await COMMENTS.commetDelApi(commentData.commentId);
        setCommentDelId(commentData.commentId);
      } else {
        await COMMENTS.commetDelApi(commentData.id);
        setCommentDelId(commentData.id);
      }
    }
  };

  //댓글 수정 핸들러
  const handleChangeComment = () => {
    handleModal();
    setIsCommemtModify(!isCommentModify);
  };
  //댓글 수정 확인버튼 핸들러
  const handleDoneModify = () => {
    setIsDone(true);
    setIsCommemtModify(false);
  };
  //댓글 수정 input 핸들러
  const handleInputComment = (e: any) => {
    isDone ? setModifyComment(e.target.value) : setModifyComment(modifyComment);
  };

  useEffect(() => {
    checkToken();
    reCommentApi();
    setModifyComment(commentData.content);
  }, []);

  return (
    <S.CommentContainer>
      <S.CreateCommentBox>
        <S.FlexBox>
          <S.CommentUserImage img={commentData.userId.userImage.imageUrl} />
          <S.ShowUserName size={20}>{commentData.userId.name}</S.ShowUserName>
        </S.FlexBox>
        <S.FlexBox>
          <S.CommentArea>
            {isCommentModify ? (
              <div>
                <input type="text" onChange={handleInputComment} />
                <button onClick={handleDoneModify}>확인</button>
                <button onClick={handleChangeComment}>취소</button>
              </div>
            ) : (
              modifyComment
            )}
          </S.CommentArea>
          {commentData.commentowner && (
            <div>
              {isOpenModal && (
                <Modal show={isOpenModal} hide={handleModal}>
                  <div>
                    <S.Option onClick={handleDelComment}>삭제</S.Option>
                    <S.Option onClick={handleChangeComment}>수정</S.Option>
                  </div>
                </Modal>
              )}
              <div onClick={handleModal}>...</div>
            </div>
          )}
        </S.FlexBox>
        <S.DivisionLine />
        {getReComment &&
          getReComment.map((data, idx) => {
            return (
              <div key={idx}>
                <PostReComment {...data} />
              </div>
            );
          })}
        <S.FlexBox side="0px 0px 0px 18px">
          <BsArrowReturnRight />
          <S.ShowUserName>
            {isCheckToken ? (
              <S.FlexBox>
                <input type="text" placeholder="댓글을 입력해주세요" />
                <button>등록</button>
              </S.FlexBox>
            ) : (
              <div>로그인이 필요합니다.</div>
            )}
          </S.ShowUserName>
        </S.FlexBox>
      </S.CreateCommentBox>
    </S.CommentContainer>
  );
};

export default PostComments;
