import { useNavigate } from "react-router-dom";
import nutricionistaImg from "../assets/images/nutricionista.jpg";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="py-28 bg-[#FAF7F2] dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Title */}
          <h2
            className="text-4xl font-semibold text-gray-900 dark:text-white"
            id="sobre"
          >
            Sobre a Plataforma
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg leading-relaxed">
            Criada em 2026, a NomeApp tem como missão facilitar a rotina de
            nutricionistas e melhorar a experiência dos pacientes. Nossa
            plataforma oferece recursos completos para acompanhamento
            nutricional, registro de refeições e prescrição de planos
            personalizados com cálculos automatizados.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg leading-relaxed">
            Atualmente, a plataforma está em fase inicial e o acesso está sendo
            liberado de forma gradual para nutricionistas convidados.
          </p>

          {/* Access Rules */}
          <div className="mt-6 space-y-3 text-sm">
            <p className="text-gray-700 dark:text-gray-300">
              🥗 <span className="font-medium">Para nutricionistas:</span> Caso
              você ainda não tenha recebido um convite, é possível entrar na
              lista de espera.
            </p>

            <p className="text-gray-700 dark:text-gray-400">
              👤 <span className="font-medium">Para pacientes:</span> o acesso é
              disponibilizado diretamente pelo seu nutricionista responsável.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button
              onClick={() => navigate("/request-access")}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
              Solicitar acesso →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src={nutricionistaImg}
            alt="Nutricionista utilizando plataforma"
            className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] w-full max-w-[420px] h-[290px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-10 left-6 bg-white dark:bg-[#0B1220] border border-gray-100 dark:border-gray-800 shadow-lg rounded-xl px-5 py-3 flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm">
              🥗
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Nutrição 100% Digital
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Conectando saúde e tecnologia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
