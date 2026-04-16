import { useState } from "react";
import {
  UserPlus,
  FileText,
  Utensils,
  LineChart,
  MessageCircle,
  LogIn,
  Camera,
  Bell,
  Calendar,
} from "lucide-react";

export default function HowItWorks() {
  const [mode, setMode] = useState("nutricionista");

  const nutricionistaSteps = [
    {
      title: "Cadastre seus Pacientes",
      desc: "Cadastre seus pacientes ou compartilhe um link para cadastramento.",
      icon: UserPlus,
    },
    {
      title: "Organize o Prontuário",
      desc: "Registre dados clínicos, histórico e avaliações em um só lugar.",
      icon: FileText,
    },
    {
      title: "Crie Planos Alimentares",
      desc: "Monte planos personalizados e prescreva suplementos com facilidade.",
      icon: Utensils,
    },
    {
      title: "Acompanhe a Evolução",
      desc: "Visualize gráficos, fotos e progresso dos pacientes.",
      icon: LineChart,
    },
    {
      title: "Atendimento Ágil",
      desc: "Agende consultas e converse via WhatsApp ou chat.",
      icon: MessageCircle,
    },
  ];

  const pacienteSteps = [
    {
      title: "Acesse o Portal",
      desc: "Entre no seu ambiente com todas as informações do acompanhamento.",
      icon: LogIn,
    },
    {
      title: "Registre Refeições",
      desc: "Tire fotos e adicione descrições das refeições.",
      icon: Camera,
    },
    {
      title: "Receba Lembretes",
      desc: "Notificações de consultas, refeições e hidratação.",
      icon: Bell,
    },
    {
      title: "Acompanhe seu Progresso",
      desc: "Veja gráficos e evolução ao longo do tempo.",
      icon: LineChart,
    },
    {
      title: "Agende e Converse",
      desc: "Marque consultas e fale com seu nutricionista.",
      icon: Calendar,
    },
  ];

  const steps = mode === "nutricionista" ? nutricionistaSteps : pacienteSteps;
  const isNutri = mode === "nutricionista";

  return (
    <section
      aria-labelledby="how-it-works-title"
      className="py-28 bg-white dark:bg-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Toggle */}
        <div
          role="tablist"
          aria-label="Alternar visualização"
          className="inline-flex bg-gray-100 dark:bg-[#111827] p-1 rounded-xl mb-16"
        >
          <button
            role="tab"
            aria-selected={isNutri}
            onClick={() => setMode("nutricionista")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
              isNutri
                ? "bg-orange-500 text-white shadow-sm"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            Para o Nutricionista
          </button>

          <button
            role="tab"
            aria-selected={!isNutri}
            onClick={() => setMode("paciente")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 ${
              !isNutri
                ? "bg-green-500 text-white shadow-sm"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            Para o Paciente
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha (SÓ desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-[#1E2939] -translate-x-1/2"></div>

          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className={`
                    flex flex-col items-center text-center
                    md:flex-row md:items-center md:text-left
                    ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                  `}
                >
                  {/* Card */}
                  <div className="w-full md:w-1/2 px-0 md:px-6">
                    <div className="bg-white dark:bg-[#111827] p-7 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-left transition hover:shadow-md hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                            isNutri
                              ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                              : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          }`}
                        >
                          <Icon size={18} aria-hidden="true" />
                        </div>

                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                          {index + 1}. {step.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Número (SÓ desktop) */}
                  <div
                    aria-hidden="true"
                    className={`hidden md:flex w-12 h-12 items-center justify-center rounded-full font-semibold text-sm z-10 shadow-sm border-4 border-white dark:border-[#111827] ${
                      isNutri
                        ? "bg-orange-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Espaço (SÓ desktop) */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
