'use client'
import { useEffect, useMemo, useState } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  MRT_EditActionButtons,
  MRT_Row, //if using TypeScript (optional, but recommended)
} from 'mantine-react-table';
import { membertypes, usertypes } from '@/types/types';
import { Eventapi, getRunningQueriesThunk, useGetmembersQuery } from '@/store/api';
import { Box, List, Title,Text, Menu, Stack, Flex, Tooltip, ActionIcon, Button } from '@mantine/core';
import { members } from './data';
import { useAppDispatch, wrapper } from '@/store/Store'; // Adjust the import path to your store
import { Getmembers } from '@/store/api'; // Adjust the import path to your API slice

import { GetServerSideProps } from 'next';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { RootState } from '@/store/Store'; 
import { IconEdit, IconSend, IconTrash, IconUserCircle } from '@tabler/icons-react';


export const Users = ({ membersdata }) => {
  const members = membersdata.members;
 
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});
  // Example of rendering - adjust according to your data structure
  const columns = useMemo<MRT_ColumnDef<membertypes>[]>(
    () => [
      {
        accessorKey: 'first_name',
        header: 'First Name',
        mantineEditTextInputProps: {
          type: 'email',
          required: true,
          error: validationErrors?.first_name,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              first_name: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: 'last_name',
        header: 'Last Name',
        mantineEditTextInputProps: {
          type: 'email',
          required: true,
          error: validationErrors?.last_name,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              last_name: undefined,
            }),
        },
      },
      {
        accessorKey: 'email',
        header: 'Emaiil',
        mantineEditTextInputProps: {
          type: 'email',
          required: true,
          error: validationErrors?.email,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              email: undefined,
            }),
        },
      },
      {
        accessorKey: 'phone_number',
        header: 'Phone Number',
        mantineEditTextInputProps: {
          type: 'email',
          required: true,
          error: validationErrors?.phone_number,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              phone_number: undefined,
            }),
        },
      },
      {
        accessorKey: 'department_name',
        header: 'Department',
        mantineEditTextInputProps: {
          type: 'email',
          required: true,
          error: validationErrors?.department_name,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              department_name: undefined,
            }),
        },
      },
      
    ],
    [],
  );
 /*  const openDeleteConfirmModal = (row: MRT_Row<Users>) =>
  modals.openConfirmModal({
    title: 'Are you sure you want to delete this user?',
    children: (
      <Text>
        Are you sure you want to delete {row.original.firstName}{' '}
        {row.original.lastName}? This action cannot be undone.
      </Text>
    ),
    labels: { confirm: 'Delete', cancel: 'Cancel' },
    confirmProps: { color: 'red' },
    onConfirm: () => deleteUser(row.original.id),
  }); */
  //pass table options to useMantineReactTable
  const table = useMantineReactTable({
    columns,
    data: members, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    createDisplayMode: 'modal', //default ('row', and 'custom' are also available)
    editDisplayMode: 'modal',
    enableEditing: true,
   /*  getRowId: (row) => row.member_id,
    mantineToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: 'red',
          children: 'Error loading data',
        }
      : undefined,
    mantineTableContainerProps: {
      sx: {
        minHeight: '500px',
      },
    }, */
    onCreatingRowCancel: () => setValidationErrors({}),
    /* onCreatingRowSave: handleCreateUser, */
    onEditingRowCancel: () => setValidationErrors({}),
  /*   onEditingRowSave: handleSaveUser, */
    renderCreateRowModalContent: ({ table, row, internalEditComponents }) => (
      <Stack>
        <Title order={3}>Create New User</Title>
        {internalEditComponents}
        <Flex justify="flex-end" mt="xl">
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </Flex>
      </Stack>
    ),
    renderEditRowModalContent: ({ table, row, internalEditComponents }) => (
      <Stack>
        <Title order={3}>Edit User</Title>
        {internalEditComponents}
        <Flex justify="flex-end" mt="xl">
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </Flex>
      </Stack>
    ),
    renderRowActions: ({ row, table }) => (
      <Flex gap="md">
        <Tooltip label="Edit">
          <ActionIcon onClick={() => table.setEditingRow(row)}>
            <IconEdit />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Delete">
          <ActionIcon color="red" onClick={() => (row)}>
            <IconTrash />
          </ActionIcon>
        </Tooltip>
      </Flex>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button variant='outline' color='green'
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
          //or you can pass in a row object to set default values with the `createRow` helper function
          // table.setCreatingRow(
          //   createRow(table, {
          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
          //   }),
          // );
        }}
      >
        Create New User
      </Button>
    ),
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableFacetedValues: true,
    enableGrouping: true,
    enablePinning: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: { showColumnFilters: true, showGlobalFilter: true },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    mantinePaginationProps: {
      radius: 'xl',
      size: 'lg',
    },
    mantineSearchTextInputProps: {
      placeholder: 'Search a Member',
    },
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
        }}
      >
        <img
        className='h-20 w-20'
          alt="avatar"
          height={50}
          width={50}
          src='/mant.jpg'
          style={{ borderRadius: '50%' }}
        />
        <Box sx={{ textAlign: 'center' }}>
          <Title>Signature Catch Phrase:</Title>
          <Text>&quot;{row.original.first_name}&quot;</Text>
        </Box>
      </Box>
    ),
    renderRowActionMenuItems: () => (
      <>
        <Menu.Item icon={<IconUserCircle />}>View Profile</Menu.Item>
        <Menu.Item icon={<IconSend />}>Send Email</Menu.Item>
      </>
    ),
  });

  //note: you can also pass table options as props directly to <MantineReactTable /> instead of using useMantineReactTable
  //but that is not recommended and will likely be deprecated in the future
  return <div className='mt-3 px-2'> <MantineReactTable  table={table} /></div>;
};
