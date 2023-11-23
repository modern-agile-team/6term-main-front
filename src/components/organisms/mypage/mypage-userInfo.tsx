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
  const [uploadImage, setUploadImage] = useState<FormData>();

  const userInfoApi = async () => {
    const response = await USERS.getUserProfile(id);
    setUserInfo(response);
  };

  useEffect(() => {
    userInfoApi();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    setUploadImage(formData);
  };

  const modifedMyImage = async () => {
    for (let key in uploadImage?.keys) {
      console.log(key);
    }
    if (confirm('업로드하시겠습니까?')) {
      uploadImage && (await USERS.modifedUserImage(uploadImage));
    }
  };

  return (
    <S.FlexBox>
      {getUserInfo.owner ? (
        <div>
          <S.UserImgBox src={getUserInfo.userImage} alt="유저사진" />
          <div onClick={handleModal}>이미지 업로드</div>
          {isOpenModal && (
            <Modal show={isOpenModal} hide={handleModal}>
              <div>이미지 미리보기</div>
              <form>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  id="profileImg"
                  onChange={handleImageUpload}></input>
                <label htmlFor="profileImg">이미지 선택</label>
              </form>
              <div onClick={modifedMyImage}>업로드</div>
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
