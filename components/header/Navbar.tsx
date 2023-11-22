import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Navbar.module.css';

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
    <header className={classes.header}>
      <div  className={classes.inner}>
        <div> LOGO</div>
      
        <Group  className={classes.bar} gap={5} visibleFrom="xs">
          {items}
        </Group>
        
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
       
      </div>
    </header>
  );
}
