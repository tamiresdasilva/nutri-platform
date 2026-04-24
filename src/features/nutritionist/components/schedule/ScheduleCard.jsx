import { Clock } from "lucide-react";

const styles = {
  "Primeira Consulta": {
    bg: "bg-[#E9FAEF]",
    border: "border-[#AEEAC4]",
    text: "text-[#22C55E]",
  },
  "Consulta de Retorno": {
    bg: "bg-[#EAF3FF]",
    border: "border-[#B1D1FF]",
    text: "text-[#2B7FFF]",
  },
  "Consulta de Acompanhamento": {
    bg: "bg-[#F7EDFF]",
    border: "border-[#E1BBFF]",
    text: "text-[#AD46FF]",
  },
};

export default function ScheduleCard({ appointment, onClick }) {
  const style = styles[appointment.type] || styles["Primeira Consulta"];

  return (
    <div
      onClick={onClick}
      className={`
        ${style.bg} ${style.border}
        border rounded-lg px-2 py-1 text-[11px]
        cursor-pointer hover:opacity-90 transition
        flex flex-col gap-0.5
      `}
    >
      {/* HORÁRIO */}
      <div className="flex items-center gap-1">
        <Clock size={12} className={style.text} />
        <span className="font-semibold text-black">{appointment.time}</span>
      </div>

      {/* PACIENTE */}
      <span className="font-semibold truncate">{appointment.patientName}</span>

      {/* TIPO */}
      <span className={`${style.text} text-[10px] truncate`}>
        {appointment.type}
      </span>
    </div>
  );
}
