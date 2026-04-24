import { useState } from "react";
import NutriLayout from "../components/layout/NutriLayout";

import ScheduleHeader from "../components/schedule/ScheduleHeader";
import ScheduleGrid from "../components/schedule/ScheduleGrid";
import ScheduleSidebar from "../components/schedule/ScheduleSidebar";
import ScheduleTopbar from "../components/schedule/ScheduleToolbar";
import NewAppointmentModal from "../components/schedule/NewAppointmentModal";

export default function NutriSchedule() {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(today);
  const [view, setView] = useState("week"); // day | week | month
  const [open, setOpen] = useState(false);

  return (
    <NutriLayout>
      <div className="flex flex-col gap-4">
        {/* HEADER */}
        <ScheduleHeader onNew={() => setOpen(true)} />

        {/* CARD DE NAVEGAÇÃO (MÊS + VIEW) */}
        <ScheduleTopbar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          view={view}
          setView={setView}
        />

        {/* GRID + SIDEBAR */}
        <div className="flex gap-4 h-[calc(100vh-16rem)]">
          <ScheduleGrid currentDate={currentDate} view={view} />

          <ScheduleSidebar currentDate={currentDate} />
        </div>
      </div>

      {/* MODAL */}
      <NewAppointmentModal open={open} onClose={() => setOpen(false)} />
    </NutriLayout>
  );
}
