"use client";

import Link from "next/link";
import ToggleIcon from "../assets/icons/ToggleIcon";
import "../styles/components/_header.scss";
import Image from "next/image";

export default function Header() {
  const toggleSidebar = () => {
    document.querySelector(".wrapper")?.classList.toggle("active");
    document.querySelector("body")?.classList.toggle("overflow-hidden");
  };
  const windowWidth = (typeof window !== "undefined" && window.innerWidth) || 0;
  const isMobile = windowWidth <= 768;
  return (
    <header className="border-bottom px-3">
      <nav className="navbar align-items-center px-0">
        <div className="d-flex align-items-center">
          {isMobile && (
            <button className="btn bg-transparent p-0" onClick={toggleSidebar}>
              <ToggleIcon color="#2e5283" />
            </button>
          )}
          <Link href={"/dashboard"}>
            <Image
              src="/assets/logo.png"
              alt="customer logo"
              width={150}
              height={41}
              style={{ width: "100%" }}
            />
          </Link>
        </div>
        <ul className="navbar-nav ml-auto flex-row align-items-center">
          <li className="nav-item mx-2">
            <button className="btn btn-primary btn-sm btn-circle">+</button>
          </li>
          <li className="nav-item mx-2 d-none d-sm-inline-block">
            <div className="badge text-bg-primary rounded-pill">Status : </div>
          </li>
          <li className="nav-item mx-2 dropdown">
            <a
              href="javascript:void(0)"
              className="nav-link dropdown-toggle content-none"
            >
              <div className="block bg-secondary text-white p-2 text-sm rounded-circle"></div>
            </a>
            <div className="dropdown-menu border-0 p-0 menu-right">
              <ul className="list-group list-group-flush">
                <li className="list-group-item py-3 border-0">
                  <a
                    href="javascript:void(0)"
                    className="font-medium text-tertiary"
                  >
                    Ritvik Pathak
                  </a>
                </li>
                <li className="list-group-item py-3 border-0">
                  <a
                    href="javascript:void(0)"
                    className="font-weight-normal text-tertiary"
                  >
                    <i
                      className="fi fi-dashboard mr-2 primary-color"
                      aria-hidden="true"
                    ></i>
                    My Dashboard
                  </a>
                </li>

                <li className="list-group-item py-3 border-0">
                  <a
                    href="javascript:void(0)"
                    className="font-weight-normal text-tertiary"
                  >
                    <i
                      className="fi fi-user-o mr-2 primary-color"
                      aria-hidden="true"
                    ></i>
                    My Profile
                  </a>
                </li>
                <li className="list-group-item py-3 border-0">
                  <a
                    href="javascript:void(0);"
                    className="font-weight-normal text-tertiary"
                  >
                    <i
                      className="fi fi-sign-out mr-2 primary-color"
                      aria-hidden="true"
                    ></i>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
