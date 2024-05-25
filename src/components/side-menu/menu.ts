import {
  IconCalendar,
  IconChartBar,
  IconHelpCircle,
  IconHistory,
  IconHome,
  IconHomeDollar,
  IconSettings,
} from "@tabler/icons-react";
import { MenuTree } from "./sidemenu.type";

export const menu: MenuTree[] = [
  /*  {
      label: 'Dashboard',
      icon: IconDashboard,
      link: '/learn/dashboard',
      permission: ['view'],
    }, */
  {
    isGroup: true,
    label: "Admin",

    children: [
      {
        label: "Home",
        icon: IconHome,

        link: "/admin/home",
        permission: ["view"],
      },
      {
        label: "Event",
        icon: IconCalendar,
        link: "/admin/event",
        permission: ["view"],
      },

      {
        label: "Tickets",
        icon: IconHistory,
        link: "/admin/tickets",
        permission: ["view"],
      },

      {
        label: "Analytics",
        icon: IconChartBar,
        link: "/admin/history",
        permission: ["view"],
      },
      {
        label: "Finance",
        icon: IconHomeDollar,
        link: "/admin/finance",
        permission: ["view"],
      },
      {
        label: "Settings",
        icon: IconSettings,
        link: "/admin/settings",
        permission: ["view"],
      },
      {
        label: "Support",
        icon: IconHelpCircle,
        link: "/admin/support",
        permission: ["view"],
      },
    ],
  },
  /* {
      isGroup: true,
      label: 'Activity',
  
      children: [
        {
          label: 'Courses',
          icon: IconCertificate,
          link: '/learn/activity/courses',
          permission: ['view'],
        },
  
        {
          label: 'Wish list',
          icon: IconStar,
  
          link: '/learn/activity/wishlist',
          permission: ['view'],
        },
      {
          label: 'Schedule',
          icon: IconTimelineEvent,
  
          link: '/learn/activity/schedule',
          permission: ['view'],
        }, 
      ],
    },
    {
      isGroup: true,
      label: 'Settings',
  
      children: [
        {
          label: 'Payment Methods',
          icon: IconTransactionDollar,
  
          link: '/learn/settings/Payment-Methods',
          permission: ['view'],
        },
  
        {
          label: 'Close account',
          icon: IconUserCancel,
          link: '/learn/settings/close-account',
          permission: ['view'],
        },
      ],
    }, */
];
