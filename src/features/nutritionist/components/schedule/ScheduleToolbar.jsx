import { ChevronLeft, ChevronRight } from "lucide-react";

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
    return d;
  });
}

export default function ScheduleToolbar({
  currentDate,
  setCurrentDate,
  view,
  setView,
}) {
  const weekDays = getWeekDays(currentDate);

  const monthLabel = currentDate.toLocaleString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  const rangeLabel = `${weekDays[0].getDate()} - ${weekDays[4].getDate()}`;

  const today = new Date().toDateString();

  const goPrev = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() - 7);
    setCurrentDate(d);
  };

  const goNext = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + 7);
    setCurrentDate(d);
  };

  return (
    <div className="bg-white dark:bg-[#0B1220] border border-gray-200 dark:border-gray-800 rounded-2xl px-5 py-4 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          onClick={goPrev}
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="text-center">
          <p className="text-base font-semibold text-gray-900 dark:text-white capitalize">
            {monthLabel}
          </p>

          <p className="text-sm text-gray-500 mt-0.5">{rangeLabel}</p>
        </div>

        <button
          onClick={goNext}
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 text-sm">
        {["day", "week", "month"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-3 py-1 rounded-md transition ${
              view === v
                ? "bg-white dark:bg-[#0B1220] shadow text-gray-900 dark:text-white"
                : "text-gray-500 hover:bg-white dark:hover:bg-gray-700"
            }`}
          >
            {v === "day" ? "Dia" : v === "week" ? "Semana" : "Mês"}
          </button>
        ))}
      </div>
    </div>
  );
}
