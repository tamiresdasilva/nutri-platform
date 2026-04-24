import { createContext, useContext, useEffect, useState } from "react";
import { mockAppointments } from "../mocks/appointments";
import { useAuth } from "./AuthContext";

const ScheduleContext = createContext();

function toMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function ScheduleProvider({ children }) {
  const { auth } = useAuth();
  const currentUser = auth?.user;

  const [appointments, setAppointments] = useState(() => {
    const stored = localStorage.getItem("schedule_appointments");
    return stored ? JSON.parse(stored) : mockAppointments;
  });

  // 🔄 persistência
  useEffect(() => {
    localStorage.setItem("schedule_appointments", JSON.stringify(appointments));
  }, [appointments]);

  // 🔄 sync entre abas
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "schedule_appointments" && e.newValue) {
        setAppointments(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  // 🔥 VERIFICA CONFLITO (IGNORA O PRÓPRIO ID AO EDITAR)
  function hasConflict(newAppointment) {
    return appointments.some((a) => {
      if (a.id === newAppointment.id) return false;

      if (a.date !== newAppointment.date) return false;

      if (a.nutritionistId !== newAppointment.nutritionistId) return false;

      const startA = toMinutes(a.time);
      const endA = startA + (a.duration || 30);

      const startB = toMinutes(newAppointment.time);
      const endB = startB + (newAppointment.duration || 30);

      return startB < endA && endB > startA;
    });
  }

  // ➕ ADD
  function addAppointment(appointment) {
    if (hasConflict(appointment)) {
      return { error: "Horário já ocupado" };
    }

    setAppointments((prev) => [...prev, appointment]);
    return { success: true };
  }

  // ✏️ UPDATE
  function updateAppointment(updated) {
    if (hasConflict(updated)) {
      return { error: "Horário já ocupado" };
    }

    setAppointments((prev) =>
      prev.map((a) => (a.id === updated.id ? updated : a)),
    );

    return { success: true };
  }

  // 🗑️ DELETE
  function deleteAppointment(id) {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  }

  // 📅 FILTRO
  function getAppointmentsByDate(date) {
    if (!currentUser) return [];

    return appointments.filter((a) => {
      const sameDate = a.date === date;

      if (currentUser.role === "nutricionista") {
        return sameDate && a.nutritionistId === currentUser.id;
      }

      if (currentUser.role === "paciente") {
        return sameDate && a.patientId === currentUser.id;
      }

      return false;
    });
  }

  return (
    <ScheduleContext.Provider
      value={{
        appointments,
        addAppointment,
        updateAppointment, // ✅ NOVO
        deleteAppointment,
        getAppointmentsByDate,
        currentUser,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule() {
  return useContext(ScheduleContext);
}
