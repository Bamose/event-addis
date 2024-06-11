'use client';


import { Avatar, Box, Button, LoadingOverlay, Menu } from '@mantine/core';
import {
  IconCertificate,
  IconChalkboard,
  IconLayout,
  IconLogout,
  IconMedal,
  IconSchool,
  IconUser,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useTransition } from 'react';

export function UserNav() {
 
  const [isLoading, startTransition] = useTransition();
  const handleLogout = async () => {
  
  };

  return (
    <Menu shadow="md" width={200} withArrow>
      <Menu.Target>
        <Button variant="subtle" px={3}>
          <Box className="flex items-center gap-2">
            <Avatar className="h-8 w-8"></Avatar>
            {/* <span className="hidden md:block">{user?.fullName}</span> */}
          </Box>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item 
        component={Link}
        href="/admin/event"
        leftSection={<IconCertificate size={18} stroke={1.2} />}>
          My Events
        </Menu.Item>
        <Menu.Item 
        component={Link}
        href="/create-event"
        leftSection={<IconMedal size={18} stroke={1.2} />}>
          Create event
        </Menu.Item>
        <Menu.Item
          component={Link}
          href="/admin/home"
          leftSection={<IconLayout size={18} stroke={1.2}/>}
        >
          Management
        </Menu.Item>

        <Menu.Divider />

    
        <Box pos="relative">
          <LoadingOverlay
            visible={isLoading}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{ color: 'red', size: 18 }}
          />
          <Menu.Item
            component={Link}
          href="/auth/signin"
            leftSection={<IconLogout size={18} stroke={1.2} />}
          >
            Sign out
          </Menu.Item>
        </Box>
      </Menu.Dropdown>
    </Menu>
  );
}
