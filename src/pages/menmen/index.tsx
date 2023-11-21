import MenmenPost from '@/components/veiws/MenmenPost';

import { TotalPageProps } from '..';
import { GetServerSideProps, NextPage } from 'next';
import SEARCH from '@/apis/search';
import PostBoardTemplates from '@/components/templates/post-temp/PostTemplates';

const MenmenBoardPage: NextPage<TotalPageProps> = ({ total }) => {
  return (
    <div>
      <PostBoardTemplates main="멘토멘티" totalPage={total} />
      {/* <MenmenPost /> */}
    </div>
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
      '멘토멘티',
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

export default MenmenBoardPage;
