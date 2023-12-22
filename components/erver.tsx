/* import { Users } from '@/components/users/users';
// pages/users.js
export type UserApiResponse = {
  data: Array<membertypes>;
  meta: {
    totalRowCount: number;
  };
};
import { useGetmembersQuery } from '@/store/api';
import { membertypes } from '@/types/types';

const UsersPage = ({ fetchedUsers}:any) => {
  return <Users fetchedUsers={fetchedUsers} />;
};

export const getServerSideProps = async () => {
  const { data } = await useGetmembersQuery();

  return {
    props: {
      fetchedUsers: data?.data ?? [],
    },
  };
};

export default UsersPage;
 */