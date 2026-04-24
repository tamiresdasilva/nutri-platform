import { useState } from "react";
import { useSchedule } from "../../../../context/ScheduleContext";
import ScheduleCard from "./ScheduleCard";
import ConfirmationDialog from "../../../ui/ConfirmationDialog";

// horários do grid
const hours = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

// 🔥 FIX REAL DO BUG DE DATA (SEM UTC)
function formatDateLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getStartOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

function getWeekDays(date) {
  const start = getStartOfWeek(date);

  return Array.from({ length: 5 }).map((_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    return {
      fullDate: d,
      dayNumber: d.getDate(),
      label: d
        .toLocaleDateString("pt-BR", { weekday: "short" })
        .replace(".", "")
        .toUpperCase(),
      iso: formatDateLocal(d), // ✅ CORREÇÃO AQUI
    };
  });
}

function isToday(date) {
  return new Date(date).toDateString() === new Date().toDateString();
}

export default function ScheduleGrid({ currentDate }) {
  const { getAppointmentsByDate, deleteAppointment } = useSchedule();

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const weekDays = getWeekDays(currentDate);

  return (
    <>
      <div className="flex-1 bg-white dark:bg-[#0B1220] border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="grid grid-cols-[60px_repeat(5,minmax(120px,1fr))] border-b border-gray-200 dark:border-gray-800">
          <div className="p-2 text-xs text-gray-400">HORÁRIO</div>

          {weekDays.map((d) => {
            const today = isToday(d.fullDate);

            return (
              <div
                key={d.iso}
                className={`p-2 text-center ${today ? "bg-[#F5F1EA]" : ""}`}
              >
                <p className="text-[10px] text-gray-400">{d.label}</p>

                <p
                  className={`text-sm font-semibold ${
                    today ? "text-green-600" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {d.dayNumber}
                </p>
              </div>
            );
          })}
        </div>

        {/* GRID */}
        <div className="flex-1 overflow-auto">
          <div className="min-w-[700px] grid grid-cols-[60px_repeat(5,minmax(120px,1fr))]">
            {hours.map((hour) => {
              const [startHour] = hour.split(":").map(Number);

              return (
                <div key={hour} className="contents">
                  {/* HORA */}
                  <div className="h-24 border-t border-gray-100 text-xs text-gray-400 p-2">
                    {hour}
                  </div>

                  {/* DIAS */}
                  {weekDays.map((d) => {
                    const appointments = getAppointmentsByDate(d.iso);

                    const eventsInBlock = appointments
                      .filter((a) => {
                        const [h] = a.time.split(":").map(Number);
                        return h === startHour;
                      })
                      .sort((a, b) => a.time.localeCompare(b.time));

                    return (
                      <div
                        key={d.iso + hour}
                        className="h-24 border-t border-l border-gray-100 p-1 flex flex-col gap-1"
                      >
                        {eventsInBlock.slice(0, 2).map((a) => (
                          <ScheduleCard
                            key={a.id}
                            appointment={a}
                            onClick={() => {
                              setSelectedAppointment(a);
                              setConfirmOpen(true);
                            }}
                          />
                        ))}

                        {eventsInBlock.length > 2 && (
                          <span className="text-[10px] text-gray-400">
                            +{eventsInBlock.length - 2} mais
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODAL DE CONFIRMAÇÃO */}
      <ConfirmationDialog
        open={confirmOpen}
        title="Cancelar consulta?"
        description="Essa ação não pode ser desfeita."
        confirmLabel="Cancelar consulta"
        cancelLabel="Voltar"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          deleteAppointment(selectedAppointment.id);
          setConfirmOpen(false);
          setSelectedAppointment(null);
        }}
      />
    </>
  );
}
