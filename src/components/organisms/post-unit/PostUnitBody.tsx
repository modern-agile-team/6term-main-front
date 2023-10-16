import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import * as S from './styled';

interface UnitInfo {
  boardImages: [
    {
      imageUrl: string;
      id: number;
    },
  ];
  body: string;
}

const PostUnitBody = (props: UnitInfo) => {
  const [getHtml, setHtml] = useState<any>();
  const router = useRouter();

  const getHTML = () => {
    setHtml(<S.TextOutPut dangerouslySetInnerHTML={{ __html: props.body }} />);
  };

  useEffect(() => {
    getHTML();
  }, []);

  return (
    <S.MainTextContainer>
      <img
        style={{
          width: 300,
          height: 250,
        }}
        src={
          typeof props.boardImages[0].imageUrl === 'string'
            ? props.boardImages[0].imageUrl
            : undefined
        }
        alt="섬네일 이미지"></img>
      {process.browser && getHtml}
    </S.MainTextContainer>
  );
};

export default PostUnitBody;
