import PatientLayout from "../components/layout/PatientLayout";
import { useAuth } from "../../../context/AuthContext";

export default function PatientDashboard() {
  const { auth } = useAuth();
  const user = auth?.user;

  return (
    <PatientLayout>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Olá, {user?.name || "Usuário"}! 👋
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-1">
        Bem-vindo ao seu painel de acompanhamento nutricional!
      </p>
    </PatientLayout>
  );
}
