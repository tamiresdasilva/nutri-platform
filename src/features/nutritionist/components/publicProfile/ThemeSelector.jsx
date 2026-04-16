import themesConfig from "../publicProfilePreview/ThemeConfig";

const themes = [
  { id: "clean", name: "Clean Profissional" },
  { id: "natural", name: "Natural & Saudável" },
  { id: "pastel", name: "Pastel Delicado" },
  { id: "vibrant", name: "Vibrante Energético" },
  { id: "dark", name: "Dark Moderno" },
  { id: "fitness", name: "Fitness Forte" },
];

export default function ThemeSelector({ selected, onSelect }) {
  return (
    <div className="bg-white dark:bg-[#0B1220] rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Tema</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {themes.map((theme) => {
          const config = themesConfig[theme.id];

          return (
            <button
              type="button" // 🔥 ESSENCIAL
              key={theme.id}
              onClick={() => onSelect(theme.id)}
              className={`rounded-xl overflow-hidden transition border
              ${
                selected === theme.id
                  ? "ring-2 ring-green-500 border-transparent"
                  : "border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              }
              `}
            >
              {/* PREVIEW REAL DO TEMA */}
              <div
                className={`h-32 p-3 flex flex-col justify-between ${config.background}`}
              >
                {/* HEADER */}
                <div
                  className={`h-3 w-1/2 rounded ${config.primary} opacity-80`}
                />

                {/* CONTEÚDO */}
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${config.primary}`} />

                  <div className="flex-1 space-y-1">
                    <div className={`h-2 rounded ${config.text} opacity-60`} />
                    <div
                      className={`h-2 rounded ${config.text} opacity-40 w-3/4`}
                    />
                  </div>
                </div>

                {/* BOTÃO */}
                <div className={`h-6 w-24 rounded ${config.primary}`} />
              </div>

              <div className="p-2 text-sm text-center text-gray-700 dark:text-gray-300">
                {theme.name}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
