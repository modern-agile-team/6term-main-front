import { useEffect, useState } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import * as S from './styled';
import UserIcon from '@/components/common/UserIcon';
import { reCommentDummy } from '@/apis/dummy';
import { CommentInfo } from '@/components/templates/post-unit-temp/PostUnitTemplate';
import useModal from '@/hooks/useModal';
import PostReComment from './PostReComment';
import Modal from '@/components/molecules/post-board/Modal';
import { CommentLoadAtom } from '@/recoil/atoms/CommentAtom';
import { useRecoilState } from 'recoil';

export interface ReCommentInfo {
  reCommentId: number;
  reComment: {
    reComment: string;
    reCommentOwner: boolean;
    userId: {
      name: string;
      userImage: {
        id: number;
        userId: number;
        imageUrl: string;
      };
    };
  }[];
}

const PostComments = (commentData: CommentInfo) => {
  const { isOpenModal, handleModal } = useModal();
  const [isCheckToken, setCheckToken] = useState(false);
  const [getReComment, setReComment] = useState<ReCommentInfo['reComment']>([]);

  const checkToken = () => {
    const token = window.localStorage.getItem('accessToken');
    token !== undefined ? setCheckToken(true) : setCheckToken(false);
  };

  const reCommentApi = () => {
    //commentId로 요청보내서 get받아오기
    setReComment(reCommentDummy.reComment);
  };

  useEffect(() => {
    checkToken();
    reCommentApi();
  }, []);

  return (
    <S.CommentContainer>
      <S.CreateCommentBox>
        <S.FlexBox>
          <UserIcon />
          <S.ShowUserName size={20}>{commentData.userId.name}</S.ShowUserName>
        </S.FlexBox>
        <S.FlexBox>
          <S.CommentArea>{commentData.content}.</S.CommentArea>
          {commentData.commentOwner && (
            <div>
              {isOpenModal && (
                <Modal show={isOpenModal} hide={handleModal}>
                  <div>
                    <S.Option>삭제</S.Option>
                    <S.Option>수정</S.Option>
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
                <UserIcon />
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
