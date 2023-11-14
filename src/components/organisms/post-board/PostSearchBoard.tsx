import { useEffect, useState, useRef, useCallback } from 'react';
import UnitBox from '@/components/molecules/post-board/UnitBox';
import * as S from './styled';
import SEARCH from '@/apis/search';

interface searchInfoType {
  searchQuery: string;
  part: string;
  category: string;
}

const PostSearchBoard = (props: searchInfoType) => {
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

  useEffect(() => {
    getSearchPost();
  }, [props.searchQuery]);

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
    const totalPage = await SEARCH.searchApi(
      props.part,
      props.searchQuery,
      1,
      1,
      props.category,
    );
    const tempPage = Math.ceil(totalPage.meta.total / 16);
    setPage(tempPage);
  }, []);

  const getSearchPost = useCallback(async () => {
    const result = await SEARCH.searchApi(
      props.part,
      props.searchQuery,
      page,
      16,
      props.category,
    ); //api요청 글 목록 불러오기
    const reverseArr = [...result.data].reverse();
    result && setGetList([...reverseArr]);
  }, [props.searchQuery]);

  //스크롤 시 로드 함수
  const loadPost = useCallback(async () => {
    setLoad(true); //로딩 시작
    if (page > 0) {
      const result = await SEARCH.searchApi(
        props.part,
        props.searchQuery,
        page,
        16,
        props.category,
      ); //api요청 글 목록 불러오기
      const reverseArr = [...result.data].reverse();
      result && setGetList((prev: any) => [...prev, ...reverseArr]);
    }
    setLoad(false);
  }, [page]);

  return (
    <S.HeaderContainer>
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
      <div>
        {load && <div>Loading...</div>}
        <div ref={obsRef}></div>
      </div>
    </S.HeaderContainer>
  );
};

export default PostSearchBoard;
