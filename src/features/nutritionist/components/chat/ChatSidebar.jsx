import { Search } from "lucide-react";

export default function ChatSidebar({
  conversations = [],
  selectedId,
  onSelect,
  currentUserRole,
  searchQuery = "",
  onSearchChange,
}) {
  const filtered = conversations.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const roleLabel =
    currentUserRole === "nutricionista" ? "Pacientes" : "Nutricionista";

  return (
    <aside className="flex flex-col h-full w-full bg-white dark:bg-[#0B1220] border-r border-gray-100 dark:border-gray-800">
      {/* Header */}
      <div className="px-4 pt-5 pb-3 border-b border-gray-100 dark:border-gray-800">
        <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-3">
          {roleLabel}
        </h2>

        {/* Search */}
        <div className="relative">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Buscar conversa..."
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="
              w-full pl-9 pr-3 py-2 text-sm rounded-lg
              bg-[#FAF7F2] dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              text-gray-700 dark:text-gray-200
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-green-400/50
              transition
            "
          />
        </div>
      </div>

      {/* List */}
      <ul className="flex-1 overflow-y-auto divide-y divide-gray-50 dark:divide-gray-800/60">
        {filtered.length === 0 && (
          <li className="py-10 text-center text-sm text-gray-400 dark:text-gray-500">
            Nenhuma conversa encontrada.
          </li>
        )}

        {filtered.map((conv) => {
          const isSelected = conv.id === selectedId;
          const initials = conv.name
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")
            .toUpperCase();

          return (
            <li key={conv.id}>
              <button
                onClick={() => onSelect?.(conv)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 text-left transition
                  ${
                    isSelected
                      ? "bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800/60 border-l-4 border-transparent"
                  }
                `}
              >
                {/* Avatar */}
                <div className="relative shrink-0">
                  {conv.avatar ? (
                    <img
                      src={conv.avatar}
                      alt={conv.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-sm font-semibold text-green-700 dark:text-green-400">
                      {initials}
                    </div>
                  )}

                  {/* Unread badge */}
                  {conv.unread > 0 && !isSelected && (
                    <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-green-500 text-white text-[10px] font-bold flex items-center justify-center leading-none">
                      {conv.unread > 9 ? "9+" : conv.unread}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-sm font-medium truncate ${
                        isSelected
                          ? "text-green-700 dark:text-green-400"
                          : "text-gray-800 dark:text-gray-100"
                      }`}
                    >
                      {conv.name}
                    </span>
                    {conv.lastMessageAt && (
                      <span className="text-[11px] text-gray-400 dark:text-gray-500 shrink-0">
                        {conv.lastMessageAt}
                      </span>
                    )}
                  </div>
                  {conv.lastMessage && (
                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate mt-0.5">
                      {conv.lastMessage}
                    </p>
                  )}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
