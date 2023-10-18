import { useEffect, useState, useRef, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { PostListSelector } from '@/recoil/selectors/UserPostSelector';
import UnitBox, { BoardInfo } from '@/components/molecules/post-board/UnitBox';
import BOARDS from '@/apis/boards';

const PostBoard = (): JSX.Element => {
  const [testList, setTestList] = useState<any>([]);
  const obsRef = useRef(null); //옵저버 state
  const [page, setPage] = useState(1); // 페이지 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); //옵저버 중복 방지
  const endRef = useRef(false); //모든 글 로드 확인 시
  // const getList = useRecoilValue(PostListSelector(page));

  //옵저버 생성
  useEffect(() => {
    console.log(obsRef);
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    getPost();
  }, [page]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 값 증가
    }
  };

  const getPost = useCallback(async () => {
    setLoad(true); //로딩 시작
    const result = await BOARDS.getlistAll(page); //api요청 글 목록 불러오기
    if (result) {
      setTestList((prev: any) => [...prev, ...result]);
    } else {
      console.log('err');
    }
    setLoad(false);
  }, [page]);
  // useEffect(() => {
  //   console.log(getList);
  // }, []);
  return (
    <div
      style={{
        width: 1000,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {/* {getList.map((data: any, idx: number) => {
        return (
          <div key={idx}>
            <UnitBox {...data} />
          </div>
        );
      })} */}
      {testList && (
        <>
          {testList.map((data: any) => {
            return (
              <div key={data.id}>
                <UnitBox {...data} />
              </div>
            );
          })}
        </>
      )}
      {load && <div>Loading...</div>}
      <div ref={obsRef}></div>
    </div>
  );
};

export default PostBoard;
