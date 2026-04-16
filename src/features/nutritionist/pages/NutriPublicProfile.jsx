import NutriLayout from "../components/layout/NutriLayout";
import PublicProfileForm from "../components/publicProfile/PublicProfileForm";

export default function NutriPublicProfile() {
  return (
    <NutriLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Perfil Público
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Configure como seu perfil será exibido para pacientes
          </p>
        </div>

        <PublicProfileForm />
      </div>
    </NutriLayout>
  );
}
