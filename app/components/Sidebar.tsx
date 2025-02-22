import ToggleIcon from "../assets/icons/ToggleIcon";
import "../styles/components/_sidebar.scss";
import "../styles/abstracts/_variable.scss";

export default function Sidebar() {
  return (
    <div className="sidebar bg-tertiary text-white d-none d-md-flex">
      <ul className="nav nav-sidebar flex-nowrap flex-column w-100">
        {/* TODO : loop will be added here */}
        <li className="text-center w-100 d-block py-1">
          <a
            href="javascript:void(0);"
            className="w-100 d-flex align-items-center ps-2 pe-3 py-1"
          >
            <ToggleIcon />
          </a>
        </li>
        {/* Last Item will be  display at the end */}
        <li className="text-center w-100 d-block">
          <a
            href="javascript:void(0);"
            className="w-100 d-flex align-items-center ps-2 pe-3 mb-1"
          >
            <i aria-hidden="true" className="text-white">
              D
            </i>
            <span className="ml-3">Dashboard</span>
          </a>
        </li>
        <li className="text-center w-100 d-block mt-auto">
          <a
            href="./login.html"
            className="w-100 d-flex align-items-center pl-2 pr-3"
          >
            <i
              className="fi fi-sign-out p-2"
              data-toggle="tooltip"
              data-placement="right"
              data-container="body"
              title="Sign Out"
              aria-hidden="true"
            ></i>
            <span className="ml-3">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
