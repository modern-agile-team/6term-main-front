import USERS from '@/apis/user';
import * as S from './styled';
import { useEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
import Modal from '@/components/molecules/post-board/Modal';
import { IFileTypes } from '../create-post/PostCreate';

interface UserType {
  id: number;
}

interface UserInfoType {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  provider: string;
  userImage: string;
  owner: boolean;
}

interface FormDataType {
  object: File;
  url: string;
}

const MyPageUserInfo = ({ id }: UserType) => {
  const { isOpenModal, handleModal } = useModal();
  const [getUserInfo, setUserInfo] = useState<UserInfoType>({
    id: 0,
    name: '',
    email: '',
    admin: false,
    provider: '',
    userImage: '',
    owner: false,
  });
  const [uploadImage, setUploadImage] = useState<FormDataType>({
    object: {} as File,
    url: '',
  });

  const userInfoApi = async () => {
    if (id !== 0) {
      const response = await USERS.getUserProfile(id);
      setUserInfo(response);
    }
  };

  useEffect(() => {
    setUploadImage({
      object: {} as File,
      url: '',
    });
    userInfoApi();
  }, [id]);

  const onChangeImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!e.target.files) {
      return;
    }
    setUploadImage({
      object: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  const modifedMyImage = async () => {
    const formData = new FormData();
    formData.append('file', uploadImage.object);
    if (uploadImage.url !== '') {
      if (confirm('업로드하시겠습니까?')) {
        await USERS.modifedUserImage(formData);
      }
    } else {
      alert('이미지 등록이 필요합니다.');
    }
  };

  return (
    <S.FlexBox>
      {getUserInfo.owner ? (
        <div>
          <S.UserImgBox src={getUserInfo.userImage} alt="유저사진" />
          <S.ControlBox onClick={handleModal}>이미지 업로드</S.ControlBox>
          {isOpenModal && (
            <Modal show={isOpenModal} hide={handleModal}>
              <div style={{ display: 'flex' }}>
                <div>이미지 미리보기</div>
                <div
                  style={{ paddingLeft: 100, cursor: 'pointer' }}
                  onClick={handleModal}>
                  X
                </div>
              </div>
              {uploadImage.url ? (
                <S.ImageBox>
                  <img
                    src={uploadImage.url}
                    alt="업로드프로필미리보기"
                    style={{ width: 240, height: 240 }}
                  />
                </S.ImageBox>
              ) : (
                <S.ImageBox></S.ImageBox>
              )}
              <form>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  id="profileImg"
                  onChange={onChangeImageUpload}></input>
                <S.Imagelabel htmlFor="profileImg">이미지 선택</S.Imagelabel>
              </form>
              <S.ControlBox onClick={modifedMyImage}>업로드</S.ControlBox>
            </Modal>
          )}
        </div>
      ) : (
        <S.UserImgBox src={getUserInfo.userImage} alt="유저사진" />
      )}
      <S.UserInfoBox>
        <div>{getUserInfo.name}</div>
        <div>{getUserInfo.email}</div>
      </S.UserInfoBox>
    </S.FlexBox>
  );
};

export default MyPageUserInfo;
