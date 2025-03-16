import React from "react";
import NavBar from "../layouts/NavBar";
import Toolbar from "../layouts/Toolbar";
import { Button } from "antd";

function Overview() {
  return (
    <>
      <NavBar></NavBar>
      <Toolbar></Toolbar>
      <main className="admin-main gap-y-10 h-[3000px]">
        <div className="flex justify-between h-11">
          <h1 className="text-4xl font-bold text-blue1">Tổng quan</h1>
          {/* <Button color="green" variant="solid" className="!h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path
                fill="white"
                d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 224h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32"
              />
            </svg>
            Thêm 
          </Button> */}
        </div>
      </main>
    </>
  );
}

export default Overview;
