import React, { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';
import { useGetmembersQuery } from '@/store/api';
/* import { useGetusersQuery } from '@/store/api';
import { usertypes } from "../../types/types"; */

/* ype userprops = {
  user: usertypes;
}; */



export const Users = () => {

  const { data, isError, isLoading } = useGetmembersQuery();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  console.log(data);

  const rows = data?.map((element) => (
    <Table.Tr
      key={element.member_id}
      className={selectedRows.includes(element.member_id) ? 'bg-blue-100' : undefined}
    >
      <Table.Td>
         <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.member_id)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.member_id]
                : selectedRows.filter((position) => position !== element.member_id)
            )
          }
        /> 
      </Table.Td>

      <Table.Td className='text-center'>{element.first_name}</Table.Td>

      <Table.Td className='text-center'>{element.last_name}</Table.Td>
      <Table.Td className='text-center'>{element.department_name}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div style={{ width: '60vw', height: '90vh', overflowY: 'auto', margin: 'auto' }}>
      <Table style={{ width: '100%' }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th  />
            <Table.Th >first_name</Table.Th>
            <Table.Th >last name</Table.Th>
            <Table.Th >department</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
  }