import { type Icon } from '@tabler/icons-react';

export type Menu = {
  label: string;
  icon?: Icon;
  link?: string;
  isDetail?: boolean;
  children?: Menu[];
};

export type SideMenu = {
  group?: string;
  children: Menu[];
}[];

export type MenuTree = {
  /**
   * only label not link or anything
   */
  isGroup?: boolean;
  /**
   * if true override the menu with the children
   */
  hasMore?: boolean; //
  /**
   * language agnostic text
   */
  label: string;
  icon?: Icon;
  /**
   * relative link
   */
  link?: string;
  /**
   * external link outside of the application
   */
  isExternal?: string;
  /**
   * this menu will be shown only for user who have this permission
   */
  permission?: string[];
  children?: MenuTree[];
};
