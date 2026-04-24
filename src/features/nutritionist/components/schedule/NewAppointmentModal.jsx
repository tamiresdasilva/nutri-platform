import { useState } from "react";
import { useSchedule } from "../../../../context/ScheduleContext";
import { mockUsers } from "../../../../mocks/users";

export default function NewAppointmentModal({ open, onClose }) {
  const { addAppointment, currentUser } = useSchedule();

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

  if (!open) return null;

  const handleSubmit = () => {
    setError("");

    if (!form.patientId || !form.date || !form.time || !form.type) {
      setError("Preencha todos os campos");
      return;
    }

    const patient = patients.find((p) => p.id === form.patientId);

    const result = addAppointment({
      id: crypto.randomUUID(),
      ...form,
      patientName: patient?.name,
      nutritionistId: currentUser.id,
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
        <h2 className="mb-4 text-lg font-semibold">Nova consulta</h2>

        <div className="space-y-3">
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

          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full p-2 rounded-lg border"
          />

          <input
            type="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="w-full p-2 rounded-lg border"
          />

          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full p-2 rounded-lg border"
          >
            <option>Primeira Consulta</option>
            <option>Consulta de Retorno</option>
            <option>Consulta de Acompanhamento</option>
          </select>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
