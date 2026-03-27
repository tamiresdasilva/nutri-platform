import { Moon, PersonStanding } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-green-100 text-green-600 p-2 rounded-xl">
            <span className="font-bold">N</span>
          </div>
          <span className="font-semibold text-[#111827] text-[16px] tracking-tight">
            NomeApp
          </span>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-[#6B7280] text-[14px] font-medium">
          <a href="#" className="hover:text-[#111827] transition">
            Início
          </a>
          <a
            href="#funcionalidades"
            className="hover:text-[#111827] transition"
          >
            Funcionalidades
          </a>
          <a
            href="#como-participar"
            className="hover:text-[#111827] transition"
          >
            Como Participar
          </a>
          <a href="#sobre" className="hover:text-[#111827] transition">
            Sobre
          </a>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          {/* ACESSIBILIDADE */}
          <button className="p-2 rounded-lg hover:bg-gray-100 transition">
            <PersonStanding size={18} className="text-gray-500" />
          </button>

          {/* DARK MODE */}
          <button className="p-2 rounded-lg hover:bg-gray-100 transition">
            <Moon size={18} className="text-gray-500" />
          </button>

          {/* LOGIN */}
          <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-[#111827] text-[14px] hover:bg-gray-50 transition shadow-sm">
            Login
          </button>

          {/* CTA */}
          <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-5 py-2 rounded-lg text-[14px] font-medium transition shadow-sm">
            Solicitar Acesso
          </button>
        </div>
      </div>
    </header>
  );
}
