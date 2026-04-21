import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../../context/useTheme";

function Toggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`w-11 h-6 rounded-full transition ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full transform transition ${
          enabled ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export default function ThemeSection() {
  const { dark, toggleTheme } = useTheme();

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Tema
      </h2>

      <div className="bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-5">
        <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#020617] border border-white dark:border-gray-800">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <Moon size={18} />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Modo Escuro
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Ativar ou desativar tema claro/escuro
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <Sun size={16} className="text-gray-400 dark:text-gray-500" />

            <Toggle enabled={dark} onToggle={toggleTheme} />

            <Moon size={16} className="text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
