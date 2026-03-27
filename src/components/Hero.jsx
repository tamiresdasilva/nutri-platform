export default function Hero() {
  return (
    <section className="relative w-full bg-[#FAF7F2] py-24 overflow-hidden">
      {/* Efeito verde (lado direito) */}
      <div className="absolute right-0 top-0 h-full w-[40%] bg-[radial-gradient(circle_at_right,#86EFAC,transparent_70%)] opacity-60"></div>

      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div>
          {/* Title */}
          <h1 className="text-[48px] leading-[1.1] font-bold text-[#111827]">
            Centralize a gestão dos seus{" "}
            <span className="text-[#22C55E]">pacientes em um só lugar</span>
          </h1>

          {/* Description */}
          <p className="text-[#6B7280] mt-6 text-lg leading-relaxed max-w-xl">
            Plataforma web para nutricionistas e seus pacientes. Crie planos
            alimentares personalizados com cálculos automáticos, acompanhe a
            evolução dos pacientes e automatize seus agendamentos e atendimentos
            em um só lugar.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
              id="como-participar"
            >
              Quero participar →
            </button>

            <button className="border border-gray-200 px-6 py-3 rounded-xl font-semibold text-[#111827] hover:bg-gray-50 transition">
              Já sou convidado
            </button>
          </div>

          {/* Info */}
          <div className="flex gap-6 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              🔒 Plataforma exclusiva no momento apenas para nutricionistas
              convidados
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 border border-gray-100">
          <div className="mb-4">
            <h3 className="font-semibold text-[#111827]">Visão Geral</h3>
            <p className="text-sm text-gray-500">Bom dia, Dra. Ana</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F3F4F6] p-4 rounded-xl">
              <p className="text-sm text-gray-500">Pacientes</p>
              <h2 className="text-xl font-bold text-[#111827]">124</h2>
            </div>

            <div className="bg-[#F3F4F6] p-4 rounded-xl">
              <p className="text-sm text-gray-500">Consultas hoje</p>
              <h2 className="text-xl font-bold text-[#111827]">8</h2>
            </div>
          </div>

          <div className="mt-6 h-24 bg-[#22C55E] rounded-lg opacity-80"></div>
        </div>
      </div>
    </section>
  );
}
