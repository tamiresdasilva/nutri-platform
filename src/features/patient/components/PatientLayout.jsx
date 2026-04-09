import { useState } from "react";
import PatientSidebar from "./PatientSidebar";
import PatientTopbar from "./PatientTopbar";

export default function PatientLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <div className="flex">
      <PatientSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        openMobile={openMobile}
        setOpenMobile={setOpenMobile}
      />

      <div className="flex-1 flex flex-col min-h-screen bg-[#FAF7F2] dark:bg-[#020617]">
        <PatientTopbar setOpenMobile={setOpenMobile} />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
