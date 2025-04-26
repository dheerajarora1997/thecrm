"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ToggleIcon from "../assets/icons/ToggleIcon";
import "../styles/components/_header.scss";

export default function Header() {
  const toggleSidebar = () => {
    document.querySelector(".wrapper")?.classList.toggle("active");
    document.querySelector("body")?.classList.toggle("overflow-hidden");
  };
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="border-bottom px-3">
      <nav className="navbar align-items-center px-0">
        <div className="d-flex align-items-center">
          {isMobile && (
            <button
              className="btn bg-transparent p-0 me-2"
              onClick={toggleSidebar}
            >
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
            <div className="dropdown">
              <button
                className="btn btn-primary btn-sm rounded-circle d-flex justify-content-center align-items-center text-white lh-2 fs-3"
                style={{ width: 30, height: 30 }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                +
              </button>
              <ul
                className="dropdown-menu position-absolute menu-right border-0 shadow"
                style={{ right: 0, left: "auto" }}
              >
                <li>
                  <a className="dropdown-item " href="#">
                    Create New Customer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    Create New Sales
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    Add New Product
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    Add New Invetory
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    Add New Product
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item mx-2 d-none d-sm-inline-block">
            <div className="badge bg-success bg-opacity-50 rounded fw-light">
              Status :<span className="text-success px-2 fw-bold">Live</span>
            </div>
          </li>
          <li className="nav-item mx-2 dropdown">
            <div className="dropdown">
              <button
                style={{ width: 40, height: 40 }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="btn btn-primary text-white p-2 text-sm rounded-circle"
              ></button>
              <div
                className="dropdown-menu position-absolute menu-right border-0 rounded-3 shadow p-0 overflow-hidden"
                style={{ right: 0, left: "auto" }}
              >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 bg-muted bg-opacity-25">
                    <span className="fw-bold text-dark">Ritvik Pathak</span>
                  </li>
                  <li className="list-group-item border-0">
                    <span className="fw-normal text-tertiary">
                      <i
                        className="fi fi-dashboard mr-2 primary-color"
                        aria-hidden="true"
                      ></i>
                      My Dashboard
                    </span>
                  </li>

                  <li className="list-group-item border-0">
                    <span className="fw-normal text-tertiary">
                      <i
                        className="fi fi-user-o mr-2 primary-color"
                        aria-hidden="true"
                      ></i>
                      My Profile
                    </span>
                  </li>
                  <li className="list-group-item border-0">
                    <span className="fw-normal text-tertiary">
                      <i
                        className="fi fi-sign-out mr-2 primary-color"
                        aria-hidden="true"
                      ></i>
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
