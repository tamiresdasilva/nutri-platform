import { Mail } from "lucide-react";
import nutricionistaImg from "../assets/images/nutricionista.jpg";

export default function About() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Title */}
          <h2 className="text-4xl font-semibold text-gray-900" id="sobre">
            Sobre a Plataforma
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Criada em 2026, a NomeApp tem como missão facilitar a rotina de
            nutricionistas e melhorar a experiência dos pacientes. Nossa
            plataforma oferece recursos completos para acompanhamento
            nutricional, registro de refeições e prescrição de planos
            personalizados com cálculos automatizados, tornando a rotina do
            profissional mais prática e organizada.
          </p>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            A NomeApp também facilita a comunicação com os pacientes, incentiva
            a adesão aos planos e torna o cuidado com a alimentação mais
            acessível e intuitivo. Estamos comprometidos em transformar a forma
            como nutricionistas e pacientes se conectam e cuidam da saúde
            através da tecnologia. Junte-se a nós nessa jornada de inovação
            digital no âmbito nutricional!
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Image */}
          <img
            src={nutricionistaImg} // <-- coloque aqui o caminho da sua imagem
            alt="Nutricionista utilizando plataforma"
            className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)]  w-full max-w-[420px] h-[290px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-10 left-6 bg-white border border-gray-100 shadow-lg rounded-xl px-5 py-3 flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-sm">
              🥗
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900">
                Nutrição 100% Digital
              </p>
              <p className="text-xs text-gray-500">
                Conectando saúde e tecnologia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
