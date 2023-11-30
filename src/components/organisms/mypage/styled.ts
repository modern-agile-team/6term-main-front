import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
`;

export const UserImgBox = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const UserInfoBox = styled.div`
  padding: 10px 0px 0px 10px;
`;

export const ImageBox = styled.div`
  width: 240px;
  height: 240px;
  border: 1px solid #000;
`;

export const Imagelabel = styled.label`
  cursor: pointer;
  border: 1px solid #999;
  border-radius: 15px;
  padding: 5px;
  font-size: 12px;
  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

/* MyPageUserBoards----------------------------------*/

export const ControlBox = styled.div`
  cursor: pointer;
  border: 1px solid #999;
  border-radius: 15px;
  padding: 5px;
  font-size: 12px;
  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

export const UserOwnBoardContainer = styled.div`
  display: flex;
  min-width: 800px;
  flex-direction: column;
  height: 500px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BoardUnitBox = styled.div`
  width: 800px;
  margin: 5px;
  border: 1px solid #999;
  border-radius: 15px;
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

export const UploadImageBox = styled.div`
  margin-left: auto;
  padding: 27px 25px 0px 0px;
`;

export const TitleBox = styled.div`
  display: flex;
  margin: 30px 0px 0px 0px;
`;

export const TitleChlidren = styled.div`
  font-weight: bold;
`;

export const CreatePostBox = styled.div`
  cursor: pointer;
  margin-left: auto;
  font-size: 11px;
  padding: 5px;
  border-radius: 15px;
  border: 1px solid #999;
  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

/* MyPageUerSetting----------------------------------*/
export const SettingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SettingBox = styled.div`
  width: 800px;
  margin-top: 30px;
`;

export const DarkModBox = styled.div`
  width: 100px;
  height: 22.4px;
  text-align: center;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 5px;
  margin: 2px;
  display: flex;
`;

export const SunMod = styled.div`
  width: 20px;
  border-radius: 50%;
  border: 1px solid #ff0;
  cursor: pointer;
`;

export const DarkMod = styled.div`
  width: 20px;
  margin-left: auto;
  border-radius: 50%;
  border: 1px solid #000;
  cursor: pointer;
`;

export const UserAccountBox = styled.div`
  width: 100px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #f00;
  border-radius: 15px;
  padding: 5px;
  margin: 2px;
  &:hover {
    background-color: #f00;
    color: #fff;
  }
`;

export const DarkModeBtn = styled.div`
  width: 30px;
  height: 30px;
  background-size: 26px 26px;
  background-repeat: no-repeat;
`;
