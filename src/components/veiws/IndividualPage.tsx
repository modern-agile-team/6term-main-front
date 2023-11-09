import React from 'react';
import RelationLists from '../templates/relation-list/RelatioinLists';
import { RequestFriend } from '@/apis/friend-api/friendRequest';

const IndividualPage = () => {
  return (
    <div>
      <RelationLists />
    </div>
  );
};

export default IndividualPage;
