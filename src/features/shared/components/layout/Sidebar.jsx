import { LogOut, X, ChevronLeft, ChevronRight } from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

export default function Sidebar({
  menu,
  collapsed,
  setCollapsed,
  openMobile,
  setOpenMobile,
}) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {openMobile && (
        <div
          onClick={() => setOpenMobile(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
            fixed top-0 left-0 z-50
            h-screen
             bg-white dark:bg-[#0B1220]
            border-r border-gray-100 dark:border-gray-800
            flex flex-col justify-between
            transition-all duration-300
            ${collapsed ? "w-20" : "w-64"}
            ${openMobile ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* TOP */}
        <div>
          {/* HEADER */}
          <div className="relative p-4 flex items-center">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-md font-bold">
                N
              </div>

              {!collapsed && (
                <span className="font-semibold text-gray-800 dark:text-white">
                  NomeApp
                </span>
              )}
            </div>

            {/* BOTÃO COLLAPSE */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="relative group">
                <button
                  onClick={() => setCollapsed((prev) => !prev)}
                  className="w-7 h-7 flex items-center justify-center rounded-full
                  bg-green-500 text-white shadow-md hover:bg-green-600 cursor-pointer transition"
                >
                  {collapsed ? (
                    <ChevronRight size={16} />
                  ) : (
                    <ChevronLeft size={16} />
                  )}
                </button>

                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {collapsed ? "Expandir menu" : "Minimizar menu"}
                </span>
              </div>
            </div>

            {/* CLOSE MOBILE */}
            <button
              onClick={() => setOpenMobile(false)}
              className="md:hidden ml-auto p-2 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* MENU */}
          <nav className="px-2 space-y-1 mt-2">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                    ${
                      isActive
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }
                    ${collapsed ? "justify-center" : ""}
                  `
                  }
                >
                  <Icon size={18} />
                  {!collapsed && item.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* LOGOUT */}
        <div className="p-3">
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm 
            text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition cursor-pointer
            ${collapsed ? "justify-center" : ""}
            `}
          >
            <LogOut size={18} />
            {!collapsed && "Sair da conta"}
          </button>
        </div>
      </aside>
    </>
  );
}
