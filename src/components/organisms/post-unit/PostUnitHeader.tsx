import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as S from './styled';
import BOARDS from '@/apis/boards';

interface UnitInfo {
  img: string;
  name: string;
  title: string;
}

const PostUnitHeader = ({ img, name, title }: UnitInfo) => {
  const router = useRouter();
  const unitId = Number(router.query.id as string);

  const handleTest = async () => {
    BOARDS.getBoardLikeApi(unitId).then((res) => console.log(res));
  };

  useEffect(() => {
    handleTest();
  }, []);

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
