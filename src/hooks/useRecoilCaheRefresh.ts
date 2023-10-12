import { RecoilValue, useRecoilRefresher_UNSTABLE } from 'recoil';

/**recoil갱신을 위한 hook
 * @param state값
 * @returns 갱신된 값
 * 사용
 * const myPostsCacheRefresher = useRecoilCacheRefresh(myPostsState);
 */
const useRecoilCacheRefresh = (state: RecoilValue<any>) => {
  const refresher = useRecoilRefresher_UNSTABLE(state);
  return refresher;
};

export default useRecoilCacheRefresh;
