import {
  LayoutDashboard,
  Users,
  Calendar,
  ClipboardList,
  FileText,
  Pill,
  BarChart3,
  MessageCircle,
  Bell,
  User,
  HelpCircle,
  Settings,
  LogOut,
  X,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const menu = [
  { name: "Painel", icon: LayoutDashboard, path: "/nutri" },
  { name: "Pacientes", icon: Users, path: "/nutri/pacientes" },
  { name: "Agenda", icon: Calendar, path: "/nutri/agenda" },
  {
    name: "Planos Alimentares",
    icon: ClipboardList,
    path: "/nutri/planos-alimentares",
  },
  { name: "Formulários", icon: FileText, path: "/nutri/formularios" },
  { name: "Prescrições", icon: Pill, path: "/nutri/prescricoes" },
  { name: "Relatórios", icon: BarChart3, path: "/nutri/relatorios" },
  { name: "Chat", icon: MessageCircle, path: "/nutri/chat" },
  { name: "Notificações", icon: Bell, path: "/nutri/notificacoes" },
  { name: "Perfil Público", icon: User, path: "/nutri/perfil" },
  { name: "Ajuda", icon: HelpCircle, path: "/nutri/ajuda" },
  { name: "Configurações", icon: Settings, path: "/nutri/config" },
];

export default function NutriSidebar({
  collapsed,
  setCollapsed,
  openMobile,
  setOpenMobile,
}) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {/* OVERLAY MOBILE */}
      {openMobile && (
        <div
          onClick={() => setOpenMobile(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
        fixed md:static z-50
        h-screen
        bg-white dark:bg-[#0B1220]
        border-r border-gray-100 dark:border-gray-800
        flex flex-col justify-between
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
        ${openMobile ? "left-0" : "-left-full md:left-0"}
      `}
      >
        {/* TOP */}
        <div>
          {/* HEADER */}
          <div className="p-4 flex items-center justify-between">
            {!collapsed && (
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-md font-bold">
                  N
                </div>
                <span className="font-semibold text-gray-800 dark:text-white">
                  NomeApp
                </span>
              </div>
            )}

            {/* BOTÕES */}
            <div className="flex items-center gap-2">
              {/* COLLAPSE COM TOOLTIP */}
              <div className="relative group hidden md:block">
                <button
                  onClick={() => setCollapsed((prev) => !prev)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {collapsed ? (
                    <PanelLeftOpen size={18} />
                  ) : (
                    <PanelLeftClose size={18} />
                  )}
                </button>

                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {collapsed ? "Expandir menu" : "Minimizar menu"}
                </span>
              </div>

              {/* CLOSE MOBILE */}
              <button
                onClick={() => setOpenMobile(false)}
                className="md:hidden p-2"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* MENU */}
          <nav className="px-2 space-y-1">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/nutri"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                    ${
                      isActive
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
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
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
          >
            <LogOut size={18} />
            {!collapsed && "Sair da conta"}
          </button>
        </div>
      </aside>
    </>
  );
}
