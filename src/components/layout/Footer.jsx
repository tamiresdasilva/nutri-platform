import { Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      role="contentinfo"
      className="bg-white dark:bg-[#0F172A] border-t border-gray-100 dark:border-gray-800 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* LOGO + DESC */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-xl font-bold">
                N
              </div>
              <span className="font-semibold text-gray-900 dark:text-white text-lg">
                NomeApp
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Simplificando a gestão de nutricionistas e conectando pacientes
              através da tecnologia.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">
              <button
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#0B1220] text-gray-600 dark:text-gray-400 hover:text-[#F59E0B] hover:bg-orange-50 dark:hover:bg-gray-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] cursor-pointer"
              >
                <FaInstagram size={14} />
              </button>

              <button
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#0B1220] text-gray-600 dark:text-gray-400 hover:text-[#F59E0B] hover:bg-orange-50 dark:hover:bg-gray-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] cursor-pointer"
              >
                <FaFacebookF size={14} />
              </button>

              <button
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#0B1220] text-gray-600 dark:text-gray-400 hover:text-[#F59E0B] hover:bg-orange-50 dark:hover:bg-gray-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] cursor-pointer"
              >
                <FaLinkedinIn size={14} />
              </button>
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              Navegação
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 dark:hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded"
                >
                  Início
                </a>
              </li>

              <li>
                <a
                  href="#funcionalidades"
                  className="hover:text-gray-900 dark:hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded"
                >
                  Funcionalidades
                </a>
              </li>

              <li>
                <a
                  href="#sobre"
                  className="hover:text-gray-900 dark:hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded"
                >
                  Sobre
                </a>
              </li>

              <li>
                <button
                  onClick={() => navigate("/login")}
                  className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded"
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>

          {/* RECURSOS */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              Recursos
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Gestão de pacientes</li>
              <li>Prescrições dietéticas e de suplementos</li>
              <li>Cálculos e relatórios automatizados</li>
              <li>Atendimento inteligente pelo WhatsApp</li>
              <li>Ambiente exclusivo para pacientes</li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              Contato
            </h3>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#F59E0B]"
                >
                  <Mail size={16} />
                </div>

                <a
                  href="mailto:contato@nomeapp.com"
                  className="hover:text-gray-900 dark:hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded"
                >
                  contato@nomeapp.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-100 dark:border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 gap-4 text-center md:text-left">
          <span>
            © {new Date().getFullYear()} NomeApp. Todos os direitos reservados.
          </span>

          <div className="flex gap-6">
            <button className="hover:text-gray-900 dark:hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded cursor-pointer">
              Termos de Uso
            </button>
            <button className="hover:text-gray-900 dark:hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded cursor-pointer">
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
