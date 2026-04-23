import { useEffect, useRef, useState, useCallback } from "react";
import { MoreVertical, Trash2, Download } from "lucide-react";
import ConfirmationDialog from "./ConfirmationDialog";

export default function ChatWindow({
  messages = [],
  currentUserId,
  selectedUser,
  onDeleteConversation,
  onDeleteMessage,
  emptyState,
}) {
  const bottomRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Opens the confirmation modal (closes the kebab menu first)
  const handleRequestDelete = useCallback(() => {
    setMenuOpen(false);
    setConfirmOpen(true);
  }, []);

  // Called when the user clicks "Excluir" inside the modal
  const handleConfirmDelete = useCallback(() => {
    setConfirmOpen(false);
    onDeleteConversation?.();
  }, [onDeleteConversation]);

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
      {/* ── Top bar ── */}
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

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-800 dark:text-white leading-tight">
            {selectedUser.name}
          </p>
          {selectedUser.subtitle && (
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {selectedUser.subtitle}
            </p>
          )}
        </div>

        {/* ── Kebab menu (Task 1) ── */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Mais opções"
            aria-expanded={menuOpen}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <MoreVertical size={18} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full mt-1 w-52 bg-white dark:bg-[#0B1220] border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg z-20 py-1 animate-in fade-in slide-in-from-top-2 duration-150">
              <button
                onClick={handleRequestDelete}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition text-left"
              >
                <Trash2 size={15} />
                Excluir conversa
              </button>
            </div>
          )}

          {/* ── Confirmation modal ── */}
          <ConfirmationDialog
            open={confirmOpen}
            title={`Excluir conversa com ${selectedUser.name}?`}
            description="Essa ação não pode ser desfeita. Todas as mensagens serão removidas."
            confirmLabel="Excluir"
            cancelLabel="Cancelar"
            onConfirm={handleConfirmDelete}
            onCancel={() => setConfirmOpen(false)}
          />
        </div>
      </div>

      {/* ── Messages area ── */}
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
            <MessageBubble
              key={msg.id}
              msg={msg}
              isMine={isMine}
              onDelete={
                onDeleteMessage ? () => onDeleteMessage(msg.id) : undefined
              }
            />
          );
        })}

        {/* Scroll anchor */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MessageBubble — handles text, images, and file attachments
   Shows a delete icon on hover (Task 3)
───────────────────────────────────────────────────────────── */
function MessageBubble({ msg, isMine, onDelete }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex items-end gap-1.5 ${isMine ? "justify-end" : "justify-start"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Delete icon — left side for own messages */}
      {isMine && onDelete && (
        <button
          onClick={onDelete}
          aria-label="Excluir mensagem"
          className={`shrink-0 p-1 rounded-md text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition ${
            hovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Trash2 size={13} />
        </button>
      )}

      {/* Bubble */}
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
        <BubbleContent msg={msg} isMine={isMine} />

        {msg.sentAt && (
          <span
            className={`block text-[10px] mt-1 text-right ${
              isMine ? "text-green-100/80" : "text-gray-400 dark:text-gray-600"
            }`}
          >
            {msg.sentAt}
          </span>
        )}
      </div>

      {/* Delete icon — right side for received messages */}
      {!isMine && onDelete && (
        <button
          onClick={onDelete}
          aria-label="Excluir mensagem"
          className={`shrink-0 p-1 rounded-md text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition ${
            hovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Trash2 size={13} />
        </button>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   BubbleContent — renders text vs file messages (Task 2)
───────────────────────────────────────────────────────────── */
function BubbleContent({ msg, isMine }) {
  if (msg.type === "file") {
    if (msg.isImage) {
      return (
        <img
          src={msg.fileURL}
          alt={msg.fileName}
          className="rounded-lg max-w-full max-h-60 object-cover block"
          loading="lazy"
        />
      );
    }

    // PDF / other file
    return (
      <div className="flex items-center gap-2">
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
            isMine
              ? "bg-green-400/30"
              : "bg-gray-100 dark:bg-gray-700"
          }`}
        >
          <span className="text-xs font-bold uppercase">
            {msg.fileName?.split(".").pop() ?? "file"}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium truncate">{msg.fileName}</p>
          <a
            href={msg.fileURL}
            download={msg.fileName}
            className={`inline-flex items-center gap-1 text-[11px] mt-0.5 underline underline-offset-2 ${
              isMine
                ? "text-green-100 hover:text-white"
                : "text-green-600 dark:text-green-400 hover:text-green-700"
            }`}
          >
            <Download size={11} />
            Baixar
          </a>
        </div>
      </div>
    );
  }

  // Default: plain text
  return <p>{msg.text}</p>;
}
