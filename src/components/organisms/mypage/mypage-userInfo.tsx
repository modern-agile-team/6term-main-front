import USERS from '@/apis/user';
import * as S from './styled';
import { useEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
import Modal from '@/components/molecules/post-board/Modal';
import { UserType } from '@/components/templates/mypage/MypageTemplate';

interface UserInfoType {
  info: {
    id: number;
    name: string;
    email: string;
    admin: boolean;
    provider: string;
    userImage: string;
    owner: boolean;
  };
}

interface FormDataType {
  object: File;
  url: string;
}

const MyPageUserInfo = ({ info }: UserInfoType) => {
  const { isOpenModal, handleModal } = useModal();
  const [uploadImage, setUploadImage] = useState<FormDataType>({
    object: {} as File,
    url: '',
  });

  useEffect(() => {
    setUploadImage({
      object: {} as File,
      url: '',
    });
  }, [info.id]);

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
      {info.owner ? (
        <div>
          <S.UserImgBox src={info.userImage} alt="유저사진" />
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
              <form style={{ margin: '0px 0px 5px 0px' }}>
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
        <S.UserImgBox src={info.userImage} alt="유저사진" />
      )}
      <S.UserInfoBox>
        <div>{info.name}</div>
        <div>{info.email}</div>
      </S.UserInfoBox>
      <S.UploadImageBox>
        <S.ControlBox onClick={handleModal}>이미지 업로드</S.ControlBox>
      </S.UploadImageBox>
    </S.FlexBox>
  );
};

export default MyPageUserInfo;
