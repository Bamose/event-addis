import { useState } from 'react';
import { Container, Group, Burger, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Navbar.module.css';
import { cn } from '@/utils/cn';

const links = [
  { link: '/Events', label: 'Events' },
  { link: '/signin', label: 'Sign in' },
  { link: '/signup', label: 'Sign Up' },

];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (

    <Box className={classes.header } >
      <header>
      <div  className={classes.inner}>
        <div> LOGO</div>
      
        <Group  className={classes.bar} gap={5} >
          {items}
        </Group>
         
        {/* <Burger opened={opened} onClick={toggle} size="sm" />  */}

       
      </div>
      </header>
    </Box>

  );
}
