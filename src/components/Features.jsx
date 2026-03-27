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
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Planos Personalizados",
      desc: "Crie planos alimentares personalizados para cada paciente com cálculo automático de calorias e macronutrientes.",
      icon: ClipboardList,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Banco de Alimentos e Receitas",
      desc: "Tenha acesso a uma base de dados completa de alimentos e cadastre suas próprias receitas.",
      icon: Apple,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Portal do Paciente",
      desc: "Ofereça um ambiente dedicado para seus pacientes acessarem informações, planos alimentares e comunicarem-se com você.",
      icon: User,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Registro Alimentar com Imagens",
      desc: "Permita que pacientes registrem refeições com fotos, descrições e observações.",
      icon: Camera,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Comunicação e Atendimento",
      desc: "Converse com pacientes via chat e automatize atendimentos pelo WhatsApp.",
      icon: MessageCircle,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Agendamentos e Notificações",
      desc: "Gerencie consultas com integração ao Google Calendar.",
      icon: Calendar,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Prescrições de Suplementos",
      desc: "Crie prescrições com base nas necessidades dos pacientes.",
      icon: Pill,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Relatórios Automatizados",
      desc: "Gere relatórios em PDF com dados detalhados.",
      icon: FileText,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Acompanhamento de Evolução",
      desc: "Monitore progresso com gráficos e histórico.",
      icon: LineChart,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Formulários de Acompanhamento",
      desc: "Crie formulários personalizados para seus pacientes.",
      icon: ClipboardCheck,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Página Profissional",
      desc: "Crie sua página online com portfólio e contatos.",
      icon: Globe,
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-semibold text-gray-900"
          id="funcionalidades"
        >
          Todas as funcionalidades que você precisa
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          Nossa plataforma foi desenhada pensando na rotina do nutricionista,
          com ferramentas práticas que economizam seu tempo e facilitam a
          comunicação e a adesão dos pacientes.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-[#FAF7F2] p-7 rounded-2xl text-left 
                transition-all duration-300 
                hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-[15px] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
