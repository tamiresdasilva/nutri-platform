import { useState } from "react";
import NutriSidebar from "../NutriSidebar";
import NutriTopbar from "./NutriTopbar";

export default function NutriLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <div className="flex">
      <NutriSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        openMobile={openMobile}
        setOpenMobile={setOpenMobile}
      />

      <div className="flex-1 flex flex-col min-h-screen bg-[#FAF7F2] dark:bg-[#020617]">
        <NutriTopbar setOpenMobile={setOpenMobile} />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
