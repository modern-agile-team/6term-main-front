import { useRouter } from 'next/router';
import * as S from './styled';

interface UnitInfo {
  img: string;
  name: string;
  title: string;
}

const PostUnitHeader = ({ img, name, title }: UnitInfo) => {
  const router = useRouter();
  return (
    <S.FlexBox direction="row">
      <div>
        <S.UnitWriterImg src={img as string} alt="profile"></S.UnitWriterImg>
        <div>{name}</div>
      </div>
      <S.UnitTitle>{title}</S.UnitTitle>
      <S.HeartInfo>
        <div>❤</div>
        <div>2323</div>
      </S.HeartInfo>
    </S.FlexBox>
  );
};

export default PostUnitHeader;
