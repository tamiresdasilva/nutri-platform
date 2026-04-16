export default function SectionToggle({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-between items-center p-3 rounded-lg border mb-2
        ${
          active
            ? "bg-green-50 border-green-400"
            : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        }
      `}
    >
      <span>{label}</span>
      <span>{active ? "Ativo" : "Inativo"}</span>
    </button>
  );
}
