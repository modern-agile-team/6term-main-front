import { useEffect, useState, useRef, useCallback } from 'react';
import UnitBox from '@/components/molecules/post-board/UnitBox';
import BOARDS from '@/apis/boards';
import * as S from './styled';
import { Board } from '@/components/templates/post-temp/PostTemplates';
import SkeletonUI from '@/components/common/SkeletonUI';

const PostBoards = (props: Board): JSX.Element => {
  const [getList, setGetList] = useState<any>([]);
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const [page, setPage] = useState<number>(0); // 페이지 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); //옵저버 중복 방지

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getList]);

  //첫 페이지 로드
  useEffect(() => {
    getPost();
  }, []);

  //무한스크롤 로드
  useEffect(() => {
    loadPost();
  }, [page]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev - 1); //페이지 값 감소
    }
  };

  //페이지 수 로드 함수
  const getPost = useCallback(async () => {
    const totalPage = await BOARDS.getlistAll(1, 1);
    const tempPage = Math.ceil(totalPage.total / 16);
    setPage(tempPage);
  }, []);

  //스크롤 시 로드 함수
  const loadPost = useCallback(async () => {
    setLoad(true); //로딩 시작
    if (page > 0) {
      const result = await BOARDS.getlistAll(page, 16); //api요청 글 목록 불러오기
      const reverseArr = [...result.data].reverse();
      result && setGetList((prev: any) => [...prev, ...reverseArr]);
    }
    setLoad(false);
  }, [page]);

  return (
    <S.HeaderContainer>
      {props.main !== '전체' ? (
        <>
          {getList && (
            <>
              {getList
                .filter((data: any) => data.main_category === props.main)
                .map((data: any) => {
                  return (
                    <div key={data.id}>
                      <UnitBox {...data} />
                    </div>
                  );
                })}
            </>
          )}
        </>
      ) : (
        <>
          {getList && (
            <>
              {getList.map((data: any) => {
                return (
                  <div key={data.id}>
                    <UnitBox {...data} />
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
      <div>
        {load && <SkeletonUI />}
        <div ref={obsRef}></div>
      </div>
    </S.HeaderContainer>
  );
};

export default PostBoards;
