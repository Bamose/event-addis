'use server'

import { useMemo } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef, //if using TypeScript (optional, but recommended)
} from 'mantine-react-table';
import { membertypes, usertypes } from '@/types/types';
import { useGetmembersQuery } from '@/store/api';
import { List } from '@mantine/core';

//If using TypeScript, define the shape of your data (optional, but recommended)
export type UserApiResponse = {
  data: Array<membertypes>;
  meta: {
    totalRowCount: number;
  };
};
//mock data - strongly typed if you are using TypeScript (optional, but recommended)

export const  Users =() =>{

  const{data} = useGetmembersQuery()
  console.log(data?.data)
  const fetchedUsers = data?.data ?? [];
  console.log('d', fetchedUsers)
  const totalRowCount = data?.meta?.totalRowCount ?? 0;
  //column definitions - strongly typed if you are using TypeScript (optional, but recommended)
  const columns = useMemo<MRT_ColumnDef<membertypes>[]>(
    () => [
      {
        accessorKey: 'first_name',
        header: 'First Name',
      },
      {
        accessorKey: 'last_name',
        header: 'Last Name',
      },
      {
        accessorKey: 'email',
        header: 'Emaiil',
      },
      {
        accessorKey: 'phone_number',
        header: 'Phone Number',
      },
      {
        accessorKey: 'department_name',
        header: 'Department',
      },
      
    ],
    [],
  );

  //pass table options to useMantineReactTable
  const table = useMantineReactTable({
    columns,
    
    data:fetchedUsers, 
    enableRowSelection: true, //enable some features
    enableColumnOrdering: true,
    enableGlobalFilter: false, //turn off a feature
  });

  //note: you can also pass table options as props directly to <MantineReactTable /> instead of using useMantineReactTable
  //but that is not recommended and will likely be deprecated in the future
  return <MantineReactTable  table={table} />;
}