import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../features/auth/pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import PatientDashboard from "../features/patient/pages/PatientDashboard";
import RequestAccess from "../features/auth/pages/RequestAccess";
import NutriDashboard from "../features/nutritionist/pages/NutriDashboard";
import NutriPatients from "../features/nutritionist/pages/NutriPatients";
import NutriSchedule from "../features/nutritionist/pages/NutriSchedule";
import NutriPlans from "../features/nutritionist/pages/NutriPlans";
import NutriForms from "../features/nutritionist/pages/NutriForms";
import NutriPublicProfile from "../features/nutritionist/pages/NutriPublicProfile";
import NutriPrescriptions from "../features/nutritionist/pages/NutriPrescriptions";
import NutriReports from "../features/nutritionist/pages/NutriReports";
import NutriChat from "../features/nutritionist/pages/NutriChat";
import NutriSupport from "../features/nutritionist/pages/NutriSupport";
import NutriNotifications from "../features/nutritionist/pages/NutriNotifications";
import NutriSettings from "../features/nutritionist/pages/NutriSettings";

export default function AppRoutes() {
  return (
    <Routes>
      {/* públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/request-access" element={<RequestAccess />} />

      {/* privadas */}
      <Route
        path="/paciente"
        element={
          <ProtectedRoute role="paciente">
            <PatientDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/pacientes"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriPatients />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/agenda"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriSchedule />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/planos-alimentares"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriPlans />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/formularios"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriForms />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/prescricoes"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriPrescriptions />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/relatorios"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriReports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/chat"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriChat />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/notificacoes"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriNotifications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/perfil"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriPublicProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/ajuda"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriSupport />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutri/config"
        element={
          <ProtectedRoute role="nutricionista">
            <NutriSettings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
