import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as S from './styled';
import BOARDS from '@/apis/boards';

interface UnitInfo {
  userImage: string;
  name: string;
  head: string;
}

const PostUnitHeader = (props: UnitInfo) => {
  const router = useRouter();
  const unitId = Number(router.query.id as string);

  return (
    <S.FlexBox direction="row">
      <div>
        <S.UnitWriterImg
          src={props.userImage as string}
          alt="profile"></S.UnitWriterImg>
        <div>{props.name}</div>
      </div>
      <S.UnitTitle>{props.head}</S.UnitTitle>
      <S.HeartInfo>
        <div>❤</div>
        <div>2323</div>
      </S.HeartInfo>
    </S.FlexBox>
  );
};

export default PostUnitHeader;
