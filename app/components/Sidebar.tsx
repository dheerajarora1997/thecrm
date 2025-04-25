import ToggleIcon from "../assets/icons/ToggleIcon";
import "../styles/components/_sidebar.scss";
import "../styles/abstracts/_variable.scss";
import { useGetModuleAllowedQuery } from "../apiService/services/sidebarApi";
import { JSX, useEffect } from "react";
import DashboardIcon from "../assets/icons/Dashboard";
import CustomersIcon from "../assets/icons/Customers";
import Products from "../products/page";
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

export default function Sidebar() {
  const toggleSidebar = () => {
    document.querySelector(".wrapper")?.classList.toggle("active");
    document.querySelector("body")?.classList.toggle("overflow-hidden");
  };

  const { data, refetch: getSidebarData } = useGetModuleAllowedQuery("");

  useEffect(() => {
    getSidebarData();
    console.log(data);
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
      path: "/Customers",
      component: "Customers",
      exact: true,
    },
    {
      id: 3,
      name: "Products",
      icon: "Products",
      path: "/Products",
      component: "Products",
      exact: true,
    },
    {
      id: 4,
      name: "Sales",
      icon: "Sales",
      path: "/Sales",
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
      path: "/Inventory",
      component: "Inventory",
      exact: true,
    },
    {
      id: 7,
      name: "Promotional Mails",
      icon: "PromotionalMails",
      path: "/Promotional Mails",
      component: "Promotional Mails",
      exact: true,
    },
    {
      id: 8,
      name: "Referral Benefits",
      icon: "ReferralBenefits",
      path: "/Referral Benefits",
      component: "Referral Benefits",
      exact: true,
    },
    {
      id: 9,
      name: "Newsletter",
      icon: "Newsletter",
      path: "/Daily Newsletter",
      component: "Daily Newsletter",
      exact: true,
    },
    {
      id: 9,
      name: "Invoice",
      icon: "Invoice",
      path: "/Invoice",
      component: "Invoice",
      exact: true,
    },
    {
      id: 9,
      name: "Employee",
      icon: "Employee",
      path: "/Employee",
      component: "Employee",
      exact: true,
    },
    {
      id: 9,
      name: "Reports",
      icon: "Reports",
      path: "/Reports",
      component: "Reports",
      exact: true,
    },
    {
      id: 9,
      name: "Help",
      icon: "Help",
      path: "/Help",
      component: "Help",
      exact: true,
    },
    {
      id: 9,
      name: "Settings",
      icon: "Settings",
      path: "/Settings",
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
            <li className="text-center w-100 d-block" key={`menu-${index}`}>
              <a className="w-100 d-flex align-items-center ps-2 pe-2 mb-1">
                {iconMap[item.icon] || iconMap[item.name] || null}
                <span className="ml-3">{item?.name}</span>
              </a>
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
