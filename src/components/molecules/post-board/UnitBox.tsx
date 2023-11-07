import { useState, useEffect } from 'react';
import * as S from './styled';
import Modal from './Modal';
import UserSmaple from './UserSample';
import { CgProfile } from 'react-icons/cg';
import { mainCategoryMappings, subCategoryMappings } from './unitBoxMapping';
import { useRouter } from 'next/router';
import useModal from '@/hooks/useModal';
import { AiFillHeart } from 'react-icons/ai';
export interface BoardInfo {
  isData: {
    id: number;
    boardLike: number;
    head: string;
    body: string;
    main_category: string;
    sub_category: string;
    createAt: string;
    userId: {
      name: string;
      userImage: {
        id: number | null;
        imageUrl?: string | undefined | null;
        userId: number;
      };
    };
    boardImages: [
      {
        id: number;
        imageUrl: string;
      },
    ];
  };
}

const UnitBox = (isData: BoardInfo['isData']): JSX.Element => {
  const { isOpenModal, handleModal } = useModal();
  const [isStateHtml, setStateHtml] = useState<boolean>(false);

  const [getCategory, setCategory] = useState({
    boardMainTitle: mainCategoryMappings[isData.main_category]?.title || '',
    boardSubTitle: subCategoryMappings[isData.sub_category]?.title || '',
    boardSubColor: subCategoryMappings[isData.sub_category]?.color || '',
    boardMainColor: mainCategoryMappings[isData.main_category]?.color || '',
  });

  useEffect(() => {
    setCategory((prevState) => ({
      ...prevState,
      boardMainTitle: mainCategoryMappings[isData.main_category]?.title || '',
      boardMainColor: mainCategoryMappings[isData.main_category]?.color || '',
      boardSubTitle: subCategoryMappings[isData.sub_category]?.title || '',
      boardSubColor: subCategoryMappings[isData.sub_category]?.color || '',
    }));
  }, [isData.main_category, isData.sub_category]);

  useEffect(() => {
    setStateHtml(true);
  }, []);

  const router = useRouter();
  const handleRouter = (id: number) => {
    router.push({
      pathname: `/post/unit/${id}`,
      query: {
        boardId: id,
      },
    });
  };

  return (
    <S.PostContainer>
      <S.FlexBox direction="column">
        <S.PostTitle onClick={() => handleRouter(isData.id)}>
          <S.FlexBox direction="column">
            {isData.boardImages.length === Number(0) ? (
              <div>
                <S.ThumbnailImg color="#f1f1f1" />
              </div>
            ) : (
              <div>
                <S.ThumbnailImg
                  img={isData.boardImages[0].imageUrl}></S.ThumbnailImg>
              </div>
            )}
            <div style={{ display: 'flex' }}>
              <div>
                <S.FontBox fontWeight="bold" fontSize={18}>
                  {isData.head.slice(0, 20)}
                </S.FontBox>
                {isStateHtml && (
                  <S.Cardbody
                    dangerouslySetInnerHTML={{ __html: isData.body }}
                  />
                )}
              </div>
              <div style={{ display: 'flex' }}>
                <AiFillHeart />
                <div>{isData.boardLike}</div>
              </div>
            </div>
          </S.FlexBox>
        </S.PostTitle>

        <S.FlexBox direction="row" margin="auto">
          {isOpenModal && (
            <Modal show={isOpenModal} hide={handleModal}>
              <UserSmaple
                name={isData.userId.name}
                img={isData.userId.userImage.imageUrl}
                id={isData.userId.userImage.userId}
              />
            </Modal>
          )}
          <S.DialogButton onClick={handleModal}>
            <CgProfile />
          </S.DialogButton>
          <div>{isData.userId.name}</div>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
            }}>
            <S.BoardList color={getCategory.boardMainColor}>
              {getCategory.boardMainTitle}
            </S.BoardList>
            <S.BoardList color={getCategory.boardSubColor}>
              {getCategory.boardSubTitle}
            </S.BoardList>
          </div>
        </S.FlexBox>
      </S.FlexBox>
    </S.PostContainer>
  );
};

export default UnitBox;
