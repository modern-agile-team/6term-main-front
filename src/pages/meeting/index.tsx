import MeetingPost from '@/components/veiws/MeetingPost';
import SEARCH from '@/apis/search';
import PostBoardTemplates from '@/components/templates/post-temp/PostTemplates';
import { GetServerSideProps, NextPage } from 'next';
import { TotalPageProps } from '..';

const MeetingBoardPage: NextPage<TotalPageProps> = ({ total }) => {
  return (
    <div>
      <PostBoardTemplates main="만남" totalPage={total} />
      {/* <MeetingPost /> */}
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
      '만남',
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

export default MeetingBoardPage;
