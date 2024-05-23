import React, { useState } from 'react';
import { Container, Group, Burger, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Navbar.module.css';
import { cn } from '@/utils/cn';

const links = [
  { link: '/superadmin', label: 'SuperAdmin' },
 
];

export function DashNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`${classes.link} ${active === link.link ? classes.active : ''}`}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <div> LOGO</div>

        <Group className={classes.bar} gap={5}>
          <Box className='pr-[10%]'>
          {items}
          </Box>
        </Group>

      </div>
    </header>
  );
}
