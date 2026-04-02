import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../features/auth/pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import PatientDashboard from "../features/patient/pages/PatientDashboard";
import NutritionistDashboard from "../features/nutritionist/pages/NutritionistDashboard";
import RequestAccess from "../features/auth/pages/RequestAccess";

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
            <NutritionistDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
