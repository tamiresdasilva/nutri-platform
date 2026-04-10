import {
  Users,
  ClipboardList,
  Apple,
  User,
  Camera,
  MessageCircle,
  Calendar,
  Pill,
  FileText,
  LineChart,
  ClipboardCheck,
  Globe,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Gestão de Pacientes",
      desc: "Centralize prontuários, anamneses, exames e histórico completo.",
      icon: Users,
      color: "bg-blue-100 text-blue-600 dark:bg-[#13233D] dark:text-[#2B7FFF]",
    },
    {
      title: "Planos Personalizados",
      desc: "Crie planos alimentares personalizados para cada paciente com cálculo automático de calorias e macronutrientes.",
      icon: ClipboardList,
      color:
        "bg-green-100 text-green-600 dark:bg-[#0F2A2B] dark:text-[#00C950]",
    },
    {
      title: "Banco de Alimentos e Receitas",
      desc: "Tenha acesso a uma base de dados completa de alimentos e cadastre suas próprias receitas.",
      icon: Apple,
      color:
        "bg-orange-100 text-orange-600 dark:bg-[#282523] dark:text-[#FE9A00]",
    },
    {
      title: "Portal do Paciente",
      desc: "Ofereça um ambiente dedicado para seus pacientes acessarem informações, planos alimentares e comunicarem-se com você.",
      icon: User,
      color:
        "bg-purple-100 text-purple-600 dark:bg-[#201D3D] dark:text-[#AD46FF]",
    },
    {
      title: "Registro Alimentar com Imagens",
      desc: "Permita que pacientes registrem refeições com fotos, descrições e observações.",
      icon: Camera,
      color: "bg-pink-100 text-pink-600 dark:bg-[#281B32] dark:text-[#F6339A]",
    },
    {
      title: "Comunicação e Atendimento",
      desc: "Converse com pacientes via chat e automatize atendimentos pelo WhatsApp.",
      icon: MessageCircle,
      color:
        "bg-indigo-100 text-indigo-600 dark:bg-[#191F3D] dark:text-[#615FFF]",
    },
    {
      title: "Agendamentos e Notificações",
      desc: "Gerencie consultas com integração ao Google Calendar.",
      icon: Calendar,
      color: "bg-blue-100 text-blue-600 dark:bg-[#13233D] dark:text-[#2B7FFF]",
    },
    {
      title: "Prescrições de Suplementos",
      desc: "Crie prescrições com base nas necessidades dos pacientes.",
      icon: Pill,
      color:
        "bg-green-100 text-green-600 dark:bg-[#0F2A2B] dark:text-[#00C950]",
    },
    {
      title: "Relatórios Automatizados",
      desc: "Gere relatórios em PDF com dados detalhados.",
      icon: FileText,
      color:
        "bg-orange-100 text-orange-600 dark:bg-[#282523] dark:text-[#FE9A00]",
    },
    {
      title: "Acompanhamento de Evolução",
      desc: "Monitore progresso com gráficos e histórico.",
      icon: LineChart,
      color:
        "bg-purple-100 text-purple-600 dark:bg-[#201D3D] dark:text-[#AD46FF]",
    },
    {
      title: "Formulários de Acompanhamento",
      desc: "Crie formulários personalizados para seus pacientes.",
      icon: ClipboardCheck,
      color: "bg-pink-100 text-pink-600 dark:bg-[#281B32] dark:text-[#F6339A]",
    },
    {
      title: "Página Profissional",
      desc: "Crie sua página online com portfólio e contatos.",
      icon: Globe,
      color:
        "bg-indigo-100 text-indigo-600 dark:bg-[#191F3D] dark:text-[#615FFF]",
    },
  ];

  return (
    <section
      aria-labelledby="features-title"
      className="py-24 bg-white dark:bg-[#0F172A]"
    >
      <div id="funcionalidades" className="max-w-7xl mx-auto px-6 text-center">
        <h2
          id="features-title"
          className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white"
        >
          Todas as funcionalidades que você precisa
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Nossa plataforma foi desenhada pensando na rotina do nutricionista,
          com ferramentas práticas que economizam seu tempo e facilitam a
          comunicação e a adesão dos pacientes.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <li
                key={i}
                role="article"
                className="bg-[#FAF7F2] dark:bg-[#111827] p-7 rounded-2xl text-left 
                transition-all duration-300 
                hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]
                motion-reduce:transform-none motion-reduce:transition-none
                border border-transparent dark:border-[#1E2939]"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={22} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-[15px] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
