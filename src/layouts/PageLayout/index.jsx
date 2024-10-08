import React from "react";
import Header from "../../components/Header";
import { MenuNav } from "../../components/Menu/MenuNav";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import MenuItem from "../../components/Menu/MenuItem";

const PageLayout = () => {
  return (
    <div className="relative flex flex-col h-full overflow-y-auto antialiased">
      <Header />
      <div className="relative z-10 flex p-0">
        <MenuNav>
            <MenuItem />
        </MenuNav>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default PageLayout;
