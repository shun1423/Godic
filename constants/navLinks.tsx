// react
import React from "react";
// mui icons
import ConstructionIcon from "@mui/icons-material/Construction";
import InfoIcon from "@mui/icons-material/Info";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import WorkIcon from "@mui/icons-material/Work";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
// type
import { ButtonProps, IconProps } from "@mui/material";
export interface NavLink {
  buttonProps?: ButtonProps;
  href: string;
  Icon: React.ReactNode;
  label: string;
  order: number;
  sidebarOrder?: number;
  sidebarVisible?: boolean;
}

const navLinks: NavLink[] = [
  {
    buttonProps: { color: "info" },
    href: "/#about",
    Icon: <InfoIcon color="inherit" fontSize="inherit" />,
    label: "고딕의 솔루션",
    order: 1,
    sidebarVisible: false,
  },
  {
    buttonProps: { color: "info" },
    href: "/#skills",
    Icon: <ConstructionIcon color="inherit" fontSize="inherit" />,
    label: "사무실 공사",
    order: 2,
    sidebarVisible: false,
  },
  {
    buttonProps: { color: "info", variant: "contained" },
    href: "/projects",
    Icon: <WorkspacesIcon color="inherit" fontSize="inherit" />,
    label: "사무실 관리",
    order: 3,
    sidebarOrder: 1,
    sidebarVisible: true,
  },
  {
    buttonProps: { color: "info", variant: "outlined" },
    href: "/hire-me",
    Icon: <WorkIcon color="inherit" fontSize="inherit" />,
    label: "상담 문의",
    order: 4,
    sidebarOrder: 3,
    sidebarVisible: true,
  },
];

export default navLinks;
