import NutriLayout from "../components/layout/NutriLayout";

export default function NutriDashboard() {
  return (
    <NutriLayout>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Bem-vinda, Dra. Ana Silva! 👋
      </h1>

      <p className="text-gray-500 dark:text-gray-400 mt-1">
        Visão geral do seu consultório nutricional
      </p>
    </NutriLayout>
  );
}
