import { Salad, User, Mail, MessageSquare } from "lucide-react";

export default function HowToJoin() {
  return (
    <section className="py-28 bg-[#FAF7F2] dark:bg-[#020617]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2
          className="text-4xl font-semibold text-gray-900 dark:text-white"
          id="como-participar"
        >
          Como Participar
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          A plataforma está em fase inicial e o acesso é feito por convite. Caso
          você ainda não tenha recebido um convite, é possível entrar na lista
          de espera para futuras liberações.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Nutricionistas */}
          <div className="bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-left">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 p-2 rounded-lg">
                <Salad size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Para nutricionistas
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">
                  O acesso está restrito, neste momento, a nutricionistas
                  convidados.
                </p>
              </div>
            </div>
          </div>

          {/* Pacientes */}
          <div className="bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-left">
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 p-2 rounded-lg">
                <User size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Para pacientes
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">
                  O acesso é fornecido diretamente pelo seu nutricionista.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA text */}
        <p className="mt-14 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Entre na lista de espera e seja um dos primeiros a saber quando o
          acesso for liberado
        </p>

        {/* Form */}
        <div className="mt-10 bg-white dark:bg-[#0B1220] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-left max-w-xl mx-auto">
          <div className="space-y-5">
            {/* Nome */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                Nome Completo
              </label>
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-gray-50 dark:bg-[#020617] focus-within:ring-2 focus-within:ring-gray-200 dark:focus-within:ring-gray-700">
                <Mail size={16} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="bg-transparent outline-none w-full text-sm text-gray-900 dark:text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                E-mail Profissional
              </label>
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-gray-50 dark:bg-[#020617] focus-within:ring-2 focus-within:ring-gray-200 dark:focus-within:ring-gray-700">
                <Mail size={16} className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-transparent outline-none w-full text-sm text-gray-900 dark:text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                Mensagem
              </label>
              <div className="flex items-start border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-gray-50 dark:bg-[#020617] focus-within:ring-2 focus-within:ring-gray-200 dark:focus-within:ring-gray-700">
                <MessageSquare size={16} className="text-gray-400 mr-2 mt-1" />
                <textarea
                  placeholder="Escreva sua mensagem aqui..."
                  rows={4}
                  className="bg-transparent outline-none w-full text-sm resize-none text-gray-900 dark:text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white py-3 rounded-xl font-semibold transition shadow-md">
              Receber Novidades →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
