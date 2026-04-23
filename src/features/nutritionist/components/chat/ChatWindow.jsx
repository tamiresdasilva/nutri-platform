import { useEffect, useRef } from "react";

export default function ChatWindow({
  messages = [],
  currentUserId,
  selectedUser,
  emptyState,
}) {
  const bottomRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // No conversation selected
  if (!selectedUser) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] dark:bg-[#020617] text-gray-400 dark:text-gray-600 select-none">
        {emptyState ?? (
          <>
            <span className="text-5xl mb-4">💬</span>
            <p className="text-sm font-medium">Selecione uma conversa</p>
            <p className="text-xs mt-1 text-gray-300 dark:text-gray-700">
              Escolha um contato no painel ao lado
            </p>
          </>
        )}
      </div>
    );
  }

  const initials = selectedUser.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#FAF7F2] dark:bg-[#020617]">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#0B1220] border-b border-gray-100 dark:border-gray-800 shrink-0">
        {selectedUser.avatar ? (
          <img
            src={selectedUser.avatar}
            alt={selectedUser.name}
            className="w-9 h-9 rounded-full object-cover"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-sm font-semibold text-green-700 dark:text-green-400">
            {initials}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-white leading-tight">
            {selectedUser.name}
          </p>
          {selectedUser.subtitle && (
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {selectedUser.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-2">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-gray-300 dark:text-gray-700 select-none">
            <span className="text-4xl mb-3">🌱</span>
            <p className="text-sm">Nenhuma mensagem ainda.</p>
            <p className="text-xs mt-1">Diga olá!</p>
          </div>
        )}

        {messages.map((msg) => {
          const isMine = msg.senderId === currentUserId;

          return (
            <div
              key={msg.id}
              className={`flex ${isMine ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`
                  relative max-w-[72%] px-4 py-2.5 rounded-2xl shadow-sm text-sm leading-relaxed
                  ${
                    isMine
                      ? "bg-green-500 text-white rounded-br-sm"
                      : "bg-white dark:bg-[#0B1220] text-gray-800 dark:text-gray-100 rounded-bl-sm border border-gray-100 dark:border-gray-800"
                  }
                `}
              >
                <p>{msg.text}</p>
                {msg.sentAt && (
                  <span
                    className={`block text-[10px] mt-1 text-right ${
                      isMine
                        ? "text-green-100/80"
                        : "text-gray-400 dark:text-gray-600"
                    }`}
                  >
                    {msg.sentAt}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {/* Scroll anchor */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
