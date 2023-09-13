import { useCallback, useState, useEffect } from 'react';
import * as S from './styled';
import Modal from './Modal';
import UserSmaple from './UserSample';
import { CgProfile } from 'react-icons/cg';
interface BoardInfo {
  isData: {
    id: number;
    title: string;
    mainText: string;
    img: string;
    name: string;
    thumbnailImg?: string;
    board: number;
  };
}

const PostBox = (isData: BoardInfo['isData']): JSX.Element => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [boardTitle, setBoardTitle] = useState<string>('');
  const [boardThumbnail, setBoardThumbnail] = useState<string>('');

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const changeBoard = () => {
    switch (isData.board) {
      case 1:
        setBoardTitle('[자유]');
        setBoardThumbnail('#bbffff');
        break;
      case 2:
        setBoardTitle('[멘토멘티]');
        setBoardThumbnail('#f99');
        break;
      case 3:
        setBoardTitle('[만남]');
        setBoardThumbnail('#adff88');
        break;
      case 4:
        setBoardTitle('[장터]');
        setBoardThumbnail('#ffee99');
        break;
    }
  };

  useEffect(() => {
    changeBoard();
  });

  return (
    <S.PostContainer>
      <S.FlexBox direction="column">
        <S.PostTitle
          href={{
            pathname: `/post/unit/[id]`,
            query: {
              id: isData.id,
            },
          }}>
          <S.FlexBox direction="column">
            {isData.thumbnailImg === undefined ? (
              <div>
                <S.ThumbnailImg color="#f1f1f1" />
              </div>
            ) : (
              <div>
                <S.ThumbnailImg img={isData.thumbnailImg}></S.ThumbnailImg>
              </div>
            )}
            <S.FontBox fontWeight="bold" fontSize={18}>
              {isData.title.slice(0, 20)}
            </S.FontBox>
            <S.FontBox>{isData.mainText.slice(0, 20)} . . .</S.FontBox>
          </S.FlexBox>
        </S.PostTitle>
        <S.FlexBox direction="row" margin="auto">
          {isOpenModal && (
            <Modal onClickToggleModal={onClickToggleModal}>
              <UserSmaple name={isData.name} img={isData.img} />
            </Modal>
          )}
          <S.DialogButton onClick={onClickToggleModal}>
            <CgProfile />
          </S.DialogButton>
          <div>{isData.name}</div>
          <S.BoardList color={boardThumbnail}>{boardTitle}</S.BoardList>
        </S.FlexBox>
      </S.FlexBox>
    </S.PostContainer>
  );
};

export default PostBox;
