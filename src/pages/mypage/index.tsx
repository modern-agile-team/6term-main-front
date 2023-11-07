import React from 'react';
import { useRouter } from 'next/router';
import RelationLists from '@/components/templates/relation-list/RelatioinLists';
import IndividualPage from '@/components/veiws/MyPage';

const UserPage = (): React.JSX.Element => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <IndividualPage />
    </>
  );
};

export default UserPage;
