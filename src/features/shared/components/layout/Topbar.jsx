import { Bell, Menu } from "lucide-react";
import { useAuth } from "../../../../context/AuthContext";

export default function Topbar({ setOpenMobile }) {
  const { auth } = useAuth();
  const user = auth?.user;

  function getInitials(name) {
    if (!name) return "";

    const parts = name.split(" ");
    const first = parts[0]?.[0] || "";
    const last = parts[parts.length - 1]?.[0] || "";

    return (first + last).toUpperCase();
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white/80 dark:bg-[#0B1220]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpenMobile(true)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu size={18} />
        </button>
      </div>

      <div className="flex items-center gap-5">
        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Bell size={18} className="text-gray-600 dark:text-gray-300" />
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right leading-tight">
            <p className="text-sm font-medium text-gray-800 dark:text-white">
              {user?.name || "Usuário"}
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {user?.role === "nutricionista" ? "Nutricionista" : "Paciente"}
            </span>
          </div>

          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-9 h-9 rounded-full object-cover"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-medium">
              {getInitials(user?.name)}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
