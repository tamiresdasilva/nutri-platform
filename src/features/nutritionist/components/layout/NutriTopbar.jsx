import { Bell, Moon, Sun, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function NutriTopbar({ setOpenMobile }) {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

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

  return (
    <header className="h-16 bg-white dark:bg-[#0B1220] border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-6">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* MOBILE MENU */}
        <button
          onClick={() => setOpenMobile(true)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu size={18} />
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* DARK MODE */}
        <button
          onClick={toggleDark}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {dark ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* NOTIFICAÇÃO */}
        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Bell size={18} className="text-gray-600 dark:text-gray-300" />
        </button>

        {/* USER */}
        <div className="flex items-center gap-3">
          <div className="text-right leading-tight">
            <p className="text-sm font-medium text-gray-800 dark:text-white">
              Dra. Ana Silva
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Nutricionista
            </span>
          </div>

          <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-medium">
            AS
          </div>
        </div>
      </div>
    </header>
  );
}
