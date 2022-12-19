import {
  ChartPieIcon,
  SquaresPlusIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

export interface MenuItemCategory {
  label: string;
  items?: MenuItem[];
}

export interface MenuItem {
  name: string;
  link?: string;
  icon?: (
    props: React.ComponentProps<"svg"> & { title?: string; titleId?: string }
  ) => JSX.Element;
  items?: MenuItem[];
}

const sidebarMenu: MenuItemCategory[] = [
  {
    label: "Dashboards",
    items: [
      {
        name: "Simple",
        link: "/dashboard/simple",
        icon: ChartPieIcon,
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        name: "Accounts",
        link: "/management/accounts",
        icon: SquaresPlusIcon,
      },
    ],
  },
  {
    label: "Operation",
    items: [
      {
        name: "Transactions",
        link: "/operation/transactions",
        icon: CreditCardIcon,
      },
    ],
  },
];

export default sidebarMenu;
