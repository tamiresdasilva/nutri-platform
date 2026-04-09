import PatientLayout from "../components/PatientLayout";

export default function PatientDashboard() {
  return (
    <PatientLayout>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Olá, João Silva! 👋
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-1">
        Bem-vindo ao seu painel de acompanhamento nutricional!
      </p>
    </PatientLayout>
  );
}
