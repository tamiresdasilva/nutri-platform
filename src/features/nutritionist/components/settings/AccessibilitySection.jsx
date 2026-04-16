import { useState } from "react";
import { Eye, Type, Sparkles } from "lucide-react";

function Toggle({ enabled, setEnabled }) {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
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

export default function AccessibilitySection() {
  const [fontSize, setFontSize] = useState("medium");
  const [contrast, setContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  function decreaseFont() {
    if (fontSize === "large") setFontSize("medium");
    else if (fontSize === "medium") setFontSize("small");
  }

  function increaseFont() {
    if (fontSize === "small") setFontSize("medium");
    else if (fontSize === "medium") setFontSize("large");
  }

  function getLabel(size) {
    if (size === "small") return "Pequeno";
    if (size === "medium") return "Médio";
    return "Grande";
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Acessibilidade
      </h2>

      <div className="bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
        {/* ALTO CONTRASTE */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#020617] border border-white dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <Eye size={18} />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Modo Alto Contraste
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Aumenta o contraste para melhor visibilidade
              </p>
            </div>
          </div>

          <Toggle enabled={contrast} setEnabled={setContrast} />
        </div>

        {/* TAMANHO FONTE */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#020617] border border-white dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">
              <Type size={18} />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Tamanho da Fonte
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Ajuste o tamanho do texto para sua preferência
              </p>
            </div>
          </div>

          {/* CONTROLE */}
          <div className="flex items-center gap-2 bg-white dark:bg-[#0B1220] border border-gray-200 dark:border-gray-700 rounded-lg px-2 py-1">
            <button
              onClick={decreaseFont}
              className="px-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              –
            </button>

            <span className="text-sm text-gray-700 dark:text-gray-300 min-w-[60px] text-center">
              {getLabel(fontSize)}
            </span>

            <button
              onClick={increaseFont}
              className="px-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              +
            </button>
          </div>
        </div>

        {/* REDUZIR ANIMAÇÕES */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#020617] border border-white dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-600">
              <Sparkles size={18} />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Reduzir Animações
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Minimiza movimentos e transições da interface
              </p>
            </div>
          </div>

          <Toggle enabled={reducedMotion} setEnabled={setReducedMotion} />
        </div>
      </div>
    </section>
  );
}
