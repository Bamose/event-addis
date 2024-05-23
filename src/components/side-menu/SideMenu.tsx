'use client';

import { Card, ScrollArea } from '@mantine/core';
import { type Icon } from '@tabler/icons-react';
import { useMemo } from 'react';
import { useToggle } from 'react-use';

import classes from './SideMenu.module.css';
import { menu } from './menu';
import { MenuTree } from './sidemenu.type';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

type MenuItemProps = {
  data: MenuTree;
  level?: number;
};

type MenuLabelProps = {
  link?: string;
  icon?: Icon;
  label: string;
  level?: number;
};

const startsWith = (str: string, prefix: string) => str.startsWith(prefix);

const findActiveSubMenu = (data: MenuTree[], pathname: string): string[] => {
  let activeMenus: string[] = [];

  for (const item of data) {
    if (item.link && pathname.startsWith(item.link)) {
      activeMenus.push(item.label);
      if (item.children) {
        const childActiveMenus = findActiveSubMenu(item.children, pathname);
        activeMenus = activeMenus.concat(childActiveMenus);
      }
    } else if (item.children) {
      const childActiveMenus = findActiveSubMenu(item.children, pathname);
      activeMenus = activeMenus.concat(childActiveMenus);
    }
  }

  return activeMenus;
};

const MenuLabel = ({ icon, link, label, level = 0 }: MenuLabelProps) => {
  const pathname = usePathname();

  const Icons = { icon: icon as Icon };
  const MenuIcon = icon && <Icons.icon stroke={1.4} size={24} />;

  const active = link && startsWith(pathname, link);

  const paddingLeft = 20 * level;

  return (
    <div
      className={cn(classes.menuItem, active ? classes.active : '')}
      style={{ paddingLeft: paddingLeft <= 0 ? 20 : paddingLeft }}
    >
      <div
        className={cn(classes.activeIndicator, active ? 'bg-primary-5' : '')}
      ></div>
      <div className={classes.labelIcon}>{icon && MenuIcon}</div>
      <span className="ml-2  truncate my-3">{label}</span>
    </div>
  );
};
const MenuItem = ({ data, level = 0 }: MenuItemProps) => {
  const { isGroup, label, link, icon, children } = data;
  const pathname = usePathname();

  const [open, toggle] = useToggle(false);

  // Memoize the result of findActiveSubMenu to avoid unnecessary recalculations
  const isActiveChildren = useMemo(() => {
    if (children && children.length > 0) {
      const foundActiveMenus = findActiveSubMenu(children, pathname);
      return foundActiveMenus.length > 0;
    }
    return false;
  }, [pathname, children]); // Dependencies array: Recompute when `pathname` or `children` changes

  const left = 20 * level + 10;
  const hasChildren = children && children.length > 0;
  const showChildren = (isGroup || open || isActiveChildren) && hasChildren;

  return (
    <li className={cn('relative', isGroup ? 'mt-2' : '')}>
      {isGroup && <span className={classes.groupLabel}>{label}</span>}

      {!isGroup && (
        <>
          {link ? (
            <a href={link} onClick={toggle}>
              <MenuLabel icon={icon} label={label} level={level} link={link} />
            </a>
          ) : (
            <button className="block w-full" onClick={toggle}>
              <MenuLabel icon={icon} label={label} level={level} />
            </button>
          )}
        </>
      )}

      {showChildren && (
        <ul className={cn('relative', isGroup ? 'mt-1' : '')}>
          <div
            className={cn(open ? classes.menuItemContainer : '')}
            style={{ left: left }}
          ></div>
          {children.map((child, index) => (
            <MenuItem data={child} level={level + 1} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
};

export function DashboardMenu() {
  return (
    <Card>
      <Card.Section withBorder inheritPadding py="xs" className="font-semibold">
        DashBoard
      </Card.Section>
      <ScrollArea className="w-[250px] py-4" scrollHideDelay={500}>
        <ul>
          {menu.map((group, index) => (
            <MenuItem data={group} key={index} />
          ))}
        </ul>
      </ScrollArea>
    </Card>
  );
}
