"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ReduxProvider } from "./providers/reduxProvider";
import { useAppSelector } from "./store/hooks";
import "./styles/main.scss";
import { ToastContainer } from "react-toastify";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const toggleSidebar = () => {
    document.querySelector(".wrapper")?.classList.toggle("active");
  };
  return (
    <html lang="en">
      <body className="">
        <ReduxProvider>
          <ToastContainer />
          <main className="container-fluid p-0">
            <div className="wrapper active">
              <Sidebar />
              <div className="content px-2">
                <Header />
                <div className="page-content">{children}</div>
                <Footer />
              </div>
              <div className="sidebar-bg" onClick={toggleSidebar}></div>
            </div>
          </main>
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            async
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
            async
          ></script>
        </ReduxProvider>
      </body>
    </html>
  );
}
