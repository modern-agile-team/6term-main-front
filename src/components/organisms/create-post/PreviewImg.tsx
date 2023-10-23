import { FileInfoType } from './PostCreate';
import * as S from './styled';

const PreviewImg = (props: FileInfoType) => {
  return (
    <div>
      <S.ImagePreview src={props.url} alt="업로드 사진" />
    </div>
  );
};

export default PreviewImg;
