import { useEffect, useState, useRef, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import UnitBox, { BoardInfo } from '@/components/molecules/post-board/UnitBox';
import BOARDS from '@/apis/boards';

const PostBoard = (): JSX.Element => {
  const [getList, setGetList] = useState<any>([]);
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const [page, setPage] = useState<number>(0); // 페이지 state
  const [load, setLoad] = useState(false);
  const [pageState, setPageState] = useState<boolean>(true); //페이지 State
  const preventRef = useRef(true); //옵저버 중복 방지

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    console.log(observer);
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getList]);

  useEffect(() => {
    console.log('::::', page, load, pageState);
  }, [page]);

  useEffect(() => {
    getPost();
  }, [page]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev - 1); //페이지 값 감소
    }
  };

  const getPost = useCallback(async () => {
    setLoad(true); //로딩 시작
    if (pageState) {
      const totalPage = await BOARDS.getlistAll(1, 1);
      const tempPage = Math.ceil(totalPage.total / 16);
      setPage(tempPage);
      setPageState(false);
    } else if (page > 0) {
      //마지막페이지까지 간다면
      const result = await BOARDS.getlistAll(page, 16); //api요청 글 목록 불러오기
      const reverseArr = [...result.data].reverse();
      result && setGetList((prev: any) => [...prev, ...reverseArr]);
    }
    setLoad(false);
  }, [page]);
  return (
    <div
      style={{
        width: 1000,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
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
    </div>
  );
};

export default PostBoard;
