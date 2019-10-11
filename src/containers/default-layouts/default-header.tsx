import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { loadingUI } from "./default-layouts";

const { Header } = Layout;

const LogoIcon = lazy(() => import("../../assets/images/icons/Logo"));

export default function DefaultHeader() {
  return (
    <Header className="bg-black text-white flex flex-row justify-between p-0 z-10 xs:justify-center fixed w-full">
      <div className="xs:m-auto">
        <Suspense fallback={loadingUI()}>
          <Link to="/">
            <LogoIcon width="144px" height="65px" />
          </Link>
        </Suspense>
      </div>
      <div className="mr-4 xs:hidden w-64">
        <input
          className="border-yellow border-2 w-full h-6 bg-black text-yellow p-2 placeholder-yellow text-xs"
          placeholder="Search Movie..."
        ></input>
      </div>
    </Header>
  );
}
