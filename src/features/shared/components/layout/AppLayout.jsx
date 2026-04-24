import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({ children, menu }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <div className="h-screen overflow-hidden">
      <Sidebar
        menu={menu}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        openMobile={openMobile}
        setOpenMobile={setOpenMobile}
      />

      {/* CONTAINER DIREITO */}
      <div
        className={`
        h-full flex flex-col
        transition-all duration-300
        ${collapsed ? "md:ml-20" : "md:ml-64"}
      `}
      >
        <Topbar setOpenMobile={setOpenMobile} />

        {/* SCROLL AREA */}
        <main className="flex-1 overflow-y-auto pt-20 p-6 bg-[#FAF7F2] dark:bg-[#020617]">
          {children}
        </main>
      </div>
    </div>
  );
}
