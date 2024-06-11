"use client";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; //if using mantine date picker features
import "mantine-react-table/styles.css"; //make sure MRT styles were imported in your app root (once)
import { useMemo } from "react";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  MRT_GlobalFilterTextInput,
  MRT_ToggleFiltersButton,
} from "mantine-react-table";
import { Box, Button, Flex, Menu, Text, Title } from "@mantine/core";
import { IconUserCircle, IconSend } from "@tabler/icons-react";

import { UserEvent } from "../_actions/userTable.schema";
interface UserEventListProps {
  data: UserEvent[];
}

const UserTable = ({ data }: UserEventListProps) => {
  const columns = useMemo<MRT_ColumnDef<UserEvent>[]>(
    () => [
      {
        id: "user", //id used to define `group` column
        header: "User",
        columns: [
          {
            accessorKey: "fullname",
            header: "Name",
            size: 250,
            filterVariant: "autocomplete",
          },
          {
            accessorKey: "email",
            header: "Email",
            size: 200,
            filterVariant: "autocomplete",
          },
        ],
      },
      {
        id: "eventDetails",
        header: "Event Details",
        columns: [
          {
            accessorKey: "eventname",
            header: "Event Name",
            size: 350,
            filterVariant: "multi-select",
          },
          {
            accessorKey: "location",
            header: "Location",
            size: 200,
            filterVariant: "multi-select",
          },
        
          {
            accessorFn: (row) => new Date(row.createdat),
            id: "createdat",
            header: "Date",
            sortingFn: "datetime",
            enableColumnFilterModes: false,
            Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(),
          },
        ],
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data, // must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableFacetedValues: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    mantinePaginationProps: {
      radius: "xl",
      size: "lg",
    },
    mantineSearchTextInputProps: {
      placeholder: "Search Users",
    },
    renderRowActionMenuItems: () => (
      <>
        <Menu.Item leftSection={<IconUserCircle />}>View Profile</Menu.Item>
        <Menu.Item leftSection={<IconSend />}>Send Email</Menu.Item>
      </>
    ),
    renderTopToolbar: ({ table }) => {
      const handleDeactivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("Deactivating " + row.getValue("fullname"));
        });
      };

      const handleActivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("Activating " + row.getValue("fullname"));
        });
      };

      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("Contact " + row.getValue("fullname"));
        });
      };

      return (
        <Flex p="md" justify="space-between">
          <Flex gap="xs">
            {/* import MRT sub-components */}
            <MRT_GlobalFilterTextInput table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Flex>
          <Flex style={{ gap: "8px" }}>
            <Button
              color="red"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleDeactivate}
              variant="filled"
            >
              Deactivate
            </Button>
            <Button
              color="green"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleActivate}
              variant="filled"
            >
              Activate
            </Button>
            <Button
              color="blue"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleContact}
              variant="filled"
            >
              Contact
            </Button>
          </Flex>
        </Flex>
      );
    },
  });

  return (
    <div className=" w-[73vw] overflow-x-scroll">
      <MantineReactTable table={table} />
    </div>
  );;
};

export default UserTable;
