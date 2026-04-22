import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full bg-[#FAF7F2] dark:bg-[#020617] py-24 overflow-hidden"
    >
      {/* Efeito verde (lado direito) */}
      <div
        className="
    absolute 
    bottom-0 left-0 w-full h-[50%]
    md:top-0 md:right-0 md:left-auto md:bottom-auto md:h-full md:w-[40%]
    bg-[radial-gradient(circle_at_bottom,#86EFAC,transparent_70%)]
    md:bg-[radial-gradient(circle_at_right,#86EFAC,transparent_70%)]
    opacity-50 md:opacity-60
  "
      ></div>

      <div className="max-w-300 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div>
          
          <Reveal>
          {/* Title */}
          <h1
            id="hero-title"
            className="text-[36px] md:text-[48px] leading-[1.1] font-bold text-[#111827] dark:text-white"
          >
            Centralize a gestão dos seus{" "}
            <span className="text-[#22C55E]">pacientes em um só lugar</span>
          </h1>
          </Reveal>


          <Reveal delay={0.1}>
          {/* Description */}
          <p className="text-[#6B7280] dark:text-gray-400 mt-6 text-lg leading-relaxed max-w-xl">
            Plataforma web para nutricionistas e seus pacientes. Crie planos
            alimentares personalizados com cálculos automáticos, acompanhe a
            evolução dos pacientes e automatize seus agendamentos e atendimentos
            em um só lugar.
          </p>
          </Reveal>

          <Reveal delay={0.2}>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#sobre"
              aria-label="Ir para a seção sobre a plataforma"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-xl font-semibold shadow-md cursor-pointer transition w-full sm:w-auto text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2"
            >
              Quero saber mais →
            </a>
            

            <button
              onClick={() => navigate("/login")}
              aria-label="Acessar área de login"
              className="border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-xl font-semibold text-[#111827] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition w-full sm:w-auto text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2"
            >
              Já sou convidado
            </button>
          </div>
          </Reveal>

          <Reveal delay={0.3}>
          {/* Info */}
          <div
            role="note"
            className="flex gap-6 mt-6 text-sm text-gray-500 dark:text-gray-400"
          >
            <span className="flex items-center gap-2">
              <Lock
                size={16}
                className="text-[#F59E0B] dark:text-[#D97706]"
                aria-hidden="true"
              />
              Plataforma exclusiva no momento apenas para nutricionistas
              convidados
            </span>
          </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.3}>
        {/* RIGHT */}
        <div
          aria-label="Prévia do painel do nutricionista"
          className="bg-white dark:bg-[#0B1220] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 border border-gray-100 dark:border-gray-800 transition-transform duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none hover:scale-[1.02]"
        >
          <div className="mb-4">
            <h3 className="font-semibold text-[#111827] dark:text-white">
              Visão Geral
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bom dia, Dra. Ana
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F3F4F6] dark:bg-[#020617] p-4 rounded-xl">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pacientes
              </p>
              <h2 className="text-xl font-bold text-[#111827] dark:text-white">
                124
              </h2>
            </div>

            <div className="bg-[#F3F4F6] dark:bg-[#020617] p-4 rounded-xl">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Consultas hoje
              </p>
              <h2 className="text-xl font-bold text-[#111827] dark:text-white">
                8
              </h2>
            </div>
          </div>
          

          <div className="mt-6 h-24 bg-[#22C55E] rounded-lg opacity-80"></div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
