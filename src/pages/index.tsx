import SEARCH from '@/apis/search';
import PostBoardTemplates from '@/components/templates/post-temp/PostTemplates';
import { GetServerSideProps, NextPage } from 'next';

export interface TotalPageProps {
  total: number;
}

const Home: NextPage<TotalPageProps> = ({ total }) => {
  return (
    <>
      <PostBoardTemplates main="전체" totalPage={total} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TotalPageProps> = async (
  context,
) => {
  const query = context.query;
  try {
    const totalPage = await SEARCH.searchApi(
      query.part as string,
      query.searchQuery as string,
      1,
      16,
      '전체',
    );
    const tempTotal = totalPage && totalPage.data.meta.last_page;
    return { props: { total: tempTotal } };
  } catch (error) {
    return {
      props: {
        total: 0,
      },
    };
  }
};

export default Home;
