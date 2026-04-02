import { Moon, Sun, PersonStanding } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // aplica o tema sempre que muda
  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleDark = () => {
    const newTheme = !dark;
    setDark(newTheme);
    applyTheme(newTheme);
  };

  // 👇 garante que o tema inicial seja aplicado
  useEffect(() => {
    applyTheme(dark);
  }, [dark]);

  return (
    <header className="w-full bg-white dark:bg-[#020617] border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-xl">
            <span className="font-bold">N</span>
          </div>

          <span className="font-semibold text-[#111827] dark:text-white text-[16px] tracking-tight">
            NomeApp
          </span>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-[#6B7280] dark:text-gray-400 text-[14px] font-medium">
          <a
            href="#"
            className="hover:text-[#111827] dark:hover:text-white transition"
          >
            Início
          </a>
          <a
            href="#funcionalidades"
            className="hover:text-[#111827] dark:hover:text-white transition"
          >
            Funcionalidades
          </a>
          <a
            href="#como-participar"
            className="hover:text-[#111827] dark:hover:text-white transition"
          >
            Como Participar
          </a>
          <a
            href="#sobre"
            className="hover:text-[#111827] dark:hover:text-white transition"
          >
            Sobre
          </a>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <PersonStanding
              size={18}
              className="text-gray-500 dark:text-gray-400"
            />
          </button>

          {/* DARK MODE */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-500 dark:text-gray-300" />
            )}
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0B1220] text-[#111827] dark:text-white text-[14px] hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm"
          >
            Login
          </button>

          <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-5 py-2 rounded-lg text-[14px] font-medium transition shadow-sm">
            Solicitar Acesso
          </button>
        </div>
      </div>
    </header>
  );
}
