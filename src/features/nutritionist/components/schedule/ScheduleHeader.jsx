export default function ScheduleHeader({ onNew }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Agenda
        </h1>
        <p className="text-sm text-gray-400">
          Gerencie suas consultas e compromissos
        </p>
      </div>

      <button
        onClick={onNew}
        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm"
      >
        + Nova consulta
      </button>
    </div>
  );
}
