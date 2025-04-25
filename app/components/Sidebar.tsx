"use client";

import { JSX, useEffect, useState } from "react";
import ToggleIcon from "../assets/icons/ToggleIcon";
import "../styles/components/_sidebar.scss";
import "../styles/abstracts/_variable.scss";
import { useGetModuleAllowedQuery } from "../apiService/services/sidebarApi";
import DashboardIcon from "../assets/icons/Dashboard";
import CustomersIcon from "../assets/icons/Customers";
import ProductsIcon from "../assets/icons/Products";
import SalesIcon from "../assets/icons/Sales";
import LandingPageIcon from "../assets/icons/LandingPage";
import InventoryIcon from "../assets/icons/Inventory";
import PromotionalMailIcon from "../assets/icons/PromotionalMail";
import ReferralBenefitsIcon from "../assets/icons/ReferralBenefits";
import NewsletterIcon from "../assets/icons/Newsletter";
import InvoiceIcon from "../assets/icons/Invoice";
import EmployeeIcon from "../assets/icons/Employee";
import ReportsIcon from "../assets/icons/Reports";
import SettingsIcon from "../assets/icons/Settings";
import HelpIcon from "../assets/icons/Help";
import SignOutIcon from "../assets/icons/SignOut";
import Link from "next/link";

export default function Sidebar() {
  const pathname = typeof window !== undefined && window.location.pathname;
  const [currentpage, setCurrentPage] = useState(pathname);
  const toggleSidebar = () => {
    document.querySelector(".wrapper")?.classList.toggle("active");
    document.querySelector("body")?.classList.toggle("overflow-hidden");
  };

  const { data, refetch: getSidebarData } = useGetModuleAllowedQuery("");

  useEffect(() => {
    getSidebarData();
  }, []);

  const iconMap: Record<string, JSX.Element> = {
    Dashboard: <DashboardIcon />,
    Customers: <CustomersIcon />,
    Products: <ProductsIcon />,
    Sales: <SalesIcon />,
    LandingPage: <LandingPageIcon />,
    Inventory: <InventoryIcon />,
    PromotionalMails: <PromotionalMailIcon />,
    ReferralBenefits: <ReferralBenefitsIcon />,
    Newsletter: <NewsletterIcon />,
    Invoice: <InvoiceIcon />,
    Employee: <EmployeeIcon />,
    Reports: <ReportsIcon />,
    Help: <HelpIcon />,
    Settings: <SettingsIcon />,
  };
  let menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: "Dashboard",
      path: "/dashboard",
      component: "Dashboard",
      exact: true,
    },
    {
      id: 2,
      name: "Customers",
      icon: "Customers",
      path: "/customers",
      component: "Customers",
      exact: true,
    },
    {
      id: 3,
      name: "Products",
      icon: "Products",
      path: "/products",
      component: "Products",
      exact: true,
    },
    {
      id: 4,
      name: "Sales",
      icon: "Sales",
      path: "/sales",
      component: "Sales",
      exact: true,
    },
    {
      id: 5,
      name: "Landing Page",
      icon: "LandingPage",
      path: "/landingPage",
      component: "Landing Page",
      exact: true,
    },
    {
      id: 6,
      name: "Inventory",
      icon: "Inventory",
      path: "/inventory",
      component: "Inventory",
      exact: true,
    },
    {
      id: 7,
      name: "Promotional Mails",
      icon: "PromotionalMails",
      path: "/promotionalMails",
      component: "Promotional Mails",
      exact: true,
    },
    {
      id: 8,
      name: "Referral Benefits",
      icon: "ReferralBenefits",
      path: "/referralBenefits",
      component: "Referral Benefits",
      exact: true,
    },
    {
      id: 9,
      name: "Newsletter",
      icon: "Newsletter",
      path: "/dailyNewsletter",
      component: "Daily Newsletter",
      exact: true,
    },
    {
      id: 10,
      name: "Invoice",
      icon: "Invoice",
      path: "/invoice",
      component: "Invoice",
      exact: true,
    },
    {
      id: 11,
      name: "Employee",
      icon: "Employee",
      path: "/employee",
      component: "Employee",
      exact: true,
    },
    {
      id: 12,
      name: "Reports",
      icon: "Reports",
      path: "/reports",
      component: "Reports",
      exact: true,
    },
    {
      id: 13,
      name: "Help",
      icon: "Help",
      path: "/help",
      component: "Help",
      exact: true,
    },
    {
      id: 14,
      name: "Settings",
      icon: "Settings",
      path: "/settings",
      component: "Settings",
      exact: true,
    },
  ];

  return (
    <div className="sidebar text-white">
      <ul className="nav nav-sidebar flex-nowrap flex-column w-100">
        {/* TODO : loop will be added here */}
        <li className="text-center w-100 d-block py-1 mb-3">
          <a
            onClick={() => {
              toggleSidebar();
            }}
            className="w-100 d-flex align-items-center ps-2 pe-2 py-1"
          >
            <ToggleIcon />
          </a>
        </li>
        {/* Last Item will be  display at the end */}
        {menuList?.map((item, index) => {
          return (
            <li className={`text-center w-100 d-block`} key={`menu-${index}`}>
              <Link
                href={item.path}
                className={`w-100 d-flex align-items-center ps-2 pe-2 mb-1 ${currentpage === item.path ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage(item.path);
                  document.querySelector(".wrapper")?.classList.add("active");
                }}
              >
                {iconMap[item.icon] || iconMap[item.name] || null}
                <span className="ml-3">{item?.name}</span>
              </Link>
            </li>
          );
        })}

        <li className="text-center w-100 d-block mt-auto">
          <a
            href="./login.html"
            className="w-100 d-flex align-items-center ps-2 pe-2"
          >
            <SignOutIcon />
            <span className="ml-3">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
