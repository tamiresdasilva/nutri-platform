import { Bell, Menu } from "lucide-react";

export default function PatientTopbar({ setOpenMobile }) {
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
        {/* NOTIFICAÇÃO */}
        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Bell size={18} className="text-gray-600 dark:text-gray-300" />
        </button>

        {/* USER */}
        <div className="flex items-center gap-3">
          <div className="text-right leading-tight">
            <p className="text-sm font-medium text-gray-800 dark:text-white">
              João Silva
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Paciente
            </span>
          </div>

          <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-medium">
            JS
          </div>
        </div>
      </div>
    </header>
  );
}
