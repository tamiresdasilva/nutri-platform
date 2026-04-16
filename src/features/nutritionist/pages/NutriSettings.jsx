import NutriLayout from "../components/layout/NutriLayout";

import AccountSection from "../components/settings/AccountSection";
import PreferencesSection from "../components/settings/PreferencesSection";
import AccessibilitySection from "../components/settings/AccessibilitySection";
import ThemeSection from "../components/settings/ThemeSection";
import DangerZone from "../components/settings/DangerZone";

export default function NutriSettings() {
  return (
    <NutriLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Configurações
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Gerencie suas informações pessoais, preferências e acessibilidade
          </p>
        </div>

        <AccountSection />
        <PreferencesSection />
        <AccessibilitySection />
        <ThemeSection />
        <DangerZone />
      </div>
    </NutriLayout>
  );
}
