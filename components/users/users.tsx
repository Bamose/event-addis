import React, { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';
/* import { useGetusersQuery } from '@/store/api';
import { usertypes } from "../../types/types"; */

/* ype userprops = {
  user: usertypes;
}; */



export const Users = () => {

  const { data, isError, isLoading } = useGetusersQuery();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  console.log(data);

  const rows = data?.map((element) => (
    <Table.Tr
      key={element.id}
      className={selectedRows.includes(element.sms) ? 'bg-blue-100' : undefined}
    >
      <Table.Td>
         <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.sms)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.sms]
                : selectedRows.filter((position) => position !== element.sms)
            )
          }
        /> 
    /*   </Table.Td>

      <Table.Td className='text-center'>{element.id}</Table.Td>

      <Table.Td className='text-center'>{element.sms}</Table.Td>
      <Table.Td className='text-center'>{element.gabCount}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div style={{ width: '60vw', height: '90vh', overflowY: 'auto', margin: 'auto' }}>
      <Table style={{ width: '100%' }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th  />
            <Table.Th >ID</Table.Th>
            <Table.Th >Phone Number</Table.Th>
            <Table.Th >Gab Count</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
  }