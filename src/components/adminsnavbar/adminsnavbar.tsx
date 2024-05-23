import Link from 'next/link';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import { Burger, Group } from '@mantine/core';

const links = [
  { link: '/superadmin', label: 'SuperAdmin' },

];

export function AdminNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link key={link.label} href={link.link}
    
        className={classes.link}
        data-active={active === link.link}
        onClick={() => setActive(link.link)}
    >
        {link.label}
     
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <div>LOGO</div>
        <Group  className='' gap={5} >
          {items}
        </Group>
    
        {/* <Burger opened={opened} onClick={toggle} size="sm" />  */}
      </div>
    </header>
  );
}
