import { IFileTypes } from './PostCreate';
import * as S from './styled';

const PreviewImg = (props: IFileTypes) => {
  return (
    <div>
      <S.ImagePreview src={props.url} alt="업로드 사진" />
    </div>
  );
};

export default PreviewImg;
