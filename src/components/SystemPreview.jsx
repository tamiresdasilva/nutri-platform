export default function SystemPreview() {
  return (
    <section className="py-24 bg-[#FAF7F2] dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-block bg-orange-100 text-orange-600 dark:bg-[#3A2A12] dark:text-[#F59E0B] px-4 py-1.5 rounded-full text-sm mb-4">
          Visão Geral do Sistema
        </span>

        {/* Title */}
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Experiência focada na produtividade
        </h2>

        {/* Description */}
        <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Nossa interface limpa e intuitiva foi projetada para que você acesse
          as informações mais importantes de forma rápida, sem cliques
          desnecessários.
        </p>

        {/* Dashboard */}
        <div className="mt-16 bg-white dark:bg-[#0B1220] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg p-6 text-left">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-md font-bold">
                N
              </div>
              <span className="font-semibold text-gray-800 dark:text-white">
                NomeApp
              </span>
            </div>

            <input
              placeholder="Buscar paciente, dieta..."
              className="bg-gray-50 dark:bg-[#020617] px-4 py-2 rounded-lg w-1/3 text-sm outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
            />

            <div className="w-9 h-9 bg-orange-400 text-white flex items-center justify-center rounded-full text-sm font-medium">
              AN
            </div>
          </div>

          <div className="flex mt-6 gap-6">
            {/* Sidebar */}
            <div className="w-1/4 space-y-2">
              <div className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-4 py-2.5 rounded-lg font-medium">
                Pacientes
              </div>

              <div className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                Agenda
              </div>
              <div className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                Modelos de Dieta
              </div>
              <div className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                Alimentos
              </div>

              <div className="pt-10 text-gray-400 dark:text-gray-500 text-sm">
                Configurações
              </div>
              <div className="text-red-500 text-sm">Sair</div>
            </div>

            {/* Main */}
            <div className="w-3/4 space-y-6">
              {/* Chart */}
              <div className="bg-[#FAF7F2] dark:bg-[#020617] p-5 rounded-xl h-44 flex items-end gap-3">
                {[40, 60, 50, 70, 55, 80].map((h, i) => (
                  <div
                    key={i}
                    className="bg-green-500 rounded-md w-6 transition-all duration-300 hover:opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* List */}
              <div className="bg-[#FAF7F2] dark:bg-[#020617] p-5 rounded-xl">
                <div className="flex justify-between mb-4 items-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Próximos Atendimentos
                  </h3>
                  <span className="text-orange-500 text-sm cursor-pointer hover:underline">
                    Ver todos
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  {[
                    "Mariana Souza",
                    "Carlos Mendes",
                    "Luciana Reis",
                    "João Santos",
                  ].map((name, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-white dark:bg-[#0B1220] p-3.5 rounded-lg transition hover:shadow-sm border border-transparent dark:border-gray-800"
                    >
                      <span className="text-gray-700 dark:text-gray-300">
                        {name}
                      </span>
                      <span className="text-green-600 text-xs font-medium">
                        ATIVO
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
