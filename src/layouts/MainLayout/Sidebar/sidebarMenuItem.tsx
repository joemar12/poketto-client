import { ReactNode, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { reactHooksModule } from "@reduxjs/toolkit/dist/query/react";

interface SidebarMenuItemProps {
  children?: ReactNode;
  link?: string;
  icon?: any;
  badge?: string;
  open?: boolean;
  active?: boolean;
  label: string;
}

const SidebarButton = () => {};

const SidebarMenuItem = (props: SidebarMenuItemProps) => {};
