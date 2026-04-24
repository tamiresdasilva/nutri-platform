import { useEffect, useState } from "react";
import { useSchedule } from "../../../../context/ScheduleContext";
import { mockUsers } from "../../../../mocks/users";

// 🔥 horários permitidos (expediente)
const availableHours = Array.from({ length: 12 }, (_, i) => {
  const hour = 8 + i; // 08 até 19
  return `${String(hour).padStart(2, "0")}:00`;
});

export default function EditAppointmentModal({ open, onClose, appointment }) {
  const { updateAppointment, currentUser } = useSchedule();

  const [error, setError] = useState("");

  const patients = mockUsers.filter(
    (u) => u.role === "paciente" && u.nutritionistId === currentUser?.id,
  );

  const [form, setForm] = useState({
    patientId: "",
    date: "",
    time: "",
    duration: 30,
    type: "Primeira Consulta",
  });

  // 🔥 preenche o form ao abrir
  useEffect(() => {
    if (appointment) {
      setForm({
        patientId: appointment.patientId,
        date: appointment.date,
        time: appointment.time,
        duration: appointment.duration || 30,
        type: appointment.type,
      });
    }
  }, [appointment]);

  if (!open || !appointment) return null;

  const handleSubmit = () => {
    setError("");

    if (!form.patientId || !form.date || !form.time || !form.type) {
      setError("Preencha todos os campos");
      return;
    }

    const patient = patients.find((p) => p.id === form.patientId);

    const result = updateAppointment({
      ...appointment,
      ...form,
      patientName: patient?.name,
    });

    if (result?.error) {
      setError(result.error);
      return;
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#0B1220] p-6 rounded-xl w-full max-w-md">
        <h2 className="mb-4 text-lg font-semibold">Editar consulta</h2>

        <div className="space-y-3">
          {/* PACIENTE */}
          <select
            value={form.patientId}
            onChange={(e) => setForm({ ...form, patientId: e.target.value })}
            className="w-full p-2 rounded-lg border"
          >
            <option value="">Selecione paciente</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          {/* DATA */}
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full p-2 rounded-lg border"
          />

          {/* 🔥 HORA (CONTROLADA) */}
          <select
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="w-full p-2 rounded-lg border"
          >
            <option value="">Selecione horário</option>

            {availableHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>

          {/* TIPO */}
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full p-2 rounded-lg border"
          >
            <option value="Primeira Consulta">Primeira Consulta</option>
            <option value="Consulta de Retorno">Consulta de Retorno</option>
            <option value="Consulta de Acompanhamento">
              Consulta de Acompanhamento
            </option>
          </select>

          {/* ERRO */}
          {error && <p className="text-sm text-red-500">{error}</p>}

          {/* BOTÕES */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 dark:bg-gray-700 py-2 rounded-lg text-sm"
            >
              Cancelar
            </button>

            <button
              onClick={handleSubmit}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm transition"
            >
              Salvar alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
