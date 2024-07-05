/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../component/Header/index";
import SideBar from "../DefaultLayout/SideBar/index";

export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="h-32 w-[71.875rem] flex">
        <SideBar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
