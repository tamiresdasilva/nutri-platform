import { useSchedule } from "../../../../context/ScheduleContext";
import ScheduleCard from "./ScheduleCard";

// ✅ função padrão (mesma do grid)
function formatDateLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function ScheduleSidebar() {
  const { getAppointmentsByDate, deleteAppointment } = useSchedule();

  // 🔥 CORREÇÃO AQUI
  const today = formatDateLocal(new Date());

  const list = getAppointmentsByDate(today).sort((a, b) =>
    a.time.localeCompare(b.time),
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Deseja cancelar esta consulta?");
    if (confirmDelete) {
      deleteAppointment(id);
    }
  };

  return (
    <div className="w-72 bg-white dark:bg-[#0B1220] rounded-xl p-4 border border-gray-200 dark:border-gray-800">
      <h3 className="text-sm font-semibold mb-3 text-gray-800 dark:text-white">
        Hoje
      </h3>

      <div className="space-y-2">
        {list.map((a) => (
          <ScheduleCard
            key={a.id}
            appointment={a}
            onClick={() => handleDelete(a.id)}
          />
        ))}

        {list.length === 0 && (
          <p className="text-xs text-gray-400">Sem consultas hoje</p>
        )}
      </div>
    </div>
  );
}
