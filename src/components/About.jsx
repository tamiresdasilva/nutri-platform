import { useNavigate } from "react-router-dom";
import { Salad, User } from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="py-28 bg-[#FAF7F2] dark:bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2
          id="about-title"
          className="text-4xl font-semibold text-gray-900 dark:text-white"
        >
          Sobre a nossa plataforma
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          A NomeApp foi criada em 2026 com o objetivo de facilitar a rotina de
          nutricionistas e melhorar a experiência dos pacientes. Atualmente, a
          plataforma está em fase inicial e o acesso será liberado de forma
          gradual por convite.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mt-14 text-left" role="list">
          {/* NUTRICIONISTA */}
          <div
            role="listitem"
            className="relative bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden transition-all duration-300 
            hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
          >
            {/* Gradient corner */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#F59E0B]/30 to-transparent rounded-bl-full"
            />

            <div className="flex items-start gap-3 relative z-10">
              <div className="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 p-2 rounded-lg">
                <Salad size={18} aria-hidden="true" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Sou nutricionista
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">
                  Caso você ainda não tenha recebido um convite, é possível
                  entrar na lista de espera, basta preencher o formulário de
                  solicitação de acesso.
                </p>
              </div>
            </div>
          </div>

          {/* PACIENTE */}
          <div
            role="listitem"
            className="relative bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden transition-all duration-300 
            hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
          >
            {/* Gradient corner */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#22C55E]/30 to-transparent rounded-bl-full"
            />

            <div className="flex items-start gap-3 relative z-10">
              <div className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 p-2 rounded-lg">
                <User size={18} aria-hidden="true" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Sou paciente
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">
                  O acesso é disponibilizado diretamente pelo seu nutricionista
                  responsável. Caso ainda não tenha recebido suas credenciais,
                  entre em contato com o profissional responsável pelo seu
                  acompanhamento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="mt-20 bg-linear-to-r from-[#0F172A] to-[#1E293B] rounded-2xl p-10 text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Pronto para evoluir seus atendimentos?
            </h3>

            <p className="text-gray-300 mt-2 max-w-lg">
              Solicite acesso antecipado e comece a transformar a forma como
              você gerencia seus pacientes, ou aguarde a liberação completa da
              plataforma.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => navigate("/request-access")}
              className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-xl font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 cursor-pointer"
            >
              Solicitar acesso
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full sm:w-auto border border-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 cursor-pointer"
            >
              Já tenho acesso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
