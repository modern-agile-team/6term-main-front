import { useRouter } from 'next/router';
import * as S from './styled';

interface UnitInfo {
  thumbnailImg?: string;
  mainText: string;
}

const PostUnitBody = ({ thumbnailImg, mainText }: UnitInfo) => {
  const router = useRouter();

  return (
    <S.MainTextContainer>
      <img
        style={{
          width: 300,
          height: 250,
        }}
        src={typeof thumbnailImg === 'string' ? thumbnailImg : undefined}
        alt="섬네일 이미지"></img>
      <S.TextOutPut>{mainText}</S.TextOutPut>
    </S.MainTextContainer>
  );
};

export default PostUnitBody;
