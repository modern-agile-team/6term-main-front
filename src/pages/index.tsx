import SEARCH from '@/apis/search';
import PostBoardTemplates from '@/components/templates/post-temp/PostTemplates';
import AllPost from '@/components/veiws/AllPost';
import { GetServerSideProps, NextPage } from 'next';

interface TotalPageProps {
  total: number;
}

const Home: NextPage<TotalPageProps> = ({ total }) => {
  return (
    <>
      <PostBoardTemplates main="전체" totalPage={total} />
      {/* <AllPost /> */}
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
      1,
      '전체',
    );
    const tempPage = Math.ceil(totalPage.meta.total / 16);
    return { props: { total: tempPage } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        total: 0,
      },
    };
  }
};

export default Home;
