import { useRouter } from "next/router";
import * as S from "./styled";

const PostUnitHeader = () => {
    const router = useRouter();

    return (
        <S.FlexBox direction="row">
          <div>
            <S.UnitWriterImg src={router.query.img as string} alt="profile"></S.UnitWriterImg>
            <div>{router.query.name}</div>
          </div>
          <S.UnitTitle>{router.query.title}</S.UnitTitle>
          <S.HeartInfo>
            <div>❤</div>
            <div>2323</div>
          </S.HeartInfo>
        </S.FlexBox>
    );
}

export default PostUnitHeader;