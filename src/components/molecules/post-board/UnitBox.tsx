import { useCallback, useState, useEffect } from 'react';
import * as S from './styled';
import Modal from './Modal';
import UserSmaple from './UserSample';
import { CgProfile } from 'react-icons/cg';
interface BoardInfo {
  isData: {
    id: number;
    head: string;
    body: string;
    main_category: string;
    sub_category: string;
    createAt: string;
    userId: {
      id: number;
      name: string;
      userImage?: {
        id: number | null;
        imageUrl: string | null;
      };
    };
    thumbnailImg?: string;
  };
}

const UnitBox = (isData: BoardInfo['isData']): JSX.Element => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [boardMainTitle, setBoardMainTitle] = useState<string>('');
  const [boardSubTitle, setBoardSubTitle] = useState<string>('');
  const [boardSubColor, setBoardSubColor] = useState<string>('');
  const [boardMainColor, setBoardMainColor] = useState<string>('');

  const [value, setValue] = useState({
    main: '',
    sub: '',
  });

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const changeBoard = () => {
    switch (isData.main_category) {
      case '자유':
        setBoardMainTitle('[자유]');
        setBoardMainColor('#abf7f7');
        break;
      case '멘토멘티':
        setBoardMainTitle('[멘멘]');
        setBoardMainColor('#f99');
        break;
      case '만남':
        setBoardMainTitle('[만남]');
        setBoardMainColor('#adff88');
        break;
      case '장터':
        setBoardMainTitle('[장터]');
        setBoardMainColor('#ffee99');
        break;
    }
    switch (isData.sub_category) {
      case '잡담':
        setBoardSubTitle('[잡담]');
        setBoardSubColor('#cdffff');
        break;
      case '홍보':
        setBoardSubTitle('[홍보]');
        setBoardSubColor('#cdffff');
        break;
      case '공부':
        setBoardSubTitle('[공부]');
        setBoardSubColor('#ffc2c2');
        break;
      case '운동':
        setBoardSubTitle('[운동]');
        setBoardSubColor('#ffc2c2');
        break;
      case '토익':
        setBoardSubTitle('[토익]');
        setBoardSubColor('#ffc2c2');
        break;

      case '친구':
        setBoardSubTitle('[친구]');
        setBoardSubColor('#cbffb3');
        break;
      case '밥약':
        setBoardSubTitle('[밥약]');
        setBoardSubColor('#cbffb3');
        break;
      case '미팅':
        setBoardSubTitle('[미팅]');
        setBoardSubColor('#cbffb3');
        break;
      case '책':
        setBoardSubTitle('[책]');
        setBoardSubColor('#fff4bc');
        break;
      case '중고':
        setBoardSubTitle('[중고]');
        setBoardSubColor('#fff4bc');
        break;
      case '자취방':
        setBoardSubTitle('[자취방]');
        setBoardSubColor('#fff4bc');
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
              {isData.head.slice(0, 20)}
            </S.FontBox>
            <S.FontBox>{isData.body.slice(0, 20)} . . .</S.FontBox>
          </S.FlexBox>
        </S.PostTitle>
        <S.FlexBox direction="row" margin="auto">
          {isOpenModal && (
            <Modal onClickToggleModal={onClickToggleModal}>
              <UserSmaple name={isData.userId.name} />
            </Modal>
          )}
          <S.DialogButton onClick={onClickToggleModal}>
            <CgProfile />
          </S.DialogButton>
          <div>{isData.userId.name}</div>
          <div style={{ marginLeft: 'auto', display: 'flex' }}>
            <S.BoardList color={boardMainColor}>{boardMainTitle}</S.BoardList>
            <S.BoardList color={boardSubColor}>{boardSubTitle}</S.BoardList>
          </div>
        </S.FlexBox>
      </S.FlexBox>
    </S.PostContainer>
  );
};

export default UnitBox;
