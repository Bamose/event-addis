"use client";

import { useState } from "react";
import { Container, Group, Burger,Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import classes from "./Navbar.module.css";
import { UserNav } from "./userNavbar";

const links = [
  { link: "/events", label: "Events" },
  { link: "/create-event", label: "Create" },
  { link: "/auth/signin", label: "Sign In" },
  { link: "/auth/signup", label: "Sign Up" },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <div>
          <Image src="/eventaddis-logo.png" alt="logo" style={{width:'60px', height:'60px'}} />
        </div>

        <Group className={classes.bar} gap={5}>
          {items}
          <UserNav />
        </Group>
        {/*     
        <Burger opened={opened} onClick={toggle} size="sm" /> */}
      </div>
    </header>
  );
}
