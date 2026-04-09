import { Moon, Sun, PersonStanding, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    applyTheme(dark);
  }, [dark]);

  // fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-white dark:bg-[#0F172A] border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-300 mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-xl">
            <span className="font-bold">N</span>
          </div>

          <span className="font-semibold text-[#111827] dark:text-white text-[16px] tracking-tight">
            NomeApp
          </span>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-[#6B7280] dark:text-gray-400 text-[14px] font-medium">
          <a
            href="#"
            className="hover:text-[#111827] dark:hover:text-white cursor-pointer transition"
          >
            Início
          </a>
          <a
            href="#funcionalidades"
            className="hover:text-[#111827] dark:hover:text-white cursor-pointer transition"
          >
            Funcionalidades
          </a>
          <a
            href="#sobre"
            className="hover:text-[#111827] dark:hover:text-white cursor-pointer transition"
          >
            Sobre
          </a>
        </nav>

        {/* ACTIONS DESKTOP */}
        <div className="hidden md:flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition">
            <PersonStanding
              size={18}
              className="text-gray-500 dark:text-gray-400"
            />
          </button>

          <button
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
          >
            {dark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-500 dark:text-gray-300" />
            )}
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0B1220] text-[#111827] dark:text-white text-[14px] hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition shadow-sm "
          >
            Login
          </button>

          <button
            onClick={() => navigate("/request-access")}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-5 py-2 rounded-lg text-[14px] font-medium cursor-pointer transition shadow-sm"
          >
            Solicitar Acesso
          </button>
        </div>

        {/* MOBILE */}
        <div
          className="md:hidden flex items-center gap-2 relative"
          ref={menuRef}
        >
          {/* ICONES (lado esquerdo do hamburger) */}
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition">
            <PersonStanding
              size={18}
              className="text-gray-500 dark:text-gray-400"
            />
          </button>

          <button
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
          >
            {dark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-500 dark:text-gray-300" />
            )}
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
          >
            {open ? (
              <X size={20} className="text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu size={20} className="text-gray-600 dark:text-gray-300" />
            )}
          </button>

          {/* DROPDOWN MENU */}
          {open && (
            <div
              className="absolute z-50 top-full right-0 w-56 bg-white dark:bg-[#0B1220] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-3 flex flex-col text-[14px] text-[#6B7280] dark:text-gray-400 animate-in fade-in zoom-in-95"
              style={{ marginRight: "-24px" }} // tira o padding do container
            >
              {/* LINKS */}
              <a
                onClick={() => setOpen(false)}
                href="#"
                className="py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
              >
                Início
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#funcionalidades"
                className="py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
              >
                Funcionalidades
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#sobre"
                className="py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
              >
                Sobre
              </a>

              {/* DIVISOR */}
              <div className="my-2 border-t border-gray-200 dark:border-gray-700" />

              {/* ACTIONS COMO LINKS */}
              <button
                onClick={() => handleNavigate("/login")}
                className="text-left py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
              >
                Login
              </button>

              <button
                onClick={() => handleNavigate("/request-access")}
                className="text-left py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
              >
                Solicitar Acesso
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
