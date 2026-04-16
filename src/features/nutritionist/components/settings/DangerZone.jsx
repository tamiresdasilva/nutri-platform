import { AlertTriangle } from "lucide-react";

export default function DangerZone() {
  return (
    <section className="space-y-4">
      {/* HEADER */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Zona de Risco
      </h2>

      {/* CARD */}
      <div className="border border-red-300 bg-red-50 dark:bg-red-900/20 p-5 rounded-2xl flex flex-col gap-4">
        {/* TOP */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertTriangle size={18} />
          </div>

          <div>
            <p className="font-semibold text-red-600">Excluir Conta</p>
            <p className="text-sm text-red-500">
              Uma vez excluída, sua conta não poderá ser recuperada. Todos os
              seus dados, incluindo histórico de consultas, planos alimentares e
              registros, serão permanentemente removidos.
            </p>
          </div>
        </div>

        {/* ACTION */}
        <div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium transition">
            Excluir Minha Conta
          </button>
        </div>
      </div>
    </section>
  );
}
