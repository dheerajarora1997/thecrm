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

  return (
    <div className="sidebar text-white d-none d-md-flex">
      <ul className="nav nav-sidebar flex-nowrap flex-column w-100">
        {/* TODO : loop will be added here */}
        <li className="text-center w-100 d-block py-1 mb-3">
          <a
            onClick={() => {
              toggleSidebar();
            }}
            className="w-100 d-flex align-items-center ps-2 pe-3 py-1"
          >
            <ToggleIcon />
          </a>
        </li>
        {/* Last Item will be  display at the end */}
        {data?.map((item, index) => {
          return (
            <li className="text-center w-100 d-block" key={`menu-${index}`}>
              <a className="w-100 d-flex align-items-center ps-2 pe-3 mb-1">
                {iconMap[item.icon] || iconMap[item.name] || null}
                <span className="ml-3">{item?.name}</span>
              </a>
            </li>
          );
        })}

        <li className="text-center w-100 d-block mt-auto">
          <a
            href="./login.html"
            className="w-100 d-flex align-items-center pl-2 pr-3"
          >
            <SignOutIcon />
            <span className="ml-3">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
