import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import * as S from './styled';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
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
  const [isStateHtml, SetStateHtml] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleSlideNext = () => {
    if (currentSlide === props.boardImages.length - 1) {
      setCurrentSlide(0);
      // alert('마지막 사진 입니다.');
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSlidePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(props.boardImages.length - 1);
      // alert('맨 앞 사진 입니다.');
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    SetStateHtml(true);
  }, []);

  return (
    <div>
      {props.boardImages.length >= 1 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <S.SlideButton>
            <GrFormPrevious
              style={{ margin: '0 auto 0 auto' }}
              onClick={handleSlidePrev}
            />
          </S.SlideButton>
          <S.SlideContain>
            <S.SlidImages ref={slideRef}>
              {props.boardImages.map((data) => {
                return (
                  <div>
                    <S.BodyImages src={data.imageUrl} alt="이미지" />
                  </div>
                );
              })}
            </S.SlidImages>
          </S.SlideContain>
          <S.SlideButton>
            <GrFormNext
              style={{ margin: '0 auto 0 auto' }}
              onClick={handleSlideNext}
            />
          </S.SlideButton>
        </div>
      )}
      <S.MainTextContainer>
        {isStateHtml && (
          <S.TextOutPut dangerouslySetInnerHTML={{ __html: props.body }} />
        )}
      </S.MainTextContainer>
    </div>
  );
};

export default PostUnitBody;
