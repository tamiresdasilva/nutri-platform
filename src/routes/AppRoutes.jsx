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
import PatientChat from "../features/patient/pages/PatientChat";
import PatientSchedule from "../features/patient/pages/PatientSchedule";
import PatientForms from "../features/patient/pages/PatientForms";
import PatientProgress from "../features/patient/pages/PatientProgress";
import PatientDiary from "../features/patient/pages/PatientDiary";
import PatientPrescriptions from "../features/patient/pages/PatientPrescriptions";
import PatientPlans from "../features/patient/pages/PatientPlans";
import PatientSettings from "../features/patient/pages/PatientSettings";
import PatientSupport from "../features/patient/pages/PatientSupport";
import PatientNotifications from "../features/patient/pages/PatientNotifications";
import ForgotPassword from "../features/auth/pages/ForgotPassword";

export default function AppRoutes() {
  return (
    <Routes>
      {/* públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
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
        path="/paciente/planos"
        element={
          <ProtectedRoute role="paciente">
            <PatientPlans />
          </ProtectedRoute>
        }
      />

      <Route
        path="/paciente/prescricoes"
        element={
          <ProtectedRoute role="paciente">
            <PatientPrescriptions />
          </ProtectedRoute>
        }
      />

      <Route
        path="/paciente/diario"
        element={
          <ProtectedRoute role="paciente">
            <PatientDiary />
          </ProtectedRoute>
        }
      />

      <Route
        path="/paciente/evolucao"
        element={
          <ProtectedRoute role="paciente">
            <PatientProgress />
          </ProtectedRoute>
        }
      />

      <Route
        path="/paciente/formularios"
        element={
          <ProtectedRoute role="paciente">
            <PatientForms />
          </ProtectedRoute>
        }
      />

      <Route
        path="/paciente/agenda"
        element={
          <ProtectedRoute role="paciente">
            <PatientSchedule />
          </ProtectedRoute>
        }
      />

      <Route
        path="/paciente/chat"
        element={
          <ProtectedRoute role="paciente">
            <PatientChat />
          </ProtectedRoute>
        }
      />

      <Route
        path="/paciente/notificacoes"
        element={
          <ProtectedRoute role="paciente">
            <PatientNotifications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/paciente/ajuda"
        element={
          <ProtectedRoute role="paciente">
            <PatientSupport />
          </ProtectedRoute>
        }
      />

      <Route
        path="/paciente/config"
        element={
          <ProtectedRoute role="paciente">
            <PatientSettings />
          </ProtectedRoute>
        }
      />

      {/* área do nutricionista */}
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
