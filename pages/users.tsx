
import { useEffect, useMemo } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef, //if using TypeScript (optional, but recommended)
} from 'mantine-react-table';
import { membertypes, usertypes } from '@/types/types';
import { Eventapi, getRunningQueriesThunk, useGetmembersQuery } from '@/store/api';
import { List } from '@mantine/core';
import { members } from '../components/users/data';
import { useAppDispatch, wrapper } from '@/store/Store'; // Adjust the import path to your store
import { Getmembers } from '@/store/api'; // Adjust the import path to your API slice

import { GetServerSideProps } from 'next';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { RootState } from '@/store/Store'; 


export const Users = ({ membersdata }) => {
  const members = membersdata.members;
  console.log(members);

  // Example of rendering - adjust according to your data structure
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
    
    data:members, 
    enableRowSelection: true, //enable some features
    enableColumnOrdering: true,
    enableGlobalFilter: false, //turn off a feature
  });

  //note: you can also pass table options as props directly to <MantineReactTable /> instead of using useMantineReactTable
  //but that is not recommended and will likely be deprecated in the future
  return <MantineReactTable  table={table} />;
};
