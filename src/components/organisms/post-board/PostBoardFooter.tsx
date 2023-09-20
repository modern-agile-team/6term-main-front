import { useState } from 'react';
import * as S from './styled';

const PostBoardFooter = () => {
    const [ pageNumber, setPageNumber ] = useState();

  return (
    <S.FooterContainer>
      <div>
        <S.FlexBox>
          <div>&lt;</div>
          <div>[1]</div>
          <div>&gt;</div>
        </S.FlexBox>
      </div>
    </S.FooterContainer>
  );
};

export default PostBoardFooter;
