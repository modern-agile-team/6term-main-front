import { useRouter } from "next/router";
import * as S from "./styled";

const PostUnitBody = () => {
    const router = useRouter();

    return (
        <S.MainTextContainer>
          <img style={{
            width: 300,
            height: 250,
          }} src={typeof router.query.thumbnail === "string" ? router.query.thumbnail : undefined} alt="2"></img>
          <div>{router.query.mainText}</div>
        </S.MainTextContainer>
    );
}

export default PostUnitBody;