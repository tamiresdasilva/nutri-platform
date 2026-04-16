import { useState } from "react";
import { Calendar, MessageCircle, FileText, Bell } from "lucide-react";

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

export default function PreferencesSection() {
  const [prefs, setPrefs] = useState({
    consultas: true,
    chat: true,
    pacientes: true,
    agendamentos: false,
  });

  const items = [
    {
      key: "consultas",
      title: "Lembretes de Consultas",
      description: "Receba notificações sobre consultas agendadas",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
    },
    {
      key: "chat",
      title: "Mensagens do Chat",
      description: "Notificações de novas mensagens de pacientes",
      icon: MessageCircle,
      color: "bg-blue-100 text-blue-600",
    },
    {
      key: "pacientes",
      title: "Atualizações de Pacientes",
      description: "Alertas quando um paciente registrar dados",
      icon: FileText,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      key: "agendamentos",
      title: "Novos Agendamentos",
      description: "Notificações para novos pedidos de consulta",
      icon: Bell,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Preferências e Notificações
      </h2>

      <div className="bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.key}
              className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#020617] border border-white dark:border-gray-800"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                {/* ICON */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}
                >
                  <Icon size={18} />
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* TOGGLE */}
              <Toggle
                enabled={prefs[item.key]}
                setEnabled={(v) => setPrefs({ ...prefs, [item.key]: v })}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
